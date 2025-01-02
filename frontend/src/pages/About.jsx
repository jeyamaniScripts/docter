import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div className="">
      <div className=" text-center text-2xl text-gray-500 pt-10">
        <p className="">
          ABOUT
          <span className="text-gray-700 font-medium pl-2">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_img"
        />

        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className=" text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className=" text-xl my-4">
        <h1>
          WHY <span className=" text-gray-700 font-semibold">CHOOSE US</span>
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 fle flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300">
          <b>Efficency:</b>
          <p>
            Streamlined appointment scheduling that fits into your bisy
            lifestyle.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 fle flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare proffecionals in your
            area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 fle flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300">
          <b>Personalization:</b>
          <p>
            Tailored recommentations and remainters to help you stay on the top
            of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
