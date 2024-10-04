import React from "react";

function onClickButton(event) {
  event.preventDefault();
}

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contactanos con gusto te atenderemos</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Ingresa tu nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Numero de telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+52"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Correo electronico</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="nombre@ejemplo.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Dejanos un mensaje!
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
