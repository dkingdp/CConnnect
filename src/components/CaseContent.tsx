import React from "react";
import caseImage from "../icons/Rectangle 2974.png";
import Image from "next/image";
const CaseContent = () => {
    return (
        <div className="content px-4">
            <div className="lg:grid sm:flex flex-col  grid-cols-2 gap-x-10 mt-20 text-black">
                <div className="col-span-1">
                    <Image src={caseImage} />
                </div>
                <div className="col-span-1 sm:mt-4 lg:mt-0">
                    <h3 className="text-2xl font-bold">Case management</h3>
                    <p className="lg:m-10 text-xl leading-10">
                        - Changing of address with the post office <br />
                        - Changing of address with the USCIS online <br />
                        - Help with immigration applications <br /> - Apply for
                        Social Security Number <br /> - Pickup Driving
                        Information from MVA <br /> - Open a bank account <br />{" "}
                        - Cross Cultural orientation Community organization’s
                        referral and integration <br /> - Employment and Career
                        Coaching: education or skills training <br /> - Assist
                        in developing Resume <br /> - Job search and job
                        Readiness
                    </p>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 lg:mt-20 sm:mt-10 text-black">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                    <h3 className="text-2xl font-bold text-center">
                        Want to help immigrants shine?
                    </h3>
                    <p className="lg:m-10 text-xl leading-10">
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

export default CaseContent;
