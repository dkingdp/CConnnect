import Image from "next/image";
import React from "react";
import Arc from "../icons/arc.png";
import Img from "../icons/main-image.png";
import path from "../icons/path.png"

const Main = () => {
    return (
        <div className="main-height bg-primary-200 relative overflow-x-hidden">
            <div className="absolute bottom-0 -left-1">
                <Image src={Arc} />
            </div>
            <div className="content h-full relative">
                <div className="flex flex-col h-full justify-center gap-y-8 relative z-50">
                    <p className="capitalize font-bold text-5xl text-white">
                        {" "}
                        CConnent focused on processes,
                    </p>
                    <p className="capitalize font-bold text-5xl text-white">
                        <span className="text-primary-300">
                            tailors solutions{" "}
                        </span>
                        to meet
                    </p>
                    <p className="capitalize font-bold text-5xl text-white">
                        your specific needs!
                    </p>

                    <p className="text-white font-medium text-2xl">
                        What are your Challenges ?
                    </p>
                    <button className="w-32 h-12 rounded bg-primary-100 font-medium text-white cursor-pointer transition-all ease-out">
                        Let's Talk{" "}
                    </button>
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

export default Main;
