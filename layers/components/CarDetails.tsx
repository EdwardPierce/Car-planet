import React, { useRef, useState, useEffect } from "react";
import { ModalProps } from "../types";
import Image from "next/image";

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
      className="max-w-lg max-h-[90vh] w-full flex flex-col p-6 rounded-2xl"
    >
      <div className="w-full h-40 relative bg-pattern bg-cover bg-center rounded-lg">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          priority
          className="object-contain"
        />
      </div>

      <button
        onClick={() => {
          modelRef.current?.close();
          onClose();
        }}
      >
        Close
      </button>
    </dialog>
  );
};

export default CarDetails;
