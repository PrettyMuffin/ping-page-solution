import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="space-y-5 text-center">
      {/* Links */}
      <section className="flex justify-center space-x-2">
        <div className="p-1 text-xl rounded-full border transition-all duration-300 ease-in-out cursor-pointer text-primary-400 hover:text-white hover:bg-primary-400">
          <BiLogoFacebook />
        </div>
        <div className="p-1 text-xl rounded-full border transition-all duration-300 ease-in-out cursor-pointer text-primary-400 hover:text-white hover:bg-primary-400">
          <IoLogoTwitter />
        </div>
        <div className="p-1 text-xl rounded-full border transition-all duration-300 ease-in-out cursor-pointer text-primary-400 hover:text-white hover:bg-primary-400">
          <IoLogoInstagram />
        </div>
      </section>
      <p className="text-[11px] text-neutral-gray font-light">
        &copy; Copyright Ping. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
