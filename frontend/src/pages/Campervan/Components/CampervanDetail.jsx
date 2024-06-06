import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelDetailById } from "../slice/slice";
import Loading from "../../../shared/Animation/Loading";

const TravelDetail = () => {
  const dispatch = useDispatch();
  const { travelId } = useParams();
  const TravelDetail = useSelector((state) => state.travel.travelDetail);
  const isLoading = useSelector((state) => state.travel.loading);
  const error = useSelector((state) => state.travel.error);

  useEffect(() => {
    if (travelId) {
      dispatch(getTravelDetailById(travelId));
    }
  }, [dispatch, travelId]);

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
        to="/travels"
        className="flex items-center text-primary hover:text-primary-dark transition duration-300 ease-out mb-4"
      >
        <IconArrowLeft className="mr-2" />
        Back to Travel
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-6 relative">
        <img
          src={"https://images.unsplash.com/photo-1576793048000-494aaa93d160?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          // alt={TravelDetail.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{TravelDetail.name}</h1>
          <p className="mt-4">Contact: {TravelDetail.contactInfo}</p>
          <p className="mt-4">Location: {TravelDetail.address}</p>
          <p className="mt-4">City: {TravelDetail.city}</p>
          <p className="mt-4">Province: {TravelDetail.province}</p>
          <p className="mt-4">Price: {TravelDetail.price}</p>
        </div>

       

      </div>
    </div>
  );
};

export default TravelDetail;
