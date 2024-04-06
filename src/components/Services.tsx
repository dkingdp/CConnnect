import React from "react";
import Card from "./Card";

const Services = () => {
    return (
        <div className="w-full text-center my-52">
            <p className="text-2xl font-medium mb-20">
                Trusted by 5,000+ Users Worldwide
            </p>
            <p className="text-4xl font-medium text-primary-400">
                <span className="text-primary-100">Our </span>
                Services
            </p>
            <p className="text-4xl font-medium text-primary-100 my-10">
                Carrer Mentoring
            </p>
            <p className="text-2xl">
                CCommunity is one powerful online Community suite that combines
            </p>
            <p className="text-2xl">
                all the tools needed to run a successful school or office.
            </p>
            <div className="mt-40 content flex justify-between">
                <Card
                    title={"Immigration Consulting (Non Attorney)"}
                    text={
                        "We offer our services utilizing case management methodology. It's important to note that we are not a law firm, and while our consultations are valuable..."
                    }
                    variant={2}
                />
                <Card
                    title={"Case Management"}
                    text={
                        "community based referral service that promotes inclusion, education, independence, community integration, career coaching and resources to new immigrants and their families in need."
                    }
                    variant={1}
                />
                <Card
                    title={"Community Resettlement and Resources"}
                    text={
                        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization"
                    }
                    variant={3}
                />
            </div>
        </div>
    );
};

export default Services;
