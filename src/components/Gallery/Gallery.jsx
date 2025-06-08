import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";

const images = [
    "/img/Img1.jpg",
    "/img/Img2.jpg",
    "/img/Img3.jpg",
    "/img/Img4.jpg",
    "/img/Img5.jpg",
    "/img/Img6.jpg",
    "/img/Img7.jpg",
    "/img/Img8.jpg",
    "/img/Img9.jpg",
];

export default function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const changeImage = (step) => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + step + images.length) % images.length
        );
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxOpen) {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowLeft") changeImage(-1);
                if (e.key === "ArrowRight") changeImage(1);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen]);

    return (
        <section id="galeria" className={styles.galeria}>
            <div className="container">
                <h2>Nossos Trabalhos</h2>
                <div className={styles.galeriaGrid}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={styles.galeriaItem}
                            onClick={() => openLightbox(index)}
                        >
                            <img src={img} alt={`Projeto ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {lightboxOpen && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <span
                        className={styles.fechar}
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                    >
                        &times;
                    </span>
                    <div
                        className={styles.lightboxConteudo}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[currentImageIndex]}
                            alt={`Projeto ${currentImageIndex + 1}`}
                        />
                        <button
                            className={styles.anterior}
                            onClick={(e) => {
                                e.stopPropagation();
                                changeImage(-1);
                            }}
                        >
                            &#10094;
                        </button>
                        <button
                            className={styles.proxima}
                            onClick={(e) => {
                                e.stopPropagation();
                                changeImage(1);
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
