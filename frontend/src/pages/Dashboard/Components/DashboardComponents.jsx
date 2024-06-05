// import { IconCalendar } from "@tabler/icons-react";
// import React from "react";

// function DashboardComponents() {
//   return (
//     <div className="pt-[25px] px-[25px] font-urbanist">
//       <div className="flex items-center justify-between">
//         <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
//           Dashboard
//         </h1>
//       </div>
//       <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px] ">
//         <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-primary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[1.03] transition duration-300 ease-out shadow-lg">
//           <div>
//             <h2 className="text-[#b589df] text-[11px] leading-17px font-bold">
//               Travels
//             </h2>
//             <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
//               Total: 20
//             </h1>
//           </div>
//           <IconCalendar fontSize={28} />
//         </div>

//         <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-primary flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[1.03] transition duration-300 ease-out shadow-lg">
//           <div>
//             <h2 className="text-[#1cc88a] text-[11px] leading-17px font-bold">
//               Travels
//             </h2>
//             <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
//               Total: 20
//             </h1>
//           </div>
//           <IconCalendar fontSize={28} color="black" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardComponents;
import React from "react";
import laut from "../../../assets/mas-laut.jpg";

function UserProfile() {
  return (
    <div className="pt-[25px] px-[25px] bg-[#f8f9fc] font-urbanist min-h-[88vh]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[#5a5c69] text-[32px] leading-[38px] font-normal cursor-pointer">
          User Profile
        </h1>
        <button className="bg-primary text-white px-[20px] py-[10px] rounded-[8px] hover:bg-primary-dark transition duration-300 ease-out">
          Edit
        </button>
      </div>
      <div className="flex justify-center mt-[25px] pb-[15px]">
        <div className="h-auto rounded-[8px] bg-white border-l-[4px] border-primary flex flex-col md:flex-row items-center justify-between px-[30px] py-[20px] cursor-pointer hover:shadow-lg transform hover:scale-[1.03] transition duration-300 ease-out w-full max-w-[800px]">
          <div className="flex items-center space-x-[20px]">
            <img
              src={laut}
              alt="User"
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
            <div>
              <h2 className="text-[#5a5c69] text-[24px] leading-[28px] font-bold mt-[10px]">
                Name: Laut Biru
              </h2>
              <h3 className="text-primary text-[20px] leading-[24px] font-bold mt-[10px]">
                Email: biru.laut@example.com
              </h3>
              <p className="text-[#5a5c69] text-[18px] leading-[24px] font-normal mt-[10px]">
                Phone: (123) 456-7890
              </p>
              <p className="text-[#5a5c69] text-[18px] leading-[24px] font-normal mt-[10px]">
                Address: 123 Main St, Anytown, USA
              </p>
              <p className="text-[#5a5c69] text-[18px] leading-[24px] font-normal mt-[10px]">
                Membership: Travel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;



