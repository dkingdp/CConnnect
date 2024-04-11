import React from "react";
import Img1 from "../icons/image-2.png";
import Img2 from "../icons/image-3.png";
import Img3 from "../icons/image-5.png";
import Img4 from "../icons/image-6.png";
import Img5 from "../icons/Mask Group.png";
import Brand1 from "../icons/3.png";
import Brand2 from "../icons/1.png";
import Brand3 from "../icons/2.png";
import Brand4 from "../icons/4.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Info = () => {
    return (
        <div className="my-20 text-primary-500">
            <div className="grid grid-cols-2 content gap-32">
                <div className="col-span-1 flex flex-col items-center">
                    <div className="flex justify-around w-full">
                        <Image src={Img1} />
                        <Image src={Img2} />
                    </div>
                    <div>
                        <Image src={Img3} />
                    </div>
                    <div className="flex justify-end w-full">
                        <Image src={Img4} />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-y-8 justify-center">
                    <p className="text-2xl">PLANNING TO STUDY ABOARD</p>
                    <p className="text-3xl font-bold">
                        Discover various Universities Access your application
                        form on our website!
                    </p>
                    <p className="text-2xl text-primary-200">
                        If you are going to study in{" "}
                        <span className="text-primary-100 leading-10">USA</span>{" "}
                        you will need to apply for a student visa. Students who
                        come to the United States on a student visa must have a
                        primary purpose of studying and study full-time.
                    </p>
                    <div className="h-20 w-64 border border-primary-400 rounded-r-full rounded-l-full flex justify-center items-center text-2xl text-primary-400">
                        See All Integrations
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 content gap-32 mt-20">
                <div className="col-span-1 flex flex-col gap-y-8 justify-center">
                    <p className="text-2xl">TESTIMONIAL</p>
                    <p className="text-6xl font-bold">What They Say?</p>
                    <p className="text-2xl text-primary-200">
                        Ccommunity has got more than 100k positive ratings from
                        our users around the world.
                        <br />
                        Some of the students and teachers were greatly helped by
                        the Ccommunity.
                    </p>
                    <p className="text-2xl text-primary-200">
                        Are you too? Please give your assessment
                    </p>
                    <div className="flex justify-center">
                        <div className="h-20 w-64 relative border border-primary-400 border-r-0 rounded-r-full rounded-l-full flex pl-12  items-center text-2xl text-primary-400">
                            See More
                            <span className="h-20 w-20 rounded-full absolute right-0 top-0 border border-primary-400 flex justify-center items-center">
                                <FaArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-center relative">
                    <Image src={Img5} />
                    <div className="testimonial shadow-lg absolute -bottom-32 left-20 bg-white p-10 text-primary-600 flex flex-col justify-between">
                        <div className="border-l pl-10 text-2xl leading-10">
                            "Thank you so much for your help. It's exactly what
                            I've been looking for. You won't regret it. It
                            really saves me time and effort. Ccommunity is
                            exactly what our business has been lacking."
                        </div>
                        <div className="flex justify-between w-full pl-10 items-center">
                            <p className="text-2xl font-semibold">
                                Gloria Rose
                            </p>
                            <div>
                                <div className="flex gap-x-1">
                                    <FaStar color="#FBA333" />
                                    <FaStar color="#FBA333" />
                                    <FaStar color="#FBA333" />
                                    <FaStar color="#FBA333" />
                                    <FaStar color="#FBA333" />
                                </div>
                                <div className="">12 Reviews at Yelp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-52 content flex justify-between">
                <Image src={Brand1} />
                <Image src={Brand2} />
                <Image src={Brand3} />
                <Image src={Brand4} />
            </div> */}
        </div>
    );
};

export default Info;
