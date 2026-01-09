import Image from "next/image";
import React from "react";
import logo_light from "@/public/logo_light.png";
import facebook_icon from "@/public/facebook_icon.png";
import twitter_icon from "@/public/twitter_icon.png";
import googleplus_icon from "@/public/googleplus_icon.png";

const Footer = () => {
  return (
    <div className="bg-black py-5 items-center flex sm:flex-row justify-around flex-col gap-2 sm:gap-0">
      <p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent">
        BouncyBlog
      </p>
      <p className="text-sm text-white">
        All rights reserved. Copyright @BouncyBlog
      </p>
      <div className="flex">
        <Image src={facebook_icon} width={40} alt="facebook icon" />
        <Image src={twitter_icon} width={40} alt="facebook icon" />
        <Image src={googleplus_icon} width={40} alt="facebook icon" />
      </div>
    </div>
  );
};

export default Footer;
