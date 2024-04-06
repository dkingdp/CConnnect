import AboutInfo from "@components/AboutInfo";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainAbout from "@components/MainAbout";
import Head from "next/head";

const About: React.FC = () => {
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
                    <MainAbout />
                    <AboutInfo />
                    <Footer />
                </>
            </Container>
        </>
    );
};

export default About;