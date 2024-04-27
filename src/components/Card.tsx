import React from "react";
import CaseIcon from "../icons/case-icon.png";
import PlaneIcon from "../icons/plane.png";
import UserIcon from "../icons/users.png";
import Image from "next/image";

const Card = ({
    title,
    text,
    variant,
}: {
    title: string;
    text: string;
    variant: number;
}) => {
    return (
        <div className="card shadow-2xl bg-white relative py-10 px-5">
            <div
                className={`lg:w-28 lg:h-28 sm:w-20 sm:h-20 rounded-full absolute ${
                    variant > 1 ? "bg-primary-100" : "bg-primary-400"
                } right-1/2 transform top-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
            >
                <Image
                    src={
                        variant == 1
                            ? CaseIcon
                            : variant == 2
                            ? PlaneIcon
                            : UserIcon
                    }
                />
            </div>
            <div className="flex items-end h-full">
                <div className="">
                    <p className="sm:text-xl lg:text-2xl font-semibold mb-2 text-primary-100">
                        {title}
                    </p>
                    <p className="sm:text-lg lg:text-xl font-normal text-primary-200">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
