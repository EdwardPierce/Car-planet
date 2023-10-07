"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import OrderModalDialog from "../dialog/OrderModalDialog";

const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-20">
      <div className="px-20">
        <OrderModalDialog
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
        />

        <div>
          <h2 className=" text-7xl font-bold">
            Find, book, rent a car—quick and super easy!
          </h2>
          <p className="text-2xl font-light mt-4">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
        </div>

        <div className="flex gap-4 mt-10">
          <button
            onClick={handleScroll}
            className="bg-blue-500 px-6 py-2 text-white rounded-full "
          >
            Explore Cars
          </button>

          <button
            onClick={openModal}
            className="px-4 py-2  text-blue-500 border
             border-blue-500 rounded-full hover:bg-blue-500
              hover:text-white cursor-pointer"
          >
            Send a request
          </button>
        </div>

        <div className="relative mt-6">
          <div className="relative w-full h-screen">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />

            <div className="-z-10 absolute -top-[6%] left-[10%] w-full h-screen">
              <Image
                src="/hero-bg.png"
                alt="hero-bg"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
