import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import arrow from "@/public/arrow.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            width={180}
            alt="logo"
            className="w-32.5 sm:w-auto cursor-pointer"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-2 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Posts</h1>
        <p className="mt-10 max-w-185 m-auto text-xs sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eveniet
          dolores autem optio odit vitae velit enim? Qui, soluta exercitationem.
        </p>
        <form className="flex justify-between lg:max-w-125 scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l px-2 border-black py-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
