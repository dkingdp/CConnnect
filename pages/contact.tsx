import ContactForm from "@components/ContactForm";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainContact from "@components/MainContact";
import Head from "next/head";

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Container>
                <>
                    <Header />
                    <MainContact />
                    <ContactForm />
                    <Footer />
                </>
            </Container>
        </>
    );
};

export default Contact;
