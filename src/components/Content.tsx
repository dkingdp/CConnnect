import Image from "next/image";
import React from "react";
import immigration from "../icons/immigration.png";

const Content = () => {
    return (
        <div className="content sm:mt-8 lg:mt-20 px-4">
            <div className="sm:flex flex-col lg:grid grid-cols-2 gap-x-10">
                <div className="col-span-1">
                    <Image src={immigration} />
                </div>
                <div className="col-span-1">
                    <p className="text-xl leading-10">
                        At C-connect, we offer our services through a case
                        management approach. It's important to note that we are
                        not a law firm, and while our consultations are
                        valuable, they should not be considered a replacement
                        for legal advice from a qualified attorney.
                        Additionally, our organization is independent and not
                        associated with any government entity. Our primary focus
                        is on providing advocacy and case management support for
                        immigrants. Our dedicated case managers assist
                        undocumented immigrants by providing orientation within
                        the legal system and aiding in the completion of
                        residency applications. For documented immigrants, our
                        services include planning for work visas and citizenship
                        tests, conducting thorough assessments of both home and
                        work environments, and facilitating access to various
                        social services.
                    </p>
                </div>
            </div>
            <div className="sm:flex flex-col lg:grid grid-cols-2 mt-10 text-black">
                <div className="col-span-1">
                    <h3 className="sm:text-xl lg:text-2xl font-bold ">
                        Immigration Form Packages and Services
                    </h3>
                    <p className="mt-5 text-xl leading-10">
                        I-90 Green Card Renewal N-400 U.S Citizenship
                        (Naturalization) <br />
                        I-130 Sponsor your Relative for a Green Card
                        <br /> N-565 Replace Naturalization / Citizenship
                        Document
                        <br />
                        I-765 Employment Authorization
                        <br /> I-824 Action on Approved Application Petition
                        <br /> I-751 Petition to Remove the Conditions for
                        Residence
                        <br /> I-131 Travel Document Application
                        <br /> I-485 Register Permanent Residence or Adjust
                        Status
                        <br />
                        I-129F Petition for Alien Fiancé(e)
                        <br />
                        N-600 Certificate of Citizenship Application
                    </p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <div className="sm:mt-8 lg:mt-20 text-center text-black">
                <h3 className="sm:text-xl lg:text-2xl font-bold text-center">
                    Immigration Form Packages and Services
                </h3>
                <p className="sm:mt-8 lg:mt-10 leading-10 text-xl">
                    Irrespective of your immigration needs, Immigration Services
                    offers expert consultation and comprehensive assistance in
                    completing immigration forms. Our services provide a
                    cost-effective alternative to traditional attorney fees.
                    With our proficient team, we ensure you receive optimal
                    support throughout the immigration process. Rely on our
                    qualified and reliable Immigration Consultants to guide you
                    towards a favorable outcome in your case.
                </p>
            </div>
            <div className="sm:flex flex-col lg:grid grid-cols-2 sm:mt-10 lg:mt-20 text-black">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                    <h3 className="text-2xl font-bold text-center">
                        Want to help immigrants shine?
                    </h3>
                    <p className="sm:mt-4 lg:m-10 text-xl leading-10">
                        Our volunteers are indispensable in guiding New
                        Americans forward, serving as trusted community members
                        who, often immigrants themselves, ensure that fellow
                        newcomers receive the essential support and services
                        they need.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Content;
