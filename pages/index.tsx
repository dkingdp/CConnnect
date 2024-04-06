import Container from "@components/Container";
import Features from "@components/Features";
import Footer from "@components/Footer";
import Gallery from "@components/Gallery";
import Header from "@components/Header";
import Info from "@components/Info";
import Main from "@components/Main";
import Services from "@components/Services";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
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
                    <Main />
                    <Services />
                    <Features />
                    <Gallery />
                    <Info />
                    <Footer />
                </>
            </Container>
        </>
    );
};

export default Home;
