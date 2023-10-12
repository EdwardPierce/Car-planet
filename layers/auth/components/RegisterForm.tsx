"use client";

import React, { FC } from "react";

import { useAppDispath } from "@/layers/lib/hooks/redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import * as z from "zod";
import Input from "../ui/Input";

import { useMutation } from "react-query";
import AuthService from "../service/AuthService";
import { setAuth } from "../store/authSlice";
import LoadingSpinner from "../../lib/LoadingSpinner";
import { UserData, Username } from "../types";

const RegisterForm: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispath();

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

  const mutation = useMutation(
    ({ email, password, username }: UserData & Username) =>
      AuthService.register(email, password, username)
  );

  const handleRegister = async ({ email, password, username }: Schema) => {
    mutation.mutate(
      { email, password, username },
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
    <div className="flex flex-col items-center">
      {!!mutation.isLoading && <LoadingSpinner />}
      <div className="max-w-sm w-full my-10 flex justify-center px-10 text-3xl font-bold">
        Create account
      </div>

      <div className="bg-blue-100 max-w-sm w-full rounded-xl px-4 py-6">
        <form onSubmit={form.handleSubmit(handleRegister)}>
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
