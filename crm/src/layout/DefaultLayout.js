import React, { Component } from 'react'
import Footer from './partials/Footer.comp';
import Header from './partials/Header.comp';


const DefaultLayout = ({ children }) => {
    return (
        <div className="default layout">
            <header className="header">
                <Header />
            </header>
            <main className="main">
                {children}
            </main>
            <footer clasName="footer">
                <Footer />
            </footer>

        </div>
    )
}

export default DefaultLayout