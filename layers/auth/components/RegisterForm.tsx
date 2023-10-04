"use client";

import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";
import { useAppDispath, useAppSelector } from "@/layers/lib/hooks/redux";

const RegisterForm: FC = () => {
  const dispatch = useAppDispath();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const status = useAppSelector((state) => state.auth.status);
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (status === "succeeded" && typeof accessToken === "string") {
      localStorage.setItem("token", accessToken);
    }
  }, [status, accessToken]);

  const handleRegister = () => {
    dispatch(register({ email, password, username }));
  };

  console.log("isAuth: ", isAuth);
  console.log("status: ", status);
  console.log("token: ", localStorage.getItem("token"));

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        placeholder="email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
        value={password}
        placeholder="password"
      />
      <input
        type="text"
        onChange={(e) => setUsername(e.currentTarget.value)}
        value={username}
        placeholder="username"
      />

      <button onClick={handleRegister}>Register </button>
    </div>
  );
};

export default RegisterForm;
