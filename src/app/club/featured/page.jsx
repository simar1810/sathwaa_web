import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Featured() {
  const data = [
    {
      img1: "/clubTrainer1.svg",
      name: "Pawan",
      post: "Wellness Coach & Gym Trainer",
      desc: "I have over 5 years of experience in gym training and cardio training i have over 100+ results and transform many lifes",
      twitter: "/",
      linkedIn: "/",
    },
    {
      img1: "/clubTrainer2.svg",
      name: "Jaspinder",
      post: "Wellness Coach",
      desc: "Diet and Nutrition is my expertise, home workout is my strength, and house wifes and working proffesionals are my favourite. I have tranform over 200+ such lifes",
      twitter: "/",
      linkedIn: "/",
    },
  ];

  return (
    <section className="w-100 flex flex-col items-center bg-white p-3 md:px-10 lg:px-20 lg:py-6 relative mb-10">
      <h2 className="mb-2 md:text-[1.5rem] font-semibold text-[#E97A4A] ">
        Our Featured Trainers
      </h2>
      <p className="opacity-50 md:text-[0.9rem] mb-10 text-center p-2 md:font-semibold">
       <br />{" "}
    
      </p>

      <div className="flex flex-wrap md:justify-center justify-between md:gap-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 justify-between w-[45%] hover:scale-105 duration-200"
          >
            <Image
              src={item.img1}
              alt="image"
              width={410}
              height={284}
              className=" w-full"
            ></Image>
            <h1 className="text-[1.2rem] font-semibold mt-2">{item.name}</h1>
            <h2 className="text-[#E97A4A] mb-2">{item.post}</h2>
            <p className="text-[0.8rem] md:text-[1rem] md:max-w-[70%] opacity-70">
              {item.desc}
            </p>
            <div className="flex gap-2 md:gap-4 opacity-50 mt-2">
              <Link href={item.twitter}>
                <FaTwitter className="w-[20px] h-[20px]" />
              </Link>
              <Link href={item.linkedIn}>
                <FaLinkedin className="w-[20px] h-[20px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
