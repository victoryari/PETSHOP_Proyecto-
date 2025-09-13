import React, { useState, useEffect } from "react";
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
import banner3 from '../img/banner3.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: banner1,
            title: "Bienvenido a PetShop",
            description: "Todo lo que tu mascota necesita en un solo lugar",
            buttonText: "Ver Productos",
            link: "#productos"
        },
        {
            image: banner2,
            title: "Productos de Calidad",
            description: "Alimentos, juguetes y accesorios para tu mejor amigo",
            buttonText: "Ver Marcas",
            link: "#marcas"
        },
        {
            image: banner3,
            title: "Servicios Especializados",
            description: "Baño, peluquería y guardería para mascotas",
            buttonText: "Ver Servicios",
            link: "#servicios"
        }
    ];

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Función para retroceder al slide anterior
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Función para ir a un slide específico
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Efecto para el cambio automático de slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <section className="banner-slider">
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={`Banner ${index + 1}`} />
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <a href={slide.link} className="btn">{slide.buttonText}</a>
                        </div>
                    </div>
                ))}
                
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
                
                <div className="dots-container">
                    {slides.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;