import styles from "./Footer.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.redesSociais}>
                    <a
                        href="https://www.instagram.com/alldivisadecoracoes/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/instagram-icon.png" alt="Instagram" />
                    </a>
                    <a
                        href="https://www.facebook.com/AllDivisaDecoracoesLtda/?locale=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/seulinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/linkedin-icon.png" alt="LinkedIn" />
                    </a>
                </div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} ALL Divisa Decorações - Todos os direitos reservados
                </p>

                <p className={styles.credits}>
                    Desenvolvido por{" "}
                    <a
                        href="https://portfolio-cleiton.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                        aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                    >
                        <span>Cleiton Santos</span>
                        <FaExternalLinkAlt className={styles.linkIcon} />
                    </a>
                </p>
            </div>
        </footer>
    );
}
