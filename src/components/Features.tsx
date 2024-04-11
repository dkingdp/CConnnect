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
        <div>
            <p className="text-primary-400 text-center font-bold text-3xl">
                <span className="text-primary-100">Our </span>
                Features
            </p>
            <p className="text-primary-200 text-center text-2xl mt-4">
                This very extraordinary feature, can make learning activities
                more efficient
            </p>
            <div className="mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1 relative">
                    <div>
                        <div className="w-32 h-32 rounded-full bg-primary-200 absolute -top-0 transform -translate-y-1/2 left-20"></div>
                    </div>
                    <div className="relative z-10">
                        <Image src={Feature1} />
                    </div>
                    <div>
                        <div className="w-64 h-64 rounded-full bg-primary-100 absolute bottom-0 transform right-20 "></div>
                    </div>
                </div>
                <div className="col-span-1 text-primary-200">
                    <p className="text-5xl font-semibold text-primary-100">
                        {" "}
                        <span className="text-primary-400">Immigration</span>
                        Consulting <br /> (Non Attorney)
                    </p>
                    <div className="mt-20 flex flex-col gap-y-10">
                        <div className=" flex gap-x-10">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={boxes} />
                            </div>
                            <p className="text-2xl">
                                We work to provide advocacy and case management
                                services for immigrants.
                            </p>
                        </div>
                        <div className=" flex gap-x-10">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={boxs} />
                            </div>
                            <p className="text-2xl">
                                Case managers provide orientation within the
                                legal system to undocumented immigrants
                            </p>
                        </div>
                        <div className=" flex gap-x-10">
                            <div className="w-14 h-14 shadow-md flex justify-center items-center bg-white rounded-full flex-shrink-0">
                                <Image src={Users} />
                            </div>
                            <p className="text-2xl">
                                Others help documented immigrants by planning
                                work visas and citizenship tests.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold text-4xl">
                        Case <br />
                        <span className="text-primary-100">Management</span>
                    </p>
                    <p className="text-2xl">
                        Case management is an approach to helping <br /> people
                        accomplish daily work and automating <br />
                        work from end-to-end.
                    </p>
                </div>
                <div className="col-span-1">
                    <Image src={Feature2} />
                </div>
            </div>
            <div className="mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1  relative">
                    <div className="relative z-10">
                        <Image src={Feature3} />
                    </div>
                </div>

                <div className="col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold text-4xl">
                        Community Resettlement
                        <br />
                        <span className="text-primary-100">And Resources</span>
                    </p>
                    <p className="text-2xl">
                        Easily launch live assignments, quizzes, and tests.
                        Student results are automatically entered in the online
                        gradebook.
                    </p>
                </div>
            </div>
            <div className="mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-400 font-semibold text-4xl">
                        Career <br />
                        <span className="text-primary-100">Mentoring</span>
                    </p>
                    <p className="text-2xl">
                        Class provides tools to help run and manage the class
                        such as Class Roster, Attendance, and more. With the
                        Gradebook, teachers can review and grade tests and
                        quizzes in real-time.
                    </p>
                </div>
                <div className="col-span-1">
                    <Image src={Feature4} />
                </div>
            </div>
            <div className="mt-52 content grid grid-cols-2 gap-x-20">
                <div className="col-span-1">
                    <Image src={Feature5} />
                </div>
                <div className="col-span-1 flex justify-center gap-y-5 flex-col">
                    <p className="text-primary-500 font-semibold text-4xl">
                        One-on-One
                        <br />
                        <span className="text-primary-400">Discussions</span>
                    </p>
                    <p className="text-2xl">
                        Teachers and teacher assistants can talk with students
                        privately without leaving the Zoom environment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
