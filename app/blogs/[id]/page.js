"use client";

import { blog_data } from "@/public/assets";
import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import logo from "@/public/logo.png";
import arrow from "@/public/arrow.png";
import Link from "next/link";

const Page = ({ params }) => {
  const { id } = use(params);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      for (let i = 0; i < blog_data.length; i++) {
        if (Number(id) === blog_data[i].id) {
          setData(blog_data[i]);
          console.log(blog_data[i]);
          break;
        }
      }
    };

    fetchBlogData();
  }, [id]);

  return (
    <div className="bg-gray-200 p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            width={180}
            className="w-32.5 sm:w-auto cursor-pointer"
            alt="logo"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
          Get Started <Image src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
          {data?.title}
        </h1>
        <Image
          className="mx-auto mt-6 border border-white rounded-full "
          src={data?.author_img}
          width={60}
          alt="author img"
        />
        <p className="mt-1 pb-2 text-lg max-w-185 mx-auto">{data?.author}</p>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-10">
        <Image
          className="border-4 border-white "
          src={data?.image}
          width={1280}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction: </h1>
        <p>{data?.description}</p>
        <h2 className="my-8 text-[26px] font-semibold">Content</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas quibusdam architecto eligendi enim optio tempore sunt repellat laborum modi, placeat quis similique? Dicta nobis doloremque asperiores! Sed quos unde, eaque ullam quam nesciunt at quasi fugiat cumque dicta repellat temporibus officiis, culpa sequi consequatur nemo quo iure. Dolore, corporis sit eum fugit perferendis consectetur? Culpa sapiente nemo error repudiandae exercitationem impedit mollitia doloribus sit asperiores nihil suscipit, porro atque, iusto dicta, distinctio laborum? Nobis ut iste voluptates ipsa eligendi corporis vitae? Quos non consectetur, labore eveniet rerum similique! Numquam recusandae atque illo quasi unde mollitia debitis qui dignissimos perferendis fugit ad quia, dicta eaque ullam omnis sunt provident optio at consequuntur quod, itaque assumenda eveniet! Quasi, sunt eum quas, labore numquam quisquam earum amet eos ut fuga quae? Laboriosam, cumque officia quidem quis saepe minima quas dicta reiciendis eveniet eos expedita doloremque voluptatum rerum dolor error a assumenda totam adipisci molestias quos harum esse molestiae ducimus. Qui, aliquid repellendus. Porro, laborum consectetur. Voluptates suscipit maxime, quae cum iusto eius veritatis blanditiis odit officia laudantium excepturi, vitae itaque in ea natus fuga ut rerum, alias est ipsum necessitatibus delectus expedita consequatur molestias! Dolorem nihil voluptates totam in! Sit, mollitia eum?</p>
      </div>
    </div>
  );
};

export default Page;
