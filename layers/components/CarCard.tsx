"use client";

import React, { useState } from "react";
import { CarCardProps, CarProps } from "../types";
import Image from "next/image";
import { calculateCarRent } from "../utils";
import CarDetails from "./CarDetails";

interface AdapterCarProps {
  car: CarProps;
}

const CarCard = ({ car }: AdapterCarProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  console.count("year");

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col bg-blue-100 p-6 rounded-2xl max-w-md">
      <div className="text-xl font-semibold capitalize">
        {make} {model}
      </div>

      <div className="flex mt-6">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        <span className="text-3xl font-bold">{carRent}</span>
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </div>

      <div className="w-1/2 h-40 relative mx-auto">
        <Image
          src="/hero.png"
          alt="carcard"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/steering-wheel.svg"
            width={20}
            height={20}
            alt="steering-wheel"
          />
          <p>{transmission === "a" ? "Automatic" : "Manual"} </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/tire.svg" width={20} height={20} alt="tire" />
          <p>{drive.toUpperCase()}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/gas.svg" width={20} height={20} alt="gas" />
          <p>{city_mpg} MPG</p>
        </div>
      </div>

      <button onClick={() => setModalOpen(true)}>View more</button>
      {isModalOpen && (
        <CarDetails
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          car={car}
        />
      )}
    </div>
  );
};

export default CarCard;
