import React from 'react';
import bromo from '../../../assets/bromo-mount.jpg';
import balaikambang from '../../../assets/balaikambang-beach.jpg';
import paralayang from '../../../assets/background.jfif';

const dataPopularDestination = [
  {
    img: bromo,
    id: 1,
    name: "Mount Bromo",
  },
  {
    img: balaikambang,
    id: 2,
    name: "Balaikambang Beach",
  },
  {
    img: paralayang,
    id: 3,
    name: "Paralayang Batu",
  },
];

const PopularDestination = () => {
  return (
    <div className="py-10 font-urbanist">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl">
          Popular Destination
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dataPopularDestination.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={item.img} alt={item.name} className='mx-auto h-[220px] w-full object-cover' />
              <div className='space-y-2 p-3'>
                <div className='opacity-70'>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
