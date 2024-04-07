import React from "react";

const ContactForm = () => {
    return (
        <div className="content py-20">
            <p className="text-center text-primary-100 font-bold text-5xl">
                Contact Us
            </p>
            <div className="mt-10 grid grid-cols-5 gap-x-10">
                <div className="col-span-3">
                    <div className="flex gap-x-5 mb-10">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="" className="text-black">
                                First name
                            </label>
                            <input
                                type="text"
                                className="h-16 mt-4 bg-primary-900 border px-4"
                                placeholder="First name"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="" className="text-black">
                                Last name
                            </label>
                            <input
                                type="text"
                                className="h-16 mt-4 bg-primary-900 border px-4"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="" className="text-black">
                                Mail
                            </label>
                            <input
                                type="text"
                                className="h-16 mt-4 bg-primary-900 border px-4"
                                placeholder="First name"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="" className="text-black">
                                Phone
                            </label>
                            <input
                                type="text"
                                className="h-16 mt-4 bg-primary-900 border px-4"
                                placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="w-full mt-10 flex flex-col">
                        <label htmlFor="" className="text-black">
                            Message
                        </label>
                        <textarea
                            name=""
                            className="mt-4 bg-primary-900 h-72 border p-4"
                            placeholder="Type Your Message Here..."
                        ></textarea>
                    </div>
                    <div className="mt-10 bg-primary-100 text-white rounded-md h-10 cursor-pointer w-40 flex justify-center items-center">
                        Send Message
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="h-full border relative items-center">
                        <div className="flex flex-col bg-primary-900 h-72 p-6 text-black">
                            <p className="font-bold text-6xl">Address</p>
                            <p>
                                <span className="font-semibold">Location : </span>
                                9520 Berger Rd STE 212, Columbia, MD 21046, USA
                            </p>
                            <p>
                                <span>Phone :</span>
                                +4437631729
                            </p>
                            <p>
                                <span>Phone :</span>
                                Email : info@cconnectmd.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
