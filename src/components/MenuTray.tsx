import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { links } from "./Header";

const MenuTray = ({ isOpen, isActive }: { isOpen: boolean; isActive: any }) => {
    return (
        <div
            className={`transform transition-all ease-in-out duration-500 py-28  px-8 flex flex-col gap-y-8  ${
                isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            } bg-white w-3/4 h-screen top-0 absolute right-0 z-40`}
        >
            <Link href={"/"}>
                <span
                    className={`cursor-pointer ${
                        isActive("/") ? "font-bold" : "font-normal"
                    }`}
                >
                    Home
                </span>
            </Link>
            <Link href={"/about"}>
                <span
                    className={`cursor-pointer ${
                        isActive("/about") ? "font-bold" : "font-normal"
                    }`}
                >
                    About
                </span>
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
                <span
                    className={`cursor-pointer ${
                        isActive("/gallery") ? "font-bold" : "font-normal"
                    }`}
                >
                    Gallery
                </span>
            </Link>
            <Link href={"/contact"}>
                <button className="w-32 h-12 rounded bg-primary-100 font-medium text-white cursor-pointer transition-all ease-out">
                    Contact Us
                </button>
            </Link>
        </div>
    );
};

export default MenuTray;
