import React from "react";
import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import paypal from '../img/paypal.png';


const Footer = () => {
    return (
        <>
        <footer className="main-footer">
        <div className="container">
            <div className="footer-column">
                <h3>PetShop</h3>
                <p>Tu tienda de confianza para todo lo relacionado con mascotas. Ofrecemos una amplia gama de productos y servicios para el cuidado y bienestar de tus animales.</p>
                
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <p>© 2025 PetShop - Tienda de Mascotas. Todos los derechos reservados.</p>
                    
                </div>
            </div>
        </div>
        </footer>
</>
    );
}

export default Footer;
