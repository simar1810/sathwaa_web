import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="w-[100%] flex flex-col bg-[#EFF0F6] px-8 xl:px-20 py-6 md:text-[0.8rem] ">
      <div className="flex flex-col md:flex-row gap-20 md:gap-6 lg:gap-0 justify-evenly md:justify-between py-12 ">
        <div className="flex flex-col gap-3 md:w-[25%]">
          <div className="md:mb-4 opacity-100 font-bold">
            <Image
              src="/logo.svg"
              alt="image"
              width={50}
              height={50}
              className="self-start md:-ml-2 w-[60px] md:w-[125px] aspect-square mix-blend-multiply"
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="opacity-60 text-[1.1rem]">Powered by</p>
            
            <Link href={"https://wellnessz.in"} target="_blank" className="flex items-center">
              {/* WellnessZ */}
              <Image
                src="/WZ-logo2.png"
                alt="image"
                width={40}
                height={80}
              />
              <Image
                src="/WZ-logo.jpg"
                alt="image"
                width={155}
                height={50}
                className="h-[30px] sm:h-[30px] mix-blend-multiply -translate-y-[2px]"
              />
            </Link>
          </div>
          <div className="flex gap-4 cursor-pointer text-[#E97A4A] ">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* <div className="flex flex-col gap-2">
          <h1 className="md:mb-4 opacity-100 font-bold">Product</h1>
          <h3 className="opacity-60">Features</h3>
          <h3 className="opacity-60">Pricing</h3>
          <h3 className="opacity-60">Reviews</h3>
          <h3 className="opacity-60">Updates</h3>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="md:mb-4 opacity-100 font-bold">Company</h1>
          <h3 className="opacity-60">About</h3>
          <h3 className="opacity-60">Contact Us</h3>
          <h3 className="opacity-60">Careers</h3>
          <h3 className="opacity-60">Culture</h3>
          <h3 className="opacity-60">Blog</h3>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="md:mb-4 opacity-100 font-bold">Support</h1>
          <h3 className="opacity-60">Getting started</h3>
          <h3 className="opacity-60">Help center</h3>
          <h3 className="opacity-60">Server status</h3>
          <h3 className="opacity-60">Report a bug</h3>
          <h3 className="opacity-60">Chat support</h3>
        </div> */}

        <div className="flex flex-col gap-3">
          <h1 className="md:mb-4 opacity-100 font-bold">Contact us</h1>
          <div className="opacity-60 flex items-center gap-3">
            <FaRegEnvelope /> contact@company.com
          </div>
          <div className="opacity-60 flex items-center gap-3">
            <FaPhoneAlt /> (414) 687 - 5892
          </div>
          <div className="opacity-60 flex items-center gap-3">
            <FaLocationDot /> 794 Mcallister St San Francisco, 94102
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-t-2 pt-4 border-gray-500">
        <p className="opacity-60">
          Copyright © 2022 Mohi Lifestile Solutions Private Limited
        </p>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <span className="px-2 opacity-70">All Rights Reserved</span>
          <div className="text-[0.7rem] md:text-[0.8rem]">
            <Link href={"/terms"}>
              <u className="text-[#E97A4A] px-2 border-x-2 cursor-pointer border-gray-500">
                Terms and Conditions
              </u>
            </Link>
            <Link href={"/privacy-policy"}>
              <u className="text-[#E97A4A] px-2 cursor-pointer ">
                Privacy Policy
              </u>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
