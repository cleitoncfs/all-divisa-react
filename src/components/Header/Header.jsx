import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="#" className={styles.logo}>
                    <img
                        src="/img/logo-all.jpg"
                        alt="ALL Divisa Decorações"
                        className={styles.logoNavbar}
                    />
                </a>
                <nav>
                    <button
                        className={`${styles.menuToggle} ${
                            menuOpen ? styles.active : ""
                        }`}
                        onClick={toggleMenu}
                        aria-label="Abrir menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul
                        className={`${styles.navList} ${
                            menuOpen ? styles.show : ""
                        }`}
                    >
                        <li className={styles.navItem}>
                            <a href="#sobre" className={styles.navLink}>
                                Sobre
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#servicos" className={styles.navLink}>
                                Serviços
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#galeria" className={styles.navLink}>
                                Galeria
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#contato" className={styles.navLink}>
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
