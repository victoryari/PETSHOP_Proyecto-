import React from "react";
import alimento from '../img/alimento.png';
import accesorios from '../img/accesorios.png';
import juguetes from '../img/juguetes.png';
import higiene from '../img/higiene.png';

const Categorias = () => {
    // Datos de las categorías en un array para mejor mantenibilidad
    const categorias = [
        {
            id: 1,
            imagen: alimento,
            nombre: "Alimentos",
            alt: "Alimentos para mascotas",
            enlace: "/alimentos"
        },
        {
            id: 2,
            imagen: juguetes,
            nombre: "Juguetes",
            alt: "Juguetes para mascotas",
            enlace: "/juguetes"
        },
        {
            id: 3,
            imagen: accesorios,
            nombre: "Accesorios",
            alt: "Accesorios para mascotas",
            enlace: "/accesorios"
        },
        {
            id: 4,
            imagen: higiene,
            nombre: "Servicios",
            alt: "Servicios para mascotas",
            enlace: "/servicios"
        }
    ];

    return (
        <section className="featured-categories" id="productos">
            <div className="container">
                <h2>Categorías Destacadas</h2>
                <div className="grid-categorias">
                    {categorias.map((categoria) => (
                        <a 
                            key={categoria.id} 
                            href={categoria.enlace} 
                            className="categoria-link"
                        >
                            <div className="categoria">
                                <img 
                                    src={categoria.imagen} 
                                    alt={categoria.alt}
                                    loading="lazy" // Mejora de rendimiento
                                />
                                <h3>{categoria.nombre}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categorias;