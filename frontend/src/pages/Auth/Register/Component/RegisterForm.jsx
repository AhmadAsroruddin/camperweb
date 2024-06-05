/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  IconMail,
  IconLock,
  IconPhone,
  IconUser,
  IconInfoCircle,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthService from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = z.object({
  username: z.string().min(1, { message: "Username cannot be empty" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number cannot be empty" })
    .max(13, { message: "Maximum phone number is 13" })
    .transform((val) => parseInt(val)),
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .min(5, { message: "Email is too short" })
    .max(100, { message: "Email is too long" })
    .regex(emailRegex, {
      message: "Email must be valid and contain the @ symbol",
    }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: zodResolver(schema) });
  const authService = AuthService();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
        const payload = {
            username: data.username,
            phoneNumber: data.phoneNumber,
            email: data.email,
            password: data.password
        };
        const response = await authService.registerUser(payload);
        console.log(response);
        navigate("/confirmation")
    } catch (error) {
        console.error("Error while registering:", error);
    }
};

  return (
    <div className="mt-8 font-urbanist">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="border-b-2 flex items-center border-[#B4B4B4] pb-2">
          <i className="mr-1">
            <IconUser size={18} />
          </i>
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className={`outline-none font-medium placeholder:text-[#5B5B5B] placeholder:font-medium placeholder:text-xs text-sm w-full px-2`}
          />
        </div>
        {errors.username && (
          <div className="text-red-500 flex items-center text-xs gap-2 -mt-4">
            <i>
              <IconInfoCircle size={16} />
            </i>
            {errors.username.message}
          </div>
        )}

        <div className="border-b-2 flex items-center border-black/30 pb-2">
          <i className="mr-1">
            <IconPhone size={18} />
          </i>
          <input
            {...register("phoneNumber")}
            type="number"
            placeholder="Phone number"
            className="outline-none font-medium placeholder:text-black/60 placeholder:font-medium placeholder:text-xs text-sm w-full px-2"
          />
        </div>
        {errors.phoneNumber && (
          <div className="text-red-500 flex items-center text-xs gap-2 -mt-4">
            <i>
              <IconInfoCircle size={16} />
            </i>
            {errors.phoneNumber.message}
          </div>
        )}

        <div className="border-b-2 flex items-center border-black/30 pb-2">
          <i className="mr-1">
            <IconMail size={18} />
          </i>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="outline-none font-medium placeholder:text-black/60 placeholder:font-medium placeholder:text-xs text-sm w-full px-2"
          />
        </div>
        {errors.email && (
          <div className="text-red-500 flex items-center text-xs gap-2 -mt-4">
            <i>
              <IconInfoCircle size={16} />
            </i>
            {errors.email.message}
          </div>
        )}

        <div className="border-b-2 flex items-center border-black/30 pb-2">
          <i className="mr-1">
            <IconLock size={18} />
          </i>
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="outline-none font-medium placeholder:text-black/60 placeholder:font-medium placeholder:text-xs text-sm w-full px-2"
            autoComplete="current-password"
          />
          <span
            className="flex justify-around items-center cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <IconEye size={18} /> : <IconEyeOff size={18} />}
          </span>
        </div>
        {errors.password && (
          <div className="text-red-500 flex items-center text-xs gap-2 -mt-4">
            <i>
              <IconInfoCircle size={16} />
            </i>
            {errors.password.message}
          </div>
        )}

        <button className="bg-[#07C9F0] py-2 rounded-3xl mt-3 active:scale-95">
          <span className="font-semibold text-white text-sm">Sign Up</span>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
