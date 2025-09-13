import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Asumiendo que tienes un componente Footer

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;