"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    const currentpathname = usePathname()
  let navBar = [
    { title: "Users", link: "/users" ,pathname:"/users" },
    { title: "Posts", link: "/posts"  , pathname:"/posts"},
  ];
  return (
    <div className="sticky top-0  flex flex-row justify-center">
      <div
        className="w-[400px] my-4 h-12   bg-black shadow-lg shadow-black-500/50  rounded-2xl flex items-center justify-center"
      >
        {navBar.map((item, index) => (
          <div onClick={()=>router.push(item.pathname)} key={index} className="w-[50%] cursor-pointer">
            <p className={` ${item.pathname==currentpathname?"text-blue-500":"text-white"} text-center`}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
