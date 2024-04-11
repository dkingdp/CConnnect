import Image from "next/image";
import React, { Fragment } from "react";
import Logo from "../icons/logo.png";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const Header = () => {
    const links = [
        { name: "Immigration Consulting ", href: "immigration" },
        { name: "Case Management", href: "case" },
        // { name: "Community Resettlement and Resources", href: "resources" },
        // { name: "Career Mentoring", href: "career" },
        { name: "Employment Referral Services", href: "referral" },
    ];

    const router = useRouter();

    const isActive = (href: string) => router.pathname === href;

    return (
        <div className="w-full bg-white h-32 flex justify-between items-center fixed z-top shadow-lg">
            <div className="content mx-auto flex justify-between items-center h-full">
                <Image src={Logo} height={80} />
                <ul className="flex gap-x-8 items-center h-full">
                    <Link href={"/"}>
                        <li
                            className={`cursor-pointer ${
                                isActive("/") ? "font-bold" : "font-normal"
                            }`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href={"/about"}>
                        <li
                            className={`cursor-pointer ${
                                isActive("/about") ? "font-bold" : "font-normal"
                            }`}
                        >
                            About
                        </li>
                    </Link>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 focus:outline-none">
                            <span
                                className={`cursor-pointer ${
                                    isActive("/immigration")
                                        ? "font-bold"
                                        : isActive("/case")
                                        ? "font-bold"
                                        : isActive("/referral")
                                        ? "font-bold"
                                        : "font-normal"
                                }`}
                            >
                                Services
                            </span>
                            {/* <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            /> */}
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute top-full z-top mt-3 w-96 rounded bg-white p-2 shadow-lg flex flex-col">
                                {links.map((item) => (
                                    <span className="rounded px-3 py-2 text-sm  leading-6 hover:bg-gray-50 cursor-pointer h-12 ">
                                        <Link key={item.name} href={item.href}>
                                            {item.name}
                                        </Link>
                                    </span>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link href={"/gallery"}>
                        <li
                            className={`cursor-pointer ${
                                isActive("/gallery")
                                    ? "font-bold"
                                    : "font-normal"
                            }`}
                        >
                            Gallery
                        </li>
                    </Link>
                    <Link href={"/contact"}>
                        <button className="w-32 h-12 rounded bg-primary-100 font-medium text-white cursor-pointer transition-all ease-out">
                            Contact Us
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
