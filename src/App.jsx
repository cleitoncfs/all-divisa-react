import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { Helmet } from "react-helmet";

function App() {
    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "ALL Divisa Decorações",
        image: "https://www.seusite.com/img/logo.jpg",
        description:
            "Especialista em Divisórias, Forros e Persianas em Campo Grande/MS",
        address: {
            "@type": "PostalAddress",
            streetAddress: "[Endereço Completo]",
            addressLocality: "Campo Grande",
            addressRegion: "MS",
            postalCode: "79100-000",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "-20.4697",
            longitude: "-54.6201",
        },
        telephone: "[67] 99201-1664",
        openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-12:00",
        priceRange: "$$",
        url: "https://alldivisa.netlify.app/",
        areaServed: {
            "@type": "State",
            name: "Mato Grosso do Sul",
        },
    };

    return (
        <div className="app-container">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLD)}
                </script>
            </Helmet>
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
