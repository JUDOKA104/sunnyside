import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Emily R.",
        role: "Marketing Director",
        img: "/images/image-emily.jpg",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
    },
    {
        id: 2,
        name: "Thomas S.",
        role: "Chief Operating Officer",
        img: "/images/image-thomas.jpg",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
    },
    {
        id: 3,
        name: "Jennie F.",
        role: "Business Owner",
        img: "/images/image-jennie.jpg",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-heading">Client testimonials</h2>

            <div className="testimonials-grid">
                {testimonials.map(t => (
                    <div key={t.id} className="testimonial-card">
                        <img src={t.img} alt={t.name} className="client-img" />
                        <p className="client-text">{t.text}</p>
                        <div className="client-info">
                            <h4 className="client-name">{t.name}</h4>
                            <span className="client-role">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}