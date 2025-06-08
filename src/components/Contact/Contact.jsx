import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });
    const [feedback, setFeedback] = useState({
        show: false,
        message: "",
        type: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nome || !formData.email || !formData.mensagem) {
            showFeedback("Por favor, preencha todos os campos.", "error");
            return;
        }

        const telefone = "5567992011664";
        const texto = `Olá! Meu nome é ${formData.nome}. Meu e-mail é ${formData.email}. ${formData.mensagem}`;
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
            texto
        )}`;

        showFeedback(
            "Mensagem pronta para envio! Redirecionando ao WhatsApp...",
            "success"
        );

        window.open(url, "_blank");
        setFormData({ nome: "", email: "", mensagem: "" });
    };

    const showFeedback = (message, type) => {
        setFeedback({ show: true, message, type });
        setTimeout(
            () => setFeedback((prev) => ({ ...prev, show: false })),
            3000
        );
    };

    return (
        <section id="contato" className={styles.contato}>
            <div className="container">
                <h2>Contato</h2>
                <p>
                    Entre em contato para solicitar um orçamento personalizado
                    ou tirar suas dúvidas.
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Seu Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Seu Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                    <textarea
                        id="mensagem"
                        placeholder="Sua Mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                    ></textarea>
                    <button type="submit" className={styles.button}>
                        Enviar
                    </button>
                </form>
                {feedback.show && (
                    <div
                        className={`${styles.feedbackMensagem} ${
                            styles[feedback.type]
                        }`}
                    >
                        {feedback.message}
                    </div>
                )}
            </div>
        </section>
    );
}
