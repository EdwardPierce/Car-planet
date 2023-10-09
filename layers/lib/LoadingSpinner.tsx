"use client";

import OrderModalDialog from "@/layers/mainPage/components/dialog/OrderModalDialog";
import { useState } from "react";

export default function LoadingSpinner() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <OrderModalDialog closeModal={closeModal} isOpen={isOpen}>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </OrderModalDialog>
  );
}
