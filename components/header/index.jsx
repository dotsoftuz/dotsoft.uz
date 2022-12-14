import React from "react";
import BannerImg from "./hero.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="mt-10 h-[85vh] md:mt-20">
        <p className="text-lg font-semibold md:text-xl">©2022</p>
        <div className="mt-5 mb-10">
          <div className="flex items-center">
            <h1 className="font-woodland text-5xl font-semibold uppercase md:text-8xl">
              More than Just
            </h1>
            <img
              className="ml-0 w-20 duration-300 hover:rotate-180 md:ml-10"
              src="/svg/star.svg"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="font-woodland text-5xl font-semibold uppercase md:text-8xl">
              A <span className="text-[#135ab9]">Creative</span> Agency
            </h1>
          </div>
        </div>
        <div className="my-5 flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center -space-x-7">
            <div className="h-[40px] w-[40px] rounded-full bg-[#135ab9]"></div>
            <div className="h-[40px] w-[40px] rounded-full bg-black"></div>
          </div>
          <div className="-space-y-1 font-semibold text-gray-700">
            <p>37+</p>
            <p>Satisfied Client</p>
          </div>
          <div className="max-w-2xl -space-y-1 text-lg font-semibold text-gray-700">
            <p className="ml-16">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              eligendi temporibus illum deleniti repellendus! Nemo nostrum
              reprehenderit.
            </p>
          </div>
        </div>
        <div className="relative mt-16 h-[44vh] w-full">
          <Image
            className="w-full rounded-t-3xl"
            src={BannerImg}
            layout="fill"
            objectFit="cover"
            alt="Banner image"
          />
          <div className="absolute -top-10 right-5 h-32 w-32 rounded-full bg-black duration-300 hover:scale-95 md:-top-20 md:right-20 md:h-44 md:w-44">
            <div className="mt-14 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-16 w-16 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* https://youtu.be/l89_urbsTtk */}
    </div>
  );
};

export default Header;
