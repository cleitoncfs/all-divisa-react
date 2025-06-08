import { useState, useEffect } from "react";

export default function useActiveMenu() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                // Removida a variável não utilizada sectionHeight
                if (window.pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return activeSection;
}
