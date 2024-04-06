import Image from "next/image";
import React from "react";
import Logo from "../icons/logo.png";

const Header = () => {
    return (
        <div className="w-full bg-white h-32 flex justify-between items-center ">
            <div className="content mx-auto flex justify-between items-center h-full">
                <Image src={Logo} height={80} />
                <ul className="flex gap-x-8 items-center h-full">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Service</li>
                    <li className="cursor-pointer">Gallery</li>
                    <button className="w-32 h-12 rounded bg-primary-100 font-medium text-white cursor-pointer transition-all ease-out">
                        Contact Us
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
