import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = async () => {
  return (
    <div className="mt-4">
      <div className="px-20 h-10">
        <div className="flex flex-row justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10  h-10">
              <Image
                src="/model-icon.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-blue-950">CarPlanet</h2>
          </Link>

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
