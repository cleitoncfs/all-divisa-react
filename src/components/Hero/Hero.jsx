import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h2>Soluções em Divisórias, Forros e Persianas</h2>
                        <p>
                            Qualidade, agilidade e bom gosto para transformar
                            seus ambientes.
                        </p>
                        <a
                            href="https://wa.me/5567992011664"
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fale conosco no WhatsApp
                        </a>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="/img/Hero.png"
                            alt="Exemplo de divisória decorativa"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
