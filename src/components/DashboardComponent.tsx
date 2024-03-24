"use client";

import React, { useState } from "react";
import { DarkThemeToggle, Flowbite, ToggleSwitch } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import "../index.css";
import down from "../assets/icon-down.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import up from "../assets/icon-up.svg";
import youtube from "../assets/icon-youtube.svg";

const DashboardComponent = () => {
  let lightMode;
  if (localStorage.getItem("flowbite-theme-mode") === "light") {
    lightMode = true;
  } else {
    lightMode = false;
  }

  const [lightMode2, setLightMode2] = useState(lightMode);
  const handleState = () => {};

  // const customTheme: CustomFlowbiteTheme = {
  //   toggleSwitch: {
  //     toggle: {
  //       checked: {
  //         color: {
  //           primary: "bg-gradient-to-r from-[#378fe6] to-[#3eda82]",
  //         },
  //       },
  //     },
  //   },
  // };

  const handleDark = () => {
    if (localStorage.getItem("flowbite-theme-mode")) {
      if (localStorage.getItem("flowbite-theme-mode") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("flowbite-theme-mode", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("flowbite-theme-mode", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("flowbite-theme-mode", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("flowbite-theme-mode", "dark");
      }
    }
  };

  return (
    // <Flowbite theme={{ theme: customTheme }}>
    <Flowbite>
      <div className="text-sm grid gap-7 lg:grid-cols-4 grid-cols-1 bg-white dark:bg-[#1e202a] text-[#63687e] dark:text-[#8b97c6] h-screen p-10 lg:px-32">
        <div className="lg:col-span-3">
          <h2 className="text-2xl text-[#1e202a] dark:text-white">
            Social Media Dashboard
          </h2>
          <p className="text-sm">Total Followers: 23,004</p>
        </div>
        <hr className="lg:hidden border-[#63687e] dark:border-[#8b97c6]" />
        <div className="inline-flex items-center cursor-pointer justify-end">
          {/* Side Note: Tried to experiment with an imported <ToggleSwitch /> component, managed to get custom colors after some messing around, however colors could not match image. Despite this, it is noteworthy and could be used for future reference. Uncomment the next line to see for yourself */}
          {/* <ToggleSwitch
          <span className="text-sm mr-auto lg:mr-3">
            Dark Mode
          </span>
            color="primary"
            checked={switch2}
            onChange={setSwitch2}
            onClick={() => handleDark()}
          /> */}
          <span className="text-sm mr-auto lg:mr-3">Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={lightMode2}
              onChange={(e) => setLightMode2(e.target.checked)}
              value=""
              className="sr-only peer"
              onClick={() => handleDark()}
            />
            {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gradient-to-r from-[#378fe6] to-[#3eda82] peer-checked:hover:bg-gradient-to-r peer-checked:hover:from-[#378fe6] peer-checked:hover:to-[#3eda82] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#f5f7ff]-dark peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#aeb3cb] peer-checked:from-[#aeb3cb]"></div> */}
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gradient-to-r from-[#378fe6] to-[#3eda82] peer-checked:hover:bg-gradient-to-r peer-checked:hover:from-[#378fe6] peer-checked:hover:to-[#3eda82] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#f5f7ff]-dark peer-checked:after:bg-white after:bg-[#1f212e] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#aeb3cb] peer-checked:from-[#aeb3cb]"></div>
          </label>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="w-full rounded-md bg-[#198ff5] pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={facebook} className="h-fit pr-2" alt="" />
                <p>@nathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-[#1e202a] dark:text-white">
                  1987
                </h1>
                <p className="font-normal tracking-[.5em]">FOLLOWERS</p>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-fit pr-1" src={up} alt="" />
                <p className="text-emerald-500">12 Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="w-full rounded-md bg-[#1ca0f2] pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={twitter} className="h-fit pr-2" alt="" />
                <p>@nathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-[#1e202a] dark:text-white">
                  1044
                </h1>
                <p className="font-normal tracking-[.5em]">FOLLOWERS</p>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-fit pr-1" src={up} alt="" />
                <p className="text-emerald-500">99 Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="w-full rounded-md bg-gradient-to-r from-[#fdc468] to-[#df4996] pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={instagram} className="h-fit pr-2" alt="" />
                <p>@realnathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-[#1e202a] dark:text-white">
                  11k
                </h1>
                <p className="font-normal tracking-[.5em]">FOLLOWERS</p>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-fit pr-1" src={up} alt="" />
                <p className="text-emerald-500">1099 Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="w-full rounded-md bg-[#c4032a] pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={youtube} className="h-fit pr-2" alt="" />
                <p> Nathan F.</p>
              </div>
              <div>
                <h1 className="text-5xl text-[#1e202a] dark:text-white">
                  8239
                </h1>
                <p className="font-normal tracking-[.5em]">FOLLOWERS</p>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-fit pr-1" src={down} alt="" />
                <p className="text-[#dc414c]">144 Today</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl lg:col-span-4">Overview - Today</h2>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Page Views</p>
          <div className="flex items-center justify-end">
            <img src={facebook} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            87
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">3%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={facebook} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            52
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-[#dc414c]">2%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={instagram} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            5462
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">2257%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Profile Views</p>
          <div className="flex items-center justify-end">
            <img src={instagram} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            52k
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">1375%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Retweets</p>
          <div className="flex items-center justify-end">
            <img src={twitter} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            117
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">303%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={twitter} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            507
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">553%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={youtube} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            107
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-[#dc414c]">19%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-[#f0f2fa] hover:bg-[#e1e3f0] dark:bg-[#252a41] dark:hover:bg-[#333a56] grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Total Views</p>
          <div className="flex items-center justify-end">
            <img src={youtube} alt="" />
          </div>
          <h2 className="flex items-center text-[#1e202a] dark:text-white text-3xl">
            1407
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-[#dc414c]">12%</p>
          </div>
        </div>
      </div>
    </Flowbite>
  );
};

export default DashboardComponent;
