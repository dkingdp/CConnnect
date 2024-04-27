import React from "react";
import Img1 from "../icons/gallery1.png";
import Img2 from "../icons/gallery2.png";
import Img3 from "../icons/gallery3.png";
import Img4 from "../icons/gallery4.png";
import Img5 from "../icons/gallery5.png";
import Img6 from "../icons/gallery6.png";
import Image from "next/image";

const Gallery = () => {
    return (
        <div className="sm:mt-8 lg:mt-20 px-4">
            <p className="text-4xl text-primary-400 text-center mb-20">
                Gallery
            </p>
            <div className="sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content">
                <div className="col-span-1  flex justify-end">
                    <Image src={Img1} />
                </div>
                <div className="col-span-1  flex justify-start">
                    <Image src={Img2} />
                </div>
            </div>
            <div className="sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                <div className="col-span-1  flex justify-end">
                    <Image src={Img3} />
                </div>
                <div className="col-span-1  flex justify-start">
                    <Image src={Img4} />
                </div>
            </div>
            <div className="sm:flex flex-col sm:gap-y-4 lg:grid grid-cols-2 content sm:mt-4 lg:mt-32">
                <div className="col-span-1  flex justify-end">
                    <Image src={Img5} />
                </div>
                <div className="col-span-1  flex justify-start">
                    <Image src={Img6} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
