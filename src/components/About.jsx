import './About.css';

export default function About() {
    return (
        <section className="about-grid">

            <picture className="grid-image egg-image">
                <source media="(min-width: 768px)" srcSet="./images/desktop/image-transform.jpg" />
                <img src="./images/mobile/image-transform.jpg" alt="Transform your brand" />
            </picture>

            <div className="grid-text yellow-underline transform-text">
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#">Learn more</a>
            </div>

            <picture className="grid-image">
                <source media="(min-width: 768px)" srcSet="./images/desktop/image-stand-out.jpg" />
                <img src="./images/mobile/image-stand-out.jpg" alt="Stand out to the right audience" />
            </picture>

            <div className="grid-text red-underline">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a href="#">Learn more</a>
            </div>

            <div className="service-box graphic-design">
                <div className="service-content">
                    <h3>Graphic design</h3>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>

            <div className="service-box photography">
                <div className="service-content">
                    <h3>Photography</h3>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>

        </section>
    );
}