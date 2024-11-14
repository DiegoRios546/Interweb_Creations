import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainBanner.css';

const MainBanner = () => {
  const banners = [
    { 
      title: 'Explora Nuevas Oportunidades', 
      description: 'La tecnologia nos ofrece oportunidades para mejorar nuestro sistema laboral.', 
      imgUrl: require('/public/images/banner1.jpg') 
    },
    { 
      title: 'Descubre tu mercado potencial', 
      description: 'El internet es tu mejor aliado para mejorar tus ventas y llegar a tus clientes potenciales.', 
      imgUrl: require('/public/images/banner2.jpg') 
    },
    { 
      title: 'Adaptate al futuro', 
      description: 'las tecnologias son el futuro asi que la mejor opcion es adaptarse para destacar.', 
      imgUrl: require('/public/images/banner3.jpg') 
    }
  ];

  return (
    <Carousel fade controls={false} indicators={true} className="main-banner">
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image" style={{ backgroundImage: `url(${banner.imgUrl})` }}></div>
          <div className="overlay"></div>
          <Carousel.Caption className="carousel-content">
            <h1 className="title">{banner.title}</h1>
            <p className="description">{banner.description}</p>
            <button className="btn btn-outline-light btn-lg explore-btn">Ver Más</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainBanner;
