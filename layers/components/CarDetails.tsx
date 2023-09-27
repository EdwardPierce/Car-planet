import React, { useRef, useState, useEffect } from "react";
import { ModalProps } from "../types";
import Image from "next/image";
import { generateCarImageUrl } from "../utils";

const CarDetails = ({ isOpen, onClose, car }: ModalProps) => {
  const modelRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modelRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  const handleEscapeButton = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <dialog
      ref={modelRef}
      onKeyDown={handleEscapeButton}
      className=" max-w-lg max-h-[90vh] w-full flex flex-col p-6 rounded-2xl"
    >
      <div className="relative flex flex-col flex-1">
        <button
          onClick={() => {
            modelRef.current?.close();
            onClose();
          }}
          className="absolute -top-2 -right-2 z-10 bg-blue-100 rounded-full p-2"
        >
          <Image
            src="/close.svg"
            alt="close"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>

        <div className="w-full h-40 relative bg-pattern bg-cover bg-center rounded-lg">
          <Image
            src={generateCarImageUrl(car)}
            alt="hero"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="relative flex-1 h-24 bg-blue-100/50 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "29")}
              alt="hero"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative flex-1 h-24 bg-blue-100/50 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "33")}
              alt="hero"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="relative flex-1 h-24 bg-blue-100/50 rounded-lg">
            <Image
              src={generateCarImageUrl(car, "13")}
              alt="hero"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col mt-2">
        <h2 className="text-2xl font-semibold capitalize">
          {car.make} {car.model}
        </h2>

        <div className="mt-2 flex flex-wrap gap-0.5">
          {Object.entries(car).map(([key, value]) => (
            <div key={key} className="flex justify-between w-full capitalize">
              <h4 className="text-gray-700">{key.split("_").join(" ")} </h4>
              <p className="font-semibold">{value} </p>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default CarDetails;
