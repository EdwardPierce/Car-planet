"use client";

import React, { useState } from "react";
import { CustomFilterProps } from "../types";
import { useRouter } from "next/navigation";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();

  const handleUpdateParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div>
      <select
        onChange={(e) => handleUpdateParams(title, e.currentTarget.value)}
      >
        {options.map((option) => (
          <option key={option.title}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
