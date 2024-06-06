import React, { useEffect, useState } from "react";
import bromo from "../../../assets/bromo-mount.jpg";
import balaikambang from "../../../assets/balaikambang-beach.jpg";
import paralayang from "../../../assets/background.jfif";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelByUserIdAction } from "../slice/slice";
import { getTripByTravelIdAction } from "../../OpenTrips/slice/tripSlice"
import Loading from "../../../shared/Animation/Loading";

const TravelData = [
  {
    id: 1,
    name_travel: "Heliacal Sun Travel",
    contact_info: "+628712345678",
    address_tarvel: "123 Travel St, Anytown, USA",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-02T00:00:00Z",
    is_active: true,
    images: [bromo, balaikambang],
    bank_accounts: [
      {
        name: "John Doe",
        alias_name: "John",
        bank_name: "Bank ABC",
        account_number: "1234567890",
        is_active: true,
      },
    ],
    trips: [
      {
        name: "Trip to Bali",
        destination: "Bali, Indonesia",
        derparture_date: "2023-06-01T00:00:00Z",
        return_date: "2023-06-10T00:00:00Z",
        is_active: true,
      },
    ],
  },
  // Tambahkan data travel lainnya di sini jika diperlukan
];

const TravelManagementPage = () => {
  const dispatch = useDispatch();
  const [travelId, setTravelId] = useState("");
  const [selectedTravel, setSelectedTravel] = useState(TravelData[0]);
  const travelDetailFromUser = useSelector((state) => state.travel.travelDetailFromUser);
  const tripsByTravelId = useSelector((state) => state.trip.tripsByTravelId)
  const loading = useSelector((state) => state.trip.loading);
  const isLoading = useSelector((state) => state.travel.loading);
  const error1 = useSelector((state) => state.travel.error);
  const error2 = useSelector((state) => state.trip.error);
  const userId = localStorage.getItem("userId");
  const handleToCreateNewTrip = () => {
    localStorage.setItem('travelId', travelDetailFromUser.id)
  }

  useEffect(() => {
    console.log(userId);
    dispatch(getTravelByUserIdAction(userId))
    .then((action) => {
      const travelDetailFromUser = action.payload;
      if (travelDetailFromUser) {
        console.log(travelDetailFromUser.id);
        dispatch(getTripByTravelIdAction(travelDetailFromUser.id));
        console.log(tripsByTravelId);
      } else {
        console.error('Travel detail not found or invalid.');
      }
    })
  }, [dispatch]);

  // useEffect(() => {
  //   if (travelId !== null) {
  //     console.log(travelId);
    
  //   }
  // }, []);

  if (isLoading || loading) {
    return <Loading/>;
}

if (error1 || error2) {
    return <div>Error: {error1 || error2}</div>;
}

if(!travelDetailFromUser || !tripsByTravelId){
    return (
        <div>
            <p>
                Travel detail & Trips from user not found.
            </p>
        </div>
    )
}


  return (
    <div className="py-10 font-urbanist">
      <div className="container mx-auto">
        <Link
          to="/user-profile"
          className="flex items-center text-primary hover:text-primary-dark transition duration-300 ease-out"
        >
          <IconArrowLeft className="mr-2" />
          Back to User Profile
        </Link>
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font">
          Travel Management
        </h1>
        <div className="max-w-3/4 mx-auto">
          <div className="flex gap-5">
            <div className="shadow-lg bg-white rounded-lg p-6 mb-6 flex justify-center w-[350px]">
              <div className="w-[250px] py-5">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  {travelDetailFromUser.name}
                </h2>
                <div className="space-y-2 p-5">
                  <p className="flex justify-between">Contact Info: <span>{travelDetailFromUser.contactInfo}</span></p>
                  <p className="flex justify-between">Address: <span>{travelDetailFromUser.address}</span></p>
                  <p className="flex justify-between">Active: <span>{travelDetailFromUser.isActive == true ? "Yes" : "No"}</span></p>
                </div>
                <div className="flex justify-center">
                  <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out">
                    Edit
                  </button>
                </div>
              </div>
            </div>
              <div className="shadow-lg bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {travelDetailFromUser.imageTravelResponseList.map((image, index) => (
                    <img
                      key={index}
                      src={image.imageUrl}
                      alt={`Travel Image ${index}`}
                      className="w-full h-auto rounded"
                    />
                  ))}
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out mt-4">
                  Edit
                </button>
              </div>
          </div>

          <div className="shadow-lg bg-white rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Bank Accounts</h3>
            <ul className="flex gap-10">
              {travelDetailFromUser.bankAccountResponseList.map((account, index) => (
                <div key={index}>
                  <li className="mb-2 border border-primary p-5 rounded-xl">
                    <div className="space-y-2">
                      <p>Name: {account.name}</p>
                      <p>Alias: {account.aliasName}</p>
                      <p>Bank: {account.bankName}</p>
                      <p>Account Number: {account.accountNumber}</p>
                    </div>
                  </li>
                      <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out mt-1">
                        Edit
                      </button>
                </div>
              ))}
            </ul>
          </div>

          <div className="shadow-lg bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Trips</h3>
            <ul className="grid grid-cols-3 gap-10">
              {tripsByTravelId.map((trip, index) => (
                <Link to={`/allParticipant/${trip.id}`}> 
                  <div key={index}>
                    <li className="mb-2 border-2 border-primary hover:shadow-lg hover:shadow-primary p-5 rounded-xl space-y-2">
                      <img src={trip.imageTripResponseList[0].imageUrl} alt="destination-page" className="h-[250px] w-full object-cover" sizes="200"/>
                      <p><span className="text-lg font-semibold mr-14">Destination :</span> {trip.destination}</p>
                      <p>
                      <span className="text-lg font-semibold mr-5">Departure Date :</span>{" "}
                        {trip.departureDate}
                      </p>
                      <p>
                      <span className="text-lg font-semibold mr-[50px]">Return Date :</span> {trip.returnDate}
                      </p>
                    </li>
                    <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out mt-2">
                      Edit
                    </button>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3/4 mx-auto mt-8 flex justify-between">
          {/* <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out">
            Create New Travel
          </button> */}
          <Link onClick={handleToCreateNewTrip} to="/create-trip">
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300 ease-out">
              Create New Trip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelManagementPage;
