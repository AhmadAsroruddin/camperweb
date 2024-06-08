import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IconArrowLeft, IconTrash, IconPencil } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelDetailById } from "../slice/slice";
import Loading from "../../../shared/Animation/Loading";
import { useNavigate } from "react-router-dom";
import { deleteTravelAction } from "../slice/slice";

const TravelDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { travelId } = useParams();
  const travelDetail = useSelector((state) => state.travel.travelDetail);
  const isLoading = useSelector((state) => state.travel.loading);
  const error = useSelector((state) => state.travel.error);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (travelId) {
      dispatch(getTravelDetailById(travelId));
    }
  }, [dispatch, travelId]);

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Delete button clicked");
    dispatch(deleteTravelAction({travelId}))
    navigate("/travels")
    window.location.reload();

  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!travelDetail) {
    return <div>No Travel Detail found</div>;
  }

  const isOwner = travelDetail.ownerId === userId;

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
          src={
            "https://images.unsplash.com/photo-1576793048000-494aaa93d160?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={travelDetail.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{travelDetail.name}</h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Price:</span> {travelDetail.price}
            </p>
            {isOwner && (
              <div className="flex space-x-4">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={() => {
                    console.log("Edit button clicked");
                    navigate(`/campervan-edit/${travelId}`)
                  }}
                >
                  <IconPencil className="mr-2" />
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                  onClick={handleDelete}
                >
                  <IconTrash className="mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
          <p className="text-gray-600">
            <span className="font-semibold">Contact:</span>{" "}
            {travelDetail.contactInfo}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span>{" "}
            {travelDetail.address}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">City:</span> {travelDetail.city}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Province:</span>{" "}
            {travelDetail.province}
          </p>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold">Description:</span>{" "}
            {travelDetail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelDetail;
