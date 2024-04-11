import ContactForm from "@components/ContactForm";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainContact from "@components/MainContact";
import FormfacadeEmbed from "@formfacade/embed-react";

const Contact: React.FC = () => {
    return (
        <>
            <Container>
                <>
                    <MainContact />
                    <ContactForm />
         
                </>
            </Container>
        </>
    );
};

export default Contact;
