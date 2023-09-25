import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className="mt-4">
      <div className="px-20 h-10">
        <div className="flex flex-row justify-between items-center">
          <div className="relative w-[150px] h-10">
            <Image src="/logo.svg" alt="logo" fill className="object-contain" />
          </div>

          <div>
            <div
              className="px-4 py-2 text-blue-500 border
             border-blue-500 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
