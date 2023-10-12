"use client";

import React, { useState } from "react";
import { CustomFilterProps } from "../types";
import { useRouter } from "next/navigation";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();

  const handleUpdateParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(`${searchParams}`);

    searchParams.set(type, value);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, {
      scroll: false,
    });
  };

  return (
    <div>
      <select
        className="select-filter "
        onChange={(e) => handleUpdateParams(title, e.currentTarget.value)}
      >
        {options.map((option) => (
          <option key={option.title}>{option.title}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
