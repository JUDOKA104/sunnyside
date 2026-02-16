import { useEffect } from 'react'; // N'oublie pas l'import !
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <>
            <Hero />
            <About />
            <Testimonials />
            <Gallery />
            <Footer />
        </>
    );
}

export default App;