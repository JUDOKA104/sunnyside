// src/components/Hero.jsx
import { useState } from 'react';
import './Hero.css';

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="hero">
            <nav className="navbar">
                <img src="./images/logo.svg" alt="Sunnyside Logo" className="logo" />

                {/* Bouton Hamburger (Mobile uniquement) */}
                <button
                    className="hamburger-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <img src="./images/icon-hamburger.svg" alt="menu icon" />
                </button>

                {/* Liens de navigation (Bulle sur mobile, Ligne sur PC) */}
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact" className="contact-btn">Contact</a></li>
                </ul>
            </nav>

            <h1 className="hero-title">We are creatives</h1>
            <img src="./images/icon-arrow-down.svg" alt="arrow down" className="arrow-down animate-arrow" />
        </section>
    );
}