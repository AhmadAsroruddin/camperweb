import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch, useSelector } from "react-redux";
import { updateTravelByIdAction, getTravelDetailById } from "../slice/slice";
import Loading from "../../../shared/Animation/Loading";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  category: z.string().min(1, { message: "Category cannot be empty" }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  address: z.string().min(1, { message: "Address cannot be empty" }),
  email: z.string().email({ message: "Invalid email address" }),
  city: z.string().min(1, { message: "City cannot be empty" }),
  name: z.string().min(1, { message: "Name cannot be empty" }),
  province: z.string().min(1, { message: "Province cannot be empty" }),
});

const TravelEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const history = useHistory();
  const { travelId } = useParams();
  const TravelDetail = useSelector((state) => state.travel.travelDetail);
  const isLoading = useSelector((state) => state.travel.loading);
  const error = useSelector((state) => state.travel.error);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      category: TravelDetail?.category || "",
      description: TravelDetail?.description || "",
      address: TravelDetail?.address || "",
      email: TravelDetail?.email || "",
      city: TravelDetail?.city || "",
      name: TravelDetail?.name || "",
      province: TravelDetail?.province || "",
    },
  });

  useEffect(() => {
    if (travelId) {
      dispatch(getTravelDetailById(travelId));

    }
  }, [dispatch, travelId]);

  const onSubmit =  (data) => {
    try {
       dispatch(updateTravelByIdAction({ travelId, payload: data }));
       navigate('/travels')
       window.location.reload();

    } catch (error) {
      console.error("Error updating travel:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!TravelDetail) {
    return <div>No Travel Detail found</div>;
  }

  return (
    <div className="py-10 font-urbanist container mx-auto">
      <Link
        to={`/travels/${travelId}`}
        className="flex items-center text-primary hover:text-primary-dark transition duration-300 ease-out mb-4"
      >
        <IconArrowLeft className="mr-2" />
        Back to Travel Detail
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-6 relative">
        <h1 className="text-3xl font-bold mb-4">Edit Travel</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="relative">
            <label htmlFor="category" className="block text-gray-700">Category</label>
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
            <label htmlFor="description" className="block text-gray-700">Description</label>
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
            <label htmlFor="address" className="block text-gray-700">Address</label>
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
            <label htmlFor="email" className="block text-gray-700">Email</label>
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
            <label htmlFor="city" className="block text-gray-700">City</label>
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
            <label htmlFor="name" className="block text-gray-700">Name</label>
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
            <label htmlFor="province" className="block text-gray-700">Province</label>
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

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded flex items-center"
          >
            {/* <IconSave className="mr-2" /> */}
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelEdit;
