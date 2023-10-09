"use client";

import React, { FC } from "react";

import { useAppDispath } from "@/layers/lib/hooks/redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import * as z from "zod";
import Input from "../ui/Input";
import Link from "next/link";

import { useMutation } from "react-query";
import AuthService from "../service/AuthService";
import { setAuth } from "../store/authSlice";
import LoadingSpinner from "../../lib/LoadingSpinner";
import { UserData } from "../types/AuthResponse";

const LoginForm: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispath();

  const LoginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(3, { message: "Minimum 3 characters" }),
  });

  type Schema = z.infer<typeof LoginValidation>;

  const form = useForm<Schema>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const errors = form.formState.errors;

  //React Query
  const mutation = useMutation(({ email, password }: UserData) =>
    AuthService.login(email, password)
  );

  const handleLogin = async (values: Schema) => {
    mutation.mutate(
      { email: values.email, password: values.password },
      {
        onSuccess: (response) => {
          dispatch(setAuth(response.data.user));
          localStorage.setItem("token", response.data.accessToken);
          router.push("/");
        },
      }
    );
  };

  return (
    <>
      {!!mutation.isLoading && <LoadingSpinner />}
      <div className="max-w-sm w-full my-10 flex justify-center px-10 text-3xl font-bold">
        Log in
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

          <div className="px-4">
            <button
              className="bg-blue-500 mt-6 rounded-lg focus:scale-95 transition
             w-full text-center text-white py-2  font-bold hover:text-blue-500  hover:bg-white"
              type="submit"
            >
              Login
            </button>
          </div>

          <p className="mt-4 text-sm">
            Don&apos;t have an account,{" "}
            <Link className="hover:underline text-gray-500" href="/register">
              create an account
            </Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
