import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

type InputType<T extends FieldValues> = {
  errors: string | undefined;
  name: string;
  controllerName: "email" | "password" | "username";
  control: Control<T, any>;
};

const Input = <T extends FieldValues>({
  errors,
  control,
  name,
  controllerName,
}: InputType<T>) => {
  return (
    <div className={`${errors ? " border-l-2 border-red-500" : ""} px-4`}>
      <label className="block mt-4 capitalize" htmlFor={name}>
        {name}
      </label>
      <Controller
        name={controllerName}
        control={control}
        render={({ field }) => (
          <input
            className={`px-2 py-3 mt-2 w-full border border-black rounded-lg font-medium
           focus:outline-none focus:ring-1 focus:ring-black
            placeholder:text-sm placeholder:text-gray-500 `}
            placeholder={`Please enter your ${name}`}
            {...field}
          />
        )}
      />
      <p className="mt-2 text-red-500">{errors}</p>
    </div>
  );
};

export default Input;
