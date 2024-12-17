import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import ThankYouPopup from "./pop-ups/ThankYouPopup";
import CalendlyModal from "./pop-ups/CalendlyModal";
import { usePathname } from "next/navigation";

export default function RegistrationForm() {
  const pathname = usePathname();
  // const pathnameArray = (pathname || " / ").split("/");
  // console.log("pathname => ", pathname)

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const { name, email, phoneNumber } = formData;

  const [loading, setLoading] = useState(false);
  const [isThankyouModalOpen, setIsThankyouModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const handleVerifyPayment = async (orderResponse, amount) => {
    // console.log("\norderResponse of razorpay => ", orderResponse);
    const toastId = toast.loading("Verifying Payment....");

    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        orderResponse;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/razorpay/verify-order`,
        {
          name,
          email,
          phoneNumber,
          frontEndClient: "flex_transformation",
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
          amount,
        }
      );

      //   console.log("response of verifying order api => ", response);
      if (response.status === 200) {
        toast.success("Payment Successful!");
        // setIsCalendlyOpen(true);
        setIsThankyouModalOpen(true)
      }
    } catch (err) {
      console.log("error in verifying payment api", err);
      toast.error(
        err?.message ||
        err?.response?.data?.message ||
        "Payment Failed! Try Again!"
      );
    }
    toast.dismiss(toastId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("process.env.APP_BASE_URL = ", process.env.NEXT_PUBLIC_APP_BASE_URL)
    if (!email && !phoneNumber) {
      toast.error("Please provide Email or Phone Number");
      return;
    }
    if (phoneNumber && phoneNumber.length != 10) {
      toast.error("Phone Number must be of 10 digits.");
      return;
    }
    if (email && !isValidEmail(email)) {
      toast.error("Invalid Email address");
      return;
    }

    setLoading(true);
    try {
      const registrationResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/user/register-user`,
        {
          ...formData,
          frontEndClient: "flex_transformation",
        }
      );

      if (registrationResponse.status === 200) {
        const pathnameArray = (pathname || " / ").split("/");
        if (pathname === "/" || (pathnameArray[1] || "") === "home") {
          toast.success("Registered Successfully!");
          setLoading(false);
          setIsThankyouModalOpen(true);
          return;
        }
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_APP_BASE_URL}/razorpay/create-order`,
            {
              amount: (pathnameArray[1] || '') === 'club' ? 499 : 99,
              note: {
                AppId: "FLex_Transformation",
                PlanName: (pathnameArray[1] || '') === 'club' ? 'Club_Membership_499' : "1To1-Meet-99-Rs",
              },
            }
          );

          //   console.log("response of ordering api => ", response);
          if (response.status === 200) {
            const res = await loadScript(
              "https://checkout.razorpay.com/v1/checkout.js"
            );

            setLoading(false);
            if (!res) {
              toast.error("RazorPay SDK failed to load");
              return;
            }

            const { amount, ...order } = response.data.data;

            // console.log("order => ", order);
            // console.log(
            //   "RAZORPAY_API_KEY => ",
            //   process.env.NEXT_PUBLIC_RAZORPAY_API_KEY
            // );
            const options = {
              image: "/logo.svg",
              key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY,
              amount: amount.toString(),
              note: order.notes,
              currency: order.currency,
              name: "Satva Nutrition",
              description: "Payment for Appointment at Satva Nutrition",
              order_id: order.id,
              handler: async function (orderResponse) {
                handleVerifyPayment(orderResponse, amount);
              },
              prefill: {
                name: name ?? "Flex_Transformation User",
                email: email ?? "flextransformation@gmail.com",
                contact: phoneNumber ?? "9988776655",
              },
              theme: {
                color: "#144EE3",
              },
              retry: false,
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
            paymentObject.on("payment.failed", function (paymentResponse) {
              toast.error("OOPS! Payment Failed!");
              console.log(paymentResponse.error);
            });
          }
        } catch (err) {
          console.log("error in ordering api", err);
          toast.error(
            err?.message ||
            err?.response?.data?.message ||
            "Payment Failed! Try Again!"
          );
        }
        setLoading(false);
      }
    } catch (err) {
      console.log("error in ordering api", err);
      toast.error(err?.response?.data?.message || "Registration Failed!");
    }
    setLoading(false);
  };

  return (
    <>
      <form className="w-1/2 pt-[4rem] md:shadow-xl -mt-[3rem] xl:mt-0 flex flex-col justify-center md:px-8 py-4 gap-6 rounded-2xl md:mt-14 w-[95%] md:w-[70%] ">
        <h1 className="text-[2rem] md:text-[3rem] leading-[4rem] font-semibold text-[#E97A4A]">
          Join Us
        </h1>

        <div className="mb-2 relative">
          <label
            htmlFor="name"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-[#E97A4A]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="text-left border border-[#E97A4A] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-2 relative">
          <label
            htmlFor="email"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-[#E97A4A]"
          >
            Email
          </label>
          <input
            type="email"
            className="border border-[#E97A4A] text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-2 relative">
          <label
            htmlFor="mobile"
            className="block text-sm mb-2 font-medium absolute -top-2 left-2 bg-white px-1 text-[#E97A4A]"
          >
            Mobile
          </label>
          <input
            type="number"
            className="border border-[#E97A4A] text-black placeholder-[#9CA2A9] text-sm rounded-lg block w-full pt-4 p-2 outline-none"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-gradient-to-br from-[#E97A4A] to-[#E97A4A99] text-black font-medium mb-6 py-2.5 px-5 rounded-lg w-full"
        >
          {loading ? <Loader /> : "Submit Details"}
        </button>
      </form>

      <CalendlyModal
        isCalendlyOpen={isCalendlyOpen}
        setIsCalendlyOpen={setIsCalendlyOpen}
      />

      <ThankYouPopup
        open={isThankyouModalOpen}
        setIsThankyouModalOpen={setIsThankyouModalOpen}
      />
    </>
  );
}
