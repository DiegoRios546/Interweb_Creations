require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

// Configura la conexión a MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

// Configura Passport con Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    // Verifica si el usuario ya existe en la base de datos
    const email = profile.emails[0].value;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return done(err);
        if (results.length > 0) {
            done(null, results[0]);
        } else {
            // Si no existe, crea un nuevo usuario
            const newUser = { name: profile.displayName, email };
            db.query('INSERT INTO users SET ?', newUser, (err, result) => {
                if (err) return done(err);
                newUser.id = result.insertId;
                done(null, newUser);
            });
        }
    });
}));

// Ruta para autenticación con Google
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Ruta para registro de usuario
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query('INSERT INTO users SET ?', { name, email, password: hashedPassword }, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Usuario registrado con éxito' });
    });
});

// Ruta para inicio de sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;
        if (results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
});

app.listen(5000, () => console.log('Servidor corriendo en el puerto 5000'));
