import CaseContent from "@components/CaseContent";
import Container from "@components/Container";
import MainCase from "@components/MainCase";
import React from "react";

const Case = () => {
    return (
        <Container>
            <>
                <MainCase />
                <CaseContent />
            </>
        </Container>
    );
};

export default Case;
