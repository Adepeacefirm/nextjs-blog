"use client";

import { blog_data } from "@/public/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("all");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("all")}
          className={`cursor-pointer ${
            menu === "all" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }`}
        >
          All
        </button>
        <button
          className={`cursor-pointer ${
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("Technology")}
        >
          Technology
        </button>
        <button
          className={`cursor-pointer ${
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }`}
          onClick={() => setMenu("Startup")}
        >
          Startup
        </button>
        <button
          className={`cursor-pointer ${
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }`}
          onClick={() => setMenu("Lifestyle")}
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl-my-24">
        {blog_data
          .filter((item) => (menu === "all" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              id = {item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
