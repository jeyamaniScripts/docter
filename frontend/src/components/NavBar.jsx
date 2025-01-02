import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useState } from "react";
const NavBar = () => {
  const naveItems = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ALL DOCTORS", link: "/doctors" },
    { id: 3, name: "CONTACT", link: "/contact" },
    { id: 4, name: "ABOUT", link: "/about" },
  ];
  const [feedType, setFeedType] = useState("HOME");
  const [token, setToken] = useState(true);
  // const [showMenu, setShowMenu] = useState(false);

  const handleFeed = (feed) => {
    setFeedType(feed);
  };

  const navigate = useNavigate();

  return (
    <div className=" flex justify-between items-center py-4 mb-5 border-b border-gray-400">
      <img src={assets.logo} alt="logo" className="w-44 cursor-pointer" />
      {/* <ul className=" hidden md:flex items-start gap-5 font-medium">
        <NavLink>
          <li className="py-1">Home</li>
          <hr className=" border-none outline-none border-primary h-0.5 w-full" />
        </NavLink>
        <NavLink>
          <li className="py-1">All Doctors</li>
          <hr className=" border-none outline-none border-primary h-0.5 w-full" />
        </NavLink>
        <NavLink>
          <li className="py-1">About</li>
          <hr className=" border-none outline-none border-primary h-0.5 w-full" />
        </NavLink>
        <NavLink>
          <li className="py-1">Contact</li>
          <hr className="  outline-none border-primary h-0.5 w-full" />
        </NavLink>
      </ul> */}
      <div className=" flex items-start gap-5 font-medium">
        {naveItems.map((navItem) => {
          return (
            <ul key={navItem.id} className=" hidden md:flex relative">
              <NavLink to={navItem.link}>
                <li
                  className={`py-1 cursor-pointer ${
                    feedType === navItem.name ? "text-primary font-bold" : ""
                  }`}
                  onClick={() => handleFeed(navItem.name)}
                >
                  {navItem.name}
                </li>
              </NavLink>
              {feedType === navItem.name && (
                <div className=" bg-primary w-full h-0.5 absolute bottom-0 "></div>
              )}
            </ul>
          );
        })}
      </div>
      <div className=" flex  items-center gap-2">
        {token ? (
          <div className=" flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile_pic"
            />
            <img
              className="w-3"
              src={assets.dropdown_icon}
              alt="drobdown_icon"
            />
            <div className=" absolute top-0 right-0 pt-14 font-medium text-gray-600 z-20 hidden group-hover:block text-base">
              <div className="bg-stone-100 p-4 min-w-48 flex flex-col gap-4 rounded ">
                <p
                  className=" hover:text-black curser-pointer"
                  onClick={() => navigate("my_profile")}
                >
                  My Profile
                </p>
                <p
                  className=" hover:text-black curser-pointer"
                  onClick={() => navigate("my_appontment")}
                >
                  My Appointment
                </p>
                <p
                  className=" hover:text-black curser-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className=" bg-primary text-white px-8 py-2 rounded-full font-light hidden md:block hover:bg-white hover:text-primary"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
