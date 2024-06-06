import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createTravelAction } from "../slice/slice";
import Loading from '../../../shared/Animation/Loading';

const schema = z.object({
  ownerId: z.string(),
  category: z.string().min(1, { message: "Category cannot be empty" }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  address: z.string().min(1, { message: "Address cannot be empty" }),
  email: z.string().email({ message: "Invalid email address" }),
  city: z.string().min(1, { message: "City cannot be empty" }),
  name: z.string().min(1, { message: "Name cannot be empty" }),
  province: z.string().min(1, { message: "Province cannot be empty" }),
  contactInfo: z.string().min(1, { message: "Contact info cannot be empty" }),
  price: z.string().min(1, { message: "Price cannot be empty" }),
  imageUrl: z.string().url({ message: "Invalid image URL" }),
});

const TravelForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.travel.loading);

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ownerId: localStorage.getItem('token'),
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form Submitted", data);
    try {
      dispatch(createTravelAction(data));
      localStorage.setItem("roles", "TRAVEL_OWNER");
      navigate("/travels");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(errors); // Tambahkan log ini untuk melihat error validasi
  }, [errors]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-10 font-urbanist container mx-auto">
      <Link
        to="/travels"
        className="flex items-center text-primary hover:text-primary-dark transition duration-300 ease-out mb-4"
      >
        <IconArrowLeft className="mr-2" />
        Back
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Travel Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="relative">
            <label className="block text-gray-700">Category</label>
            <input
              id="category"
              {...register("category")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.category ? "border-red-500" : ""}`}
            />
            {errors.category && (
              <div className="text-red-500 text-xs mt-1">
                {errors.category.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Description</label>
            <textarea
              id="description"
              {...register("description")}
              className={`w-full p-2 border border-gray-300 rounded ${errors.description ? "border-red-500" : ""}`}
            />
            {errors.description && (
              <div className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Address</label>
            <input
              id="address"
              {...register("address")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.address ? "border-red-500" : ""}`}
            />
            {errors.address && (
              <div className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Email</label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className={`w-full p-2 border border-gray-300 rounded ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <div className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">City</label>
            <input
              id="city"
              {...register("city")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.city ? "border-red-500" : ""}`}
            />
            {errors.city && (
              <div className="text-red-500 text-xs mt-1">
                {errors.city.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Name</label>
            <input
              id="name"
              {...register("name")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <div className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Province</label>
            <input
              id="province"
              {...register("province")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.province ? "border-red-500" : ""}`}
            />
            {errors.province && (
              <div className="text-red-500 text-xs mt-1">
                {errors.province.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Contact Info</label>
            <input
              id="contactInfo"
              {...register("contactInfo")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.contactInfo ? "border-red-500" : ""}`}
            />
            {errors.contactInfo && (
              <div className="text-red-500 text-xs mt-1">
                {errors.contactInfo.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Price</label>
            <input
              id="price"
              {...register("price")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.price ? "border-red-500" : ""}`}
            />
            {errors.price && (
              <div className="text-red-500 text-xs mt-1">
                {errors.price.message}
              </div>
            )}
          </div>

          <div className="relative">
            <label className="block text-gray-700">Image URL</label>
            <input
              id="imageUrl"
              {...register("imageUrl")}
              type="text"
              className={`w-full p-2 border border-gray-300 rounded ${errors.imageUrl ? "border-red-500" : ""}`}
            />
            {errors.imageUrl && (
              <div className="text-red-500 text-xs mt-1">
                {errors.imageUrl.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelForm;
