"use client";

import AuthService from "@/layers/auth/service/AuthService";
import { logout } from "@/layers/auth/store/authSlice";
import { useAppDispath, useAppSelector } from "@/layers/lib/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex gap-4">
      <div
        className="px-4 py-2 text-blue-500 border
             border-blue-500 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <Link href="/register"> Sign up</Link>
      </div>

      <div
        className="px-4 py-2 text-blue-500 border
             border-blue-500 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <Link href="/login"> Sign in</Link>
      </div>
    </div>
  );
};

const UserInfo = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispath();

  return (
    <div className="flex gap-4">
      <p className="bg-gray-100 rounded-lg p-2">{user?.email} </p>
      <p className="bg-gray-100 rounded-lg p-2">User: {user?.username} </p>
      <button
        onClick={async () => {
          await AuthService.logout();
          localStorage.removeItem("token");
          dispatch(logout());
        }}
        className="px-4 py-2 text-blue-500 border
             border-blue-500 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

const Topbar = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <div className="mt-4 pb-4 border-b">
      <div className="lg:px-20 sm:px-10 px-2  h-10">
        <div className="flex  flex-row justify-between items-center">
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

          {isAuth ? <UserInfo /> : <SignIn />}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
