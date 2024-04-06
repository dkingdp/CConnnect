import React from "react";
import Image from "next/image";
import Logo from "../icons/logoth 1.png";
import Brand1 from "../icons/3.png";
import Brand2 from "../icons/1.png";
import Brand3 from "../icons/2.png";
import Brand4 from "../icons/4.png";

const Footer = () => {
    return (
        <>
            <div className="my-32 content flex justify-between">
                <Image src={Brand1} />
                <Image src={Brand2} />
                <Image src={Brand3} />
                <Image src={Brand4} />
            </div>
            <div className="bg-primary-700">
                <div className="py-20 flex content justify-between border-b text-white border-primary-800">
                    <Image src={Logo} />
                    <div className="">
                        <p className="mb-5 font-bold text-lg">Quick Link</p>
                        <p className="mb-2 text-lg text-primary-800">Home</p>
                        <p className="mb-2 text-lg text-primary-800">
                            About us
                        </p>
                        <p className="mb-2 text-lg text-primary-800">
                            Features
                        </p>
                        <p className="mb-2 text-lg text-primary-800">
                            Photo gallery
                        </p>
                        <p className="mb-2 text-lg text-primary-800">Team</p>
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold text-lg">Get In Touch</p>
                        <p className="mb-2 text-lg text-primary-800">
                            Contact Us
                        </p>
                        <p className="mb-2 text-lg text-primary-800">
                            About us
                        </p>
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold text-lg">Address</p>
                        <p className="mb-2 text-lg text-primary-800">
                            2464 Royal Ln. Mesa,
                            <br /> New Jersey 45463
                        </p>
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold text-lg">Newsletter</p>
                        <div className="flex">
                            <input
                                type="text"
                                className="h-12 pl-4 w-80 text-primary-800"
                                placeholder="Enter Your Email"
                            />
                            <button className="h-12 bg-primary-100 px-6">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-primary-800">
                            Your email is safe with us,we don’t spam.
                        </p>
                        <p className="mt-8 font-bold text-lg">Follow Me</p>
                    </div>
                </div>
                <div className="w-full flex justify-center py-10">
                    <p className="text-primary-800">Designed By Dkingdp </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
