import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataTravels } from '../slice/slice';
import Loading from '../../../shared/Animation/Loading';

const TravelList = ({ limit }) => {
  const dispatch = useDispatch();
  const { isLoading, travels } = useSelector((state) => state.travel);

  useEffect(() => {
    dispatch(getAllDataTravels());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  // Ensure travels is an array before using slice
  const displayedTravels = travels && travels.length ? (limit ? travels.slice(0, limit) : travels) : [];

  return (
    <div className="py-10 font-urbanist">
      <div className="container">
        <div className="flex justify-between items-center my-8">
          <h1 className="border-l-8 border-primary/50 py-2 pl-2 text-3xl font">
            Best Campervan to Choose
          </h1>
          <div>
            <Link to="/create-camper" className="bg-primary text-white px-4 py-2 rounded-md">
              Create Campervan
            </Link>
          </div>
        </div>
       
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {displayedTravels.map((item, index) => (
            <Link key={index} to={`/travels/${item.id}`} className="my-2 text-l shadow-lg bg-gray-100 rounded-lg h-50 w-72 p-5">
              <div>
                <img
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOzMhqbVkS6M2yideRMlS4VEqJDMdvPI8zA&s"}
                  alt=""
                  className=" block mx-auto h-10 w-10"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center mt-3">
                <h1 className="line-clamp-1 font-bold text-l">{item.name}</h1>
                <div className="flex items-center gap-2 opacity-70 mt-1">
                  <span className="text-sm">{item.user_id}</span>
                </div>
                <div className="flex items-start gap-6 justify-between border-t-2 mt-3 pt-2 w-full">
                  <div className="text-sm">{item.contactInfo}</div>
                  <div className="opacity-70 text-sm">
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {limit && (
          <div className="mt-4 text-center">
            <Link to="/travels" className="text-primary font-bold">
              See More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelList;
