import Link from "next/link";

export default function Footer2() {
  return (
    <section className="sticky bottom-0 w-[100%] flex justify-between bg-[#E97A4A] text-white items-center p-2 max-h-[160px] px-4 lg:px-16">
      <div className="flex flex-col gap-0">
        {/* <div className="flex gap-2 lg:gap-4 items-center">
          <span className="text-[1.5rem] lg:text-[3rem] text-white font-bold">
            ₹ 99/-
          </span>
          <strike className="opacity-[70%] mt-5 text-[0.7rem] lg:text-[1rem]">
            ₹199
          </strike>
        </div> */}
        <p className="lg:font-semibold text-[0.7rem] lg:text-[1.2rem] lg:-mt-2">
          For 1:1 Consultation
        </p>
      </div>
      <Link href={"#register"}>
        <div className="bg-white p-3 lg:px-24 rounded-xl cursor-pointer font-semibold text-[0.7rem] lg:text-[1.2rem] text-[#E97A4A]">
          {/* Register Now at ₹99/- Only */}
          Sign Up Now 
        </div>
      </Link>
    </section>
  );
}
