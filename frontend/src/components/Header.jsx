import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row flex-wrap bg-primary px-6 rounded-lg md:px-10 lg:px-20">
      {/* LEFT SIDE  */}
      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[30px]">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl text-white  font-semibold leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </h2>
        <div className=" flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className=" w-20" src={assets.group_profiles} alt="group_pic" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className=" hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <div>
          <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0  hover:scale-105 transition-all duration-300">
            Book Appointment
            <img src={assets.arrow_icon} alt="arrow_icon" />
          </a>
        </div>
      </div>
      {/* {RIGHT SIDE } */}
      <div className=" md:w-1/2 relative">
        <img
          className=" md:absolute bottom-0 w-full h-auto rounded-lg"
          src={assets.header_img}
          alt="header_img"
        />
      </div>
    </div>
  );
};

export default Header;
