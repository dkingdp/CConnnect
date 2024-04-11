import Container from "@components/Container";
import Content from "@components/Content";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainImmigration from "@components/MainImmigration";
import Head from "next/head";
import React from "react";

const immigration = () => {
    return (
        <>
            <Container>
                <>
                    <MainImmigration />
                    <Content />
             
                </>
            </Container>
        </>
    );
};

export default immigration;
