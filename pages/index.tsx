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
            <Container>
                <>
                    <Main />
                    <Services />
                    <Features />
                    <Gallery />
                    <Info />
               
                </>
            </Container>
        </>
    );
};

export default Home;
