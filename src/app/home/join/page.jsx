"use client";
import RegistrationForm from "@/components/RegistrationForm";
import Image from "next/image";

export default function Join() {
  return (
    <section
      className="w-100 flex flex-col md:flex-row bg-white px-4 xl:px-20 md:gap-8 lg:gap-[10rem] justify-between py-24 items-center"
      id="register"
    >
      <div className="w-[50%] ml-4 hidden md:block">
        <Image
          // src="/join.svg"
          src="/together-4.png"
          alt="image"
          width={553}
          height={455}
          className="w-full"
        />
      </div>
      <div className="mt-[-9rem] sm:mt-0 w-full">
        <RegistrationForm />
      </div>
      
    </section>
  );
}
