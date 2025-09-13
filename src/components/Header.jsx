import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Buscando:', searchQuery);
            setSearchQuery('');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { to: "/", label: "Inicio" },
        { to: "/productos", label: "Productos" }, // Cambiado a ruta /productos
        { to: "/servicios", label: "Servicios" },
        { to: "/contactenos", label: "Contáctenos" }, // Cambiado a ruta /contactenos
        { href: "#nosotros", label: "Nosotros" }
    ];

    return (
        <>
            {/* Top Bar (sin cambios) */}
            <div className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    {/* <div className="contact-info">
                        <span><i className="fas fa-phone"></i> +51 977549783</span>
                        <span><i className="fas fa-envelope"></i> contacto@petshop.com</span>
                    </div> */}
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Header (sin cambios) */}
            <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={logo} alt="PetShop Logo" />
                    </Link>

                    <div className="search-bar">
                        <form onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                placeholder="Buscar productos..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>

                    <div className="user-actions">
                        <a href="#carrito"><i className="fas fa-shopping-cart"></i> Carrito</a>
                        <a href="#cuenta"><i className="fas fa-user"></i> Mi Cuenta</a>
                    </div>

                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Navigation - Modificado para usar React Router */}
            <nav className={`main-nav ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                {item.to ? (
                                    <Link 
                                        to={item.to} 
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <a 
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {isMenuOpen && (
                <div 
                    className="menu-overlay"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Header;