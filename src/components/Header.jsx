// Header.jsx (completo y actualizado)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import logo from '../img/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { carrito } = useCarrito();

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
        { to: "/productos", label: "Productos" },
        { to: "/servicios", label: "Servicios" },
        { to: "/contactenos", label: "Contáctenos" },
        { href: "#nosotros", label: "Nosotros" }
    ];

    return (
        <>
            {/* Top Bar */}
            <div className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="social-media">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
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
                        <Link to="/carrito" className="cart-link">
                            <i className="fas fa-shopping-cart"></i> 
                            Carrito
                            {carrito.length > 0 && (
                                <span className="cart-count">{carrito.length}</span>
                            )}
                        </Link>
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

            {/* Navigation */}
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