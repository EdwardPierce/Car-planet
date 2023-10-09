"use client";

import React from "react";
import { manufacturers } from "../constants/filterData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const SearchCars = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedManufacturer = searchParams.get("manufacturer");

  // const setSearchParams = (link: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   searchParams.set("manufacturer", link);

  //   return `?${new URLSearchParams(searchParams)}`;
  // };

  const handleSearch = (manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("manufacturer", manufacturer);
    const updatedSearchParams = `?${new URLSearchParams(searchParams)}`;
    router.replace(updatedSearchParams, {
      scroll: false,
    });
  };

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
            {/* <Link scroll={false} href={setSearchParams(manufacturer)}>
              {manufacturer}
            </Link> */}
            <button onClick={() => handleSearch(manufacturer)}>
              {manufacturer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCars;
