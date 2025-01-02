import { assets } from "../assets/assets_frontend/assets";
const Contact = () => {
  return (
    <div className=" flex flex-col">
      <div className=" text-center pt-10 text-2xl text-gray-500">
        <h1 className=" ">
          CONTACT <span className="font-semibold text-gray-700 ">US</span>
        </h1>
      </div>
      <div className=" flex flex-col  justify-center md:flex-row gap-10 my-10 mb-28 text-sm">
        <img
          className=" w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="contact_img"
        />

        <div className=" flex flex-col justify-center items-start gap-6">
          <b className=" text-gray-600">OUR OFFICE</b>
          <p className=" text-gray-500 ">
            00000 Willms Station
            <br /> Suite 000, Washington, USA
          </p>
          <p className=" text-gray-500 ">
            Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com
          </p>
          <b className=" text-gray-600">CAREERS AT PRESCRIPTO</b>
          <p className=" text-gray-500 ">
            Learn more about our teams and job openings.
          </p>
          <button className="px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
