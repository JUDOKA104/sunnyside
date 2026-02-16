export default function Gallery() {
    const images = ['milkbottles', 'orange', 'cone', 'sugarcubes'];
    return (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {images.map(img => (
                <img key={img} src={`./images/desktop/image-gallery-${img}.jpg`} alt={img} />
            ))}
        </section>
    );
}