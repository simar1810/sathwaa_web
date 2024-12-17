import Home from "./home/page";
import Provide from "./provide/page";
import Goals from "./goals/page";
import Trainer from "./trainer/page";
import Why from "./why/page";
import Join from "./join/page";
import Footer2 from "./footer2/page";
import Image from "next/image";
import Posters from "@/components/Posters";

export default function HomePage() {
  return (
    <>
      <Home />
      <Posters />
      <Provide />
      <Goals />
      <Trainer />
      <Why />
      <Nutritionist />
      <Join />
      <Footer2 />
    </>
  );
}

function Nutritionist() {
  return <div className="max-w-[1400px] mt-[80px] mx-auto px-4 md:flex items-center gap-4">
    <Image
      src="/nutritionist.png"
      height={740}
      width={740}
      alt="Nutritionist image"
      className="max-w-[500px] mx-auto aspect-square object-contain"
    />
    <div className="md:max-w-[50%] leading-[1] text-center md:text-left mt-10 md:mt-0">
      <h2 className="font-bold text-[28px] md:text-[40px] mb-[20px] md:mb-[40px]">Meet Your Nutritionist</h2>
      <p className="text-[40px] md:text-[60px] text-[#006231] font-bold mb-[28px] md:mb-[48px]">Chetna Nagesh</p>
      <p className="text-[16px] md:text-[20px] text-[#0000008D] leading-[1.6]">Are you ready to transform your fitness journey?
        Setting clear, achievable goals is the first step towards
        success. Whether you're aiming to lose weight, build
        muscle, or improve endurance, a diverse workout
        routine incorporating cardio, strength, and flexibility
        exercises will help you reach your targets.</p>
    </div>
  </div>
}