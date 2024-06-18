import Container from "@components/Container";
// import Footer from "@components/Footer";
// import Header from "@components/Header";
// import Head from "next/head";
import Gallery from "@components/Gallery";
import MainGallery from "@components/MainGallery";
import Img1 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.34 (1).jpeg";
import Img2 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.34.jpeg";
import Img3 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.35 (1).jpeg";
import Img4 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.35.jpeg";
import Img5 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.36 (1).jpeg";
import Img6 from "../src/icons/WhatsApp Image 2024-04-01 at 14.51.36.jpeg";
import Cc1 from "../src/icons/cc-images.jpeg";
import Cc2 from "../src/icons/cc-2.jpeg";
import Cc3 from "../src/icons/cc-3.jpeg";
import Cc4 from "../src/icons/cc-4.jpeg";
import Cc5 from "../src/icons/cc-5.jpeg";
import Cc6 from "../src/icons/cc-6.jpeg";
import Cc7 from "../src/icons/cc-7.jpeg";
import Cc8 from "../src/icons/cc-8.jpeg";
import React, { useState } from "react";
import Image from "next/image";

const GalleryPage: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <Container>
                <>
                    <MainGallery />
                    <Gallery />
                    {showMore ? (
                        <>
                            {" "}
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Img1} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Img2} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Img3} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Img4} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Img5} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Img6} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Cc1} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Cc2} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Cc3} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Cc4} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Cc5} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Cc6} />
                                </div>
                            </div>
                            <div className="px-4 sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                                <div className="col-span-1  flex justify-end">
                                    <Image src={Cc7} />
                                </div>
                                <div className="col-span-1  flex justify-start">
                                    <Image src={Cc8} />
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    {!showMore ? (
                        <div className="w-full flex justify-center">
                            <div
                                className="text-white bg-primary-100 mt-20 w-60 rounded-r-full rounded-l-full h-20 flex justify-center items-center cursor-pointer"
                                onClick={() => setShowMore(true)}
                            >
                                More Pictures
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </>
            </Container>
        </>
    );
};

export default GalleryPage;
