import React from "react";
import Image from "next/image";
import Logo from "../icons/logoth 1.png";
import Brand1 from "../icons/3.png";
import Brand2 from "../icons/1.png";
import Brand3 from "../icons/2.png";
import Brand4 from "../icons/4.png";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="my-32 content flex justify-between">
                {/* <Image src={Brand1} />
                <Image src={Brand2} />
                <Image src={Brand3} />
                <Image src={Brand4} /> */}
            </div>
            <div className="bg-primary-700">
                <div className="py-20 flex content justify-between border-b text-white border-primary-800 sm:flex-col lg:flex-row sm:px-4">
                    <div className="sm:mb-10">
                        <Image src={Logo} />
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold text-lg">Quick Link</p>
                        <Link href={"/"}>
                            <p className="mb-2 text-primary-800 cursor-pointer">
                                Home
                            </p>
                        </Link>
                        <Link href={"/about"}>
                            <p className="mb-2 text-primary-800 cursor-pointer">
                                About us
                            </p>
                        </Link>

                        {/* <p className="mb-2 text-lg text-primary-800">
                            Features
                        </p> */}
                        <Link href={"/gallery"}>
                            <p className="mb-2 text-primary-800 cursor-pointer">
                                Photo gallery
                            </p>
                        </Link>
                        {/* <p className="mb-2 text-lg text-primary-800">Team</p> */}
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold">Get In Touch</p>
                        <p className="mb-2 text-primary-800">Contact Us</p>
                        <p className="mb-2 text-primary-800">About us</p>
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold">Address</p>
                        <p className="mb-2 text-primary-800">
                            2464 Royal Ln. Mesa,
                            <br /> New Jersey 45463
                        </p>
                    </div>
                    <div className="">
                        <p className="mb-5 font-bold ">Newsletter</p>
                        <div className="flex">
                            <input
                                type="text"
                                className="h-12 pl-4 sm:w-52 lg:w-60 text-primary-800"
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
                        <div className="flex gap-x-4 mt-2">
                            {/* <a href="" target="">
                                <span className="h-8 w-8 bg-primary-50 border flex justify-center items-center rounded-full cursor-pointer">
                                    <BsTwitterX color="gray" />
                                </span>
                            </a> */}
                            <a href="https://www.instagram.com/cconnect_md/">
                                <span className="h-8 w-8 bg-primary-50 border flex justify-center items-center rounded-full cursor-pointer">
                                    <FaInstagramSquare color="gray" />
                                </span>
                            </a>
                            <a href="https://www.facebook.com/people/Community-Connect-MD">
                                <span className="h-8 w-8 bg-primary-50 border flex justify-center items-center rounded-full cursor-pointer">
                                    <FaFacebook color="gray" />
                                </span>
                            </a>
                        </div>
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
