import Container from "@components/Container";
import MainReferral from "@components/MainReferal";
import ReferralContent from "@components/ReferralContent";
import React from "react";

const Referral = () => {
    return (
        <>
            <Container>
                <>
                    <MainReferral />
                    <ReferralContent />
                </>
            </Container>
        </>
    );
};

export default Referral;
