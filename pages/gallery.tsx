import Container from "@components/Container";
import Footer from "@components/Footer";
import Gallery from "@components/Gallery";
import Header from "@components/Header";
import MainGallery from "@components/MainGallery";
import Head from "next/head";
import React from "react";

const GalleryPage: React.FC = () => {
    return (
        <>
           
            <Container>
                <>
                    <MainGallery />
                    <Gallery />
                    <div className="w-full flex justify-center">
                        <div className="text-white bg-primary-100 mt-20 w-60 rounded-r-full rounded-l-full h-20 flex justify-center items-center">More Pictures</div>
                    </div>
       
                </>
            </Container>
        </>
    );
};

export default GalleryPage;
