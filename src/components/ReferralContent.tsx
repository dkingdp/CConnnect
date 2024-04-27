import Image from 'next/image';
import React from 'react'
import referalImage from "../icons/referrals.png"

const ReferralContent = () => {
  return (
      <div className="content sm:mt-8 lg:mt-20 px-4">
          <Image src={referalImage} />
          <h3 className="text-2xl font-bold text-black sm:mt-8 lg:mt-20">Employment referral</h3>
          <p className="leading-10 text-xl mt-5 ">
              Community Connect (C-connect), formerly known as CC Nanny
              Placement Agency, has been facilitating the pairing of
              high-quality nannies with families since 2012, offering
              unparalleled peace of mind within the comfort of your home. Our
              nannies are meticulously chosen candidates with either prior
              experience or formal training in child growth and development,
              hailing from diverse corners of the globe. Our clientele comprises
              professionals from various fields, ensuring a shared understanding
              of the importance of reliable childcare. Our services encompass a
              wide spectrum, ranging from live-in and live-out arrangements to
              short and long-term temporary placements, summer care, occasional
              evening assistance, and weekend support. We prioritize addressing
              your children's holistic needs – physical, emotional,
              intellectual, and recreational. Selecting the right childcare
              provider is a crucial decision, and C-connect Nanny Placement is
              licensed and bonded in Maryland, serving as your trusted resource
              for in-home childcare solutions. Whether you're in search of
              top-notch in-home childcare assistance or seeking assistance with
              household organization, we invite you to reach out to us at
              +443-763-1729 to discuss your requirements and schedule a
              complimentary consultation, either at our office or in the
              convenience of your home. For those seeking employment
              opportunities, please utilize our Online Jobs Link to arrange a
              free consultation. C-connect Nanny Placement Services is dedicated
              to delivering personalized assistance tailored to your specific
              needs. Our rigorous screening process ensures that we match
              families with nannies seamlessly, fostering exceptional support
              that enriches your quality of life. At C-connect Nanny Agency, we
              forge strong connections between our nannies and families,
              ensuring optimal compatibility and an enriching experience for all
              parties involved.
          </p>
          <div className="sm:flex flex-col lg:grid grid-cols-2 sm:mt-10 lg:mt-20 text-black">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                  <h3 className="text-2xl font-bold text-center">
                      Want to help immigrants shine?
                  </h3>
                  <p className="lg:m-10 text-xl leading-10">
                      Our volunteers are indispensable in guiding New Americans
                      forward, serving as trusted community members who, often
                      immigrants themselves, ensure that fellow newcomers
                      receive the essential support and services they need.
                  </p>
              </div>
          </div>
      </div>
  );
}

export default ReferralContent