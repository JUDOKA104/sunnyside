export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--dark-moderate-cyan)', padding: '60px 0', textAlign: 'center', color: 'var(--dark-desaturated-cyan)' }}>
            <h2 style={{ fontSize: '30px', marginBottom: '40px', fontWeight: '900' }}>sunnyside</h2>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px' }}>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
                <img src="./images/icon-facebook.svg" alt="facebook" />
                <img src="./images/icon-instagram.svg" alt="instagram" />
                <img src="./images/icon-twitter.svg" alt="twitter" />
                <img src="./images/icon-pinterest.svg" alt="pinterest" />
            </div>
        </footer>
    );
}