import React from "react";
import Feature1 from "../icons/features-image.png";
import Feature2 from "../icons/case-image.png";
import Feature3 from "../icons/feature-img-2.png";
import Feature4 from "../icons/feature-img-3.png";
import Feature5 from "../icons/feature-img-4.png";
import boxes from "../icons/boxes.png";
import boxs from "../icons/boxes2.png";
import Users from "../icons/users2.png";
import Image from "next/image";

const Features = () => {
    return (
        <div className="px-4">
            <p className="text-primary-400 text-center font-bold sm:text-xl lg:text-3xl">
                <span className="text-primary-100">Our </span>
                Features
            </p>
            <p className="text-primary-200 text-center sm:text-lg lg:text-2xl mt-4">
                This very extraordinary feature, can make learning activities
                more efficient
            </p>
            <div className="sm:mt-24 lg:mt-52 content sm:flex sm:flex-col lg:grid grid-cols-2 gap-x-20">
                <div className="col-span-1 relative sm:hidden lg:block">
                    <div>
                        <div className="w-32 h-32 rounded-full bg-primary-200 absolute -top-0 transform -translate-y-1/2 left-20"></div>
                    </div>
                    <div className="relative z-10 ">
                        <Image src={Feature1} />
                    </div>
                    {/* <div>
                        <div className="w-64 h-64 rounded-full bg-primary-100 absolute bottom-0 transform right-20 "></div>
                    </div> */}
                </div>
                <div className="col-span-1 text-primary-200">
                    <p className="sm:text-xl  lg:text-5xl font-semibold text-primary-100">
                        {" "}
                        <span className="text-primary-400">Immigration</span>
                        Consulting <br /> (Non-Attorney)
                    </p>
                    <div className="sm:mt-5 lg:mt-20 flex flex-col gap-y-10">
                        <div className=" flex sm:gap-x-2 items-center lg:gap-x-10">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={boxes} />
                            </div>
                            <p className="sm:text-base lg:text-2xl flex-wrap">
                                We work to provide advocacy and case management
                                services for immigrants.
                            </p>
                        </div>
                        <div className=" flex sm:gap-x-2 lg:gap-x-10 items-center">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={boxs} />
                            </div>
                            <p className="sm:text-base lg:text-2xl">
                                Case managers provide orientation within the
                                legal system to undocumented immigrants
                            </p>
                        </div>
                        <div className=" flex sm:gap-x-2 lg:gap-x-10 items-center">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={Users} />
                            </div>
                            <p className="sm:text-base lg:text-2xl">
                                Others help documented immigrants by planning
                                work visas and citizenship tests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:mt-8 lg:mt-52 content grid grid-cols-2 gap-x-20">
                <div className="sm:col-span-2 lg:col-span-1 flex justify-center sm:gap-y-2 lg:gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold sm:text-xl lg:text-4xl">
                        Case <br />
                        <span className="text-primary-100">Management</span>
                    </p>
                    <p className="sm:text-xl lg:text-2xl">
                        Case management is an approach to helping <br /> people
                        accomplish daily work and automating <br />
                        work from end-to-end.
                    </p>
                </div>
                <div className="col-span-1 sm:hidden lg:block">
                    <Image src={Feature2} />
                </div>
            </div>
            <div className="sm:mt-8 lg:mt-52 content grid grid-cols-2 gap-x-20">
                <div className="sm:hidden lg:block col-span-1  relative">
                    <div className="relative z-10">
                        <Image src={Feature3} />
                    </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold sm:text-xl lg:text-4xl">
                        Community Resettlement
                        <br />
                        <span className="text-primary-100">And Resources</span>
                    </p>
                    <p className="sm:text-xl lg:text-2xl">
                        We specialize in facilitating the resettlement of
                        individuals and groups to new areas. Our team works
                        closely with all stakeholders to ensure a smooth
                        transition and the establishment of vibrant, sustainable
                        communities.
                    </p>
                </div>
            </div>
            <div className="sm:mt-8 lg:mt-52 content grid grid-cols-2 gap-x-20">
                <div className="sm:col-span-2 lg:col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold sm:text-xl lg:text-4xl">
                        Career <br />
                        <span className="text-primary-100">Mentoring</span>
                    </p>
                    <p className="sm:text-xl lg:text-2xl">
                        We believe in the power of mentorship to guide
                        individuals towards fulfilling and successful careers.
                        Our career mentoring program is designed to provide
                        personalized support and guidance to help you navigate
                        your professional journey with confidence.
                    </p>
                </div>
                <div className="col-span-1 sm:hidden lg:block">
                    <Image src={Feature4} />
                </div>
            </div>
            <div className="sm:mt-8 lg:mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1 lg:block sm:hidden">
                    <Image src={Feature5} />
                </div>
                <div className="sm:col-span-2 lg:col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-500 font-semibold sm:text-xl lg:text-4xl">
                        One-on-One
                        <br />
                        <span className="text-primary-400">Discussions</span>
                    </p>
                    <p className="sm:text-xl lg:text-2xl">
                        Our one-on-one discussions offer personalized guidance
                        tailored to your specific needs, interests, and goals.
                        Whether you're seeking career advice, personal
                        development insights, or mentorship in a particular
                        field, our platform connects you with the right person
                        to help you navigate your challenges and achieve your
                        aspirations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
