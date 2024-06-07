import React, { useRef, useState } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs  from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_gx9pjou", "template_jvgnvgm", formRef.current, {
        publicKey: "Ttu7BNsxPBJ-Tc8AJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true)
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact h-[70vh]  relative">
      <div className="c w-[20px] h-[100%] bg-[var(--main-color)] absolute "></div>
      <div className="c-wrapper p-[50px] flex">
        <div className="left flex-1">
          <h2 className="font-bold text-[42px] w-[70%]">
            Lorem ipsum dolor sit amet ipsum
          </h2>
          <div className=" mt-20 flex items-center ">
            <img src={Phone} alt="" className="h-[30px] w-[30px]" />
            <h2 className="text ml-10">+213 123 1223 45</h2>
          </div>
          <div className="link mt-16 flex items-center">
            <img src={Email} alt="" className="h-[30px] w-[30px]" />
            <h2 className="text text ml-10">JounDoa@gmail.com</h2>
          </div>
          <div className="link mt-16 flex items-center">
            <img src={Address} alt="" className="h-[30px] w-[30px]" />
            <h2 className="text text ml-10">
              245 KingStreet, Touterie victoria 8520
            </h2>
          </div>
        </div>
        <div className="right flex-1 flex  flex-col items-center justify-center">
          <p className="text-gray-600 mb-8">
            <span className="font-bold ">What's your story?</span> Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet consectetur. consectetur
            adipisicing elit.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-[60%] h-[50px] border-b-2 border-gray-700 mb-2 text-[14px] pl-2"
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              className=" w-[60%] h-[50px] border-b-2 border-gray-700 mb-2 text-[14px] pl-2"
            />
            <input
              type="text"
              name="user_email"
              placeholder="Email"
              className="w-[60%] h-[50px] border-b-2 border-gray-700 mb-2 text-[14px] pl-2"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              className="w-[100%] border-2 border-gray-700 mb-2 text-[14px] pl-2 pt-2 mt-2"
            ></textarea>
            <button className="p-[15px] bg-[var(--main-color)] text-white cursor-pointer border-none">
              Submit
            </button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
