import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  const footerList = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About us", link: "/about" },
    { id: 3, name: "Contact us", link: "/contact" },
    { id: 4, name: "Privacy Policy", link: "/privacy_policy" },
  ];
  return (
    <div className=" md:mx-10">
      <div className=" flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm mt-40">
        {/* about  */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="logo" />
          <p className=" text-gray-600 leading-6 md:leading-5 md:line-clamp-4 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            optio repellendus, illum blanditiis eligendi pariatur voluptates
            iure, perspiciatis quidem reiciendis soluta dicta voluptate,
            officiis veritatis aliquid! Maiores hic similique corrupti!
          </p>
        </div>
        {/* company  */}
        <div>
          <p className=" text-xl font-medium mb-5">Company</p>
          <ul className=" flex flex-col gap-2 text-gray-600 ">
            {footerList.map((list) => {
              return (
                <li
                  key={list.id}
                  className=" cursor-pointer hover:text-primary"
                >
                  {list.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* get inTouch  */}
        <div>
          <p className=" text-xl font-medium mb-5">Get In Touch</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>+91 854678954</li>
            <li>jemaes034@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" text-sm text-center py-3">
          Copyright 2024@ prescrepto -All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
