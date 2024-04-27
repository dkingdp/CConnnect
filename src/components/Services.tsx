import React from "react";
import Card from "./Card";

const Services = () => {
    return (
        <div className="w-full text-center sm:my-10 lg:my-52">
            <p className="sm:text-xl lg:text-2xl font-medium sm:mb-10 lg:mb-20">
                Trusted by 5,000+ Users Worldwide
            </p>
            <p className="sm:text-xl lg:text-4xl font-medium text-primary-400">
                <span className="text-primary-100">Our </span>
                Services
            </p>
            <p className="sm:text-xl lg:text-4xl font-medium text-primary-100 sm:my-5 lg:my-10">
                Carrer Mentoring
            </p>
            <p className=" sm:text-lg lg:text-2xl">
                CCommunity is one powerful online Community suite that combines
            </p>
            <p className=" sm:text-lg lg:text-2xl">
                all the tools needed to run a successful school or office.
            </p>
            <div className="mt-40 content flex items-center lg:justify-between sm:flex-col lg:flex-row sm:gap-y-24 lg:gap-y-0">
                <Card
                    title={"Immigration Consulting (Non-Attorney)"}
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
