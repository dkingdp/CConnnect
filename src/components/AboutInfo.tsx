import Image from "next/image";
import MainImg from "../icons/about-img.png";
import ElipseImg from "../icons/Ellipse-img.png";
import React from "react";

const AboutInfo = () => {
    return (
        <div className="content my-20">
            <div className="grid grid-cols-2 my-20 gap-x-8">
                <div className="col-span-1 flex items-center">
                    {/*<Image src={MainImg} />*/}
                </div>
                <div className="col-span-1 flex flex-col items-center">
                    <p className="mb-10 text-4xl text-primary-100 font-semibold">
                        We’re here because of you.
                    </p>
                    <p className="text-2xl">
                        Community Connect, established over a decade ago, has
                        successfully assisted numerous individuals seeking
                        connection by facilitating their seamless integration
                        into the community. At C-connect, our focus is on
                        delivering person-centred, trauma-informed immigration
                        and case management services. These services aim to aid
                        participants in fulfilling their basic needs, accessing
                        community resources, and progressing towards their
                        self-identified goals. We acknowledge the resilience and
                        strength of our clients, aiming to leverage their
                        individual strengths and community ties for sustained
                        stability and success. Our programs are meticulously
                        designed to address the intricate needs of immigrant
                        families. Our primary goal is to offer services to newly
                        arrived immigrant families that aren't provided by other
                        agencies, taking into account cultural sensitivities,
                        and making a positive, enduring impact on their lives.
                        To accomplish this mission, we guide our clients by
                        referring them to specialized organizations in family
                        and child welfare, Workforce Development, WIC programs,
                        and affordable childcare centers.
                    </p>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center">
                <p className="text-4xl font-semibold text-primary-100 mb-10">
                    Let’s do this together.
                </p>
                <div className="relative h-auto">
                    <div className="h-full bg-primary-100 rounded-full absolute "></div>
                    {/*<Image src={ElipseImg} height={500} width={500} />*/}
                </div>
                {/* <p className="mt-10 font-semibold text-primary-100 text-5xl">
                    Bola Badmus
                </p>
                <p className="mt-10 font-semibold text-primary-400 text-5xl mb-20">
                    Co-Founder & CEO
                </p>*/}
                <p className="mt-10 font-semibold text-primary-100 text-5xl">
                    "Experience it for yourself."
                </p>
            </div>
        </div>
    );
};

export default AboutInfo;
