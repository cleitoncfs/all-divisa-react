import styles from "./About.module.css";

export default function About() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className="container">
                <h2>Sobre Nós</h2>

                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        A <strong>ALL Divisa Decorações</strong>, fundada em{" "}
                        <strong>2011</strong>, tornou-se referência em
                        divisórias, forros e persianas.
                    </p>

                    <p className={styles.paragraph}>
                        Soluções <strong>sob medida</strong>, excelente
                        acabamento e atendimento personalizado garantem
                        qualidade e satisfação dos clientes.
                    </p>

                    <p className={styles.paragraph}>
                        A trajetória da empresa é marcada por{" "}
                        <strong>dedicação</strong>,{" "}
                        <strong>profissionalismo</strong> e compromisso
                        inabalável com resultados que{" "}
                        <strong>superam expectativas</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
}
