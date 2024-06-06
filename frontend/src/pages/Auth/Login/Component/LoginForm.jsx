import React, { useState, useEffect } from "react";
import {
  IconMail,
  IconLock,
  IconInfoCircle,
  IconEyeOff,
  IconEye,
} from "@tabler/icons-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthServices";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .min(5, { message: "Email is too short" })
    .max(100, { message: "Email is too long" })
    .regex(emailRegex, {
      message: "Email must be valid and contain the @ symbol",
    }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Handler to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const authService = AuthService();

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data);
      if (response) {
        const token = response.data.token;
        console.log('Token:', token);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', response.data.userId)
        // navigate("/home");
      }
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && authService.validateToken(token)) {
      navigate("/home");
    }
  }, [authService, navigate]);

  return (
    <div className="mt-8 font-urbanist">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className="border-b-2 flex items-center border-[#B4B4B4] pb-2">
          <i className="mr-1">
            <IconMail size={18} />
          </i>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="outline-none font-medium placeholder:text-[#5B5B5B] placeholder:font-medium placeholder:text-xs text-sm w-full px-2"
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
            className="outline-none font-medium placeholder:text-[#5B5B5B] placeholder:font-medium placeholder:text-xs text-sm w-full px-2"
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
        <div className="w-full flex item-center justify-between">
          <div className="w-full flex items-center ">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-xs text-[#5B5B5B]">Remember me</p>
          </div>
          <p className="font-medium text-[#07C9F0] cursor-pointer underline underline-offset-1 whitespace-nowrap text-xs">
            Forgot Password
          </p>
        </div>
        <button className="bg-[#07C9F0] py-2 rounded-3xl mt-3 active:scale-95">
          <span className="font-semibold text-white text-sm">Log In</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
