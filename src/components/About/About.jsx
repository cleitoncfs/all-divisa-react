import styles from "./About.module.css";

export default function About() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className="container">
                <h2>Sobre Nós</h2>
                <p>
                    A ALL Divisa Decorações é referência em divisórias, forros e
                    persianas, oferecendo soluções sob medida com excelente
                    acabamento e atendimento personalizado.
                </p>
            </div>
        </section>
    );
}
