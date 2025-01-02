import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className=" flex flex-col  gap-4 items-center py-16 text-gray-800"
    >
      <h1 className=" text-3xl font-medium">Find by Speciality</h1>
      <p className=" sm:w-1/3 md:w-1/2 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className=" flex gap-3 sm:justify-center w-full  overflow-scroll">
        {specialityData.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              className=" flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                className=" w-16 sm:w-24 mb-2 mt-3"
                src={item.image}
                alt={item.speciality}
              />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
