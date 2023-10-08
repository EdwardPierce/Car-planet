"use client";

import React from "react";
import { manufacturers } from "../constants/filterData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SearchCars = () => {
  const searchParams = useSearchParams();
  const selectedManufacturer = searchParams.get("manufacturer");

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {manufacturers.map((manufacturer) => (
          <div
            className={`${
              manufacturer === selectedManufacturer
                ? "border-blue-500 ring"
                : "border-gray-300"
            } border-2 bg-gray-100 px-4 py-2 rounded-lg`}
            key={manufacturer}
          >
            <Link
              scroll={false}
              replace
              href={`?${new URLSearchParams({ manufacturer })}`}
            >
              {manufacturer}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCars;
