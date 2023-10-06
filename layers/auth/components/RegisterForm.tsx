"use client";

import React, { FC, useEffect, useState } from "react";

import { login } from "../store/authSlice";
import { useAppSelector, useAppDispath } from "@/layers/lib/hooks/redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import * as z from "zod";
import Input from "../ui/Input";

const RegisterForm: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispath();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const status = useAppSelector((state) => state.auth.status);
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (status === "succeeded" && typeof accessToken === "string") {
      localStorage.setItem("token", accessToken);
    }
  }, [status, accessToken]);

  const LoginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(3, { message: "Minimum 3 characters" }),
    username: z.string().min(3, { message: "Minimum 3 characters" }),
  });

  type Schema = z.infer<typeof LoginValidation>;

  const form = useForm<Schema>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });
  const errors = form.formState.errors;

  const handleLogin = async (values: Schema) => {
    await dispatch(login({ email: values.email, password: values.password }));

    if (status === "succeeded") {
      router.back();
    }

    console.log(status);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-sm w-full my-10 flex justify-center px-10 text-3xl font-bold">
        Create account
      </div>

      <div className="bg-blue-100 max-w-sm w-full rounded-xl px-4 py-6">
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <Input
            name="email"
            control={form.control}
            errors={errors.email?.message}
            controllerName="email"
          />

          <Input
            name="password"
            control={form.control}
            errors={errors.password?.message}
            controllerName="password"
          />

          <Input
            name="username"
            control={form.control}
            errors={errors.username?.message}
            controllerName="username"
          />

          <div className="px-4">
            <button
              className="bg-blue-500 mt-6 rounded-lg focus:scale-95 transition
             w-full text-center text-white py-2  font-bold hover:text-blue-500  hover:bg-white"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
