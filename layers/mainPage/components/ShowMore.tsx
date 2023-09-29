"use client";

import React from "react";
import { ShowMoreProps } from "../types";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("limit", `${newLimit}`);
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {!isNext && (
        <button
          type="button"
          className="bg-blue-500 w-40 text-white py-2 px-6 rounded-full"
          onClick={handleNavigation}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
