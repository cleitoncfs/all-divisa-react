import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
    return (
        <div className={styles.whatsappIcon}>
            <a
                href="https://wa.me/5567992011664/?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20ALL%20Divisa%20Decorações."
                target="_blank"
                rel="noopener noreferrer"
                title="Fale com a ALL Divisa Decorações pelo WhatsApp"
                aria-label="Abrir conversa no WhatsApp com a ALL Divisa Decorações"
            >
                <img
                    src="/img/whatsapp-logo-128x128_resized.png"
                    alt="WhatsApp da ALL Divisa Decorações"
                />
            </a>
        </div>
    );
}
