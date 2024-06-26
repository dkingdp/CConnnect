import AboutInfo from "@components/AboutInfo";
import Carousel from "@components/Carousel";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainAbout from "@components/MainAbout";
import Head from "next/head";

const About: React.FC = () => {
    return (
        <>
            <Container>
                <>
                    <MainAbout />
                    <AboutInfo />
                    <div className="sm:hidden lg:block">
                        <Carousel />
                    </div>
                </>
            </Container>
        </>
    );
};

export default About;
