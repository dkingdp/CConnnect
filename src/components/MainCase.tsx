import Image from "next/image";
import React from "react";
import Arc from "../icons/arc.png";
import Img from "../icons/main-image.png";
import Link from "next/link";

const MainCase = () => {
    return (
        <div className="main-height bg-primary-200 relative overflow-x-hidden">
            <div className="absolute bottom-0 -left-1">
                <Image src={Arc} />
            </div>
            <div className="content h-full relative">
                <div className="flex flex-col h-full justify-center gap-y-8 relative z-50">
                    <p className="capitalize font-bold text-6xl text-white">
                        {" "}
                        Case management
                    </p>
                    <Link href={"/contact"}>
                        <button className="w-32 h-12 rounded bg-primary-100 font-medium text-white cursor-pointer transition-all ease-out">
                            Let's Talk{" "}
                        </button>
                    </Link>
                </div>
                <div className="absolute right-0 bottom-0 z-30">
                    <Image src={Img} />
                </div>
            </div>
            <div className="h-full triangle transform ">
                {/* <div className="absolute left-40 z-30">
                    <Image src={path} />
                </div> */}
            </div>
        </div>
    );
};

export default MainCase;
