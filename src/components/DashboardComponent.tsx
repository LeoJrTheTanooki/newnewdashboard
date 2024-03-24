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
  //           primary: "bg-gradient-to-r from-blue-500 to-green-400",
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
      <div className="text-sm grid gap-7 lg:grid-cols-4 grid-cols-1 bg-white dark:bg-neutral-800 text-gray-500 dark:text-slate-400 h-screen p-10 lg:px-32">
        <div className="lg:col-span-3">
          <h2 className="text-2xl text-neutral-800 dark:text-white">
            Social Media Dashboard
          </h2>
          <p className="text-sm">Total Followers: 23,004</p>
        </div>
        <hr className="lg:hidden border-gray-500 dark:border-slate-400" />
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
            {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gradient-to-r from-blue-500 to-green-400 peer-checked:hover:bg-gradient-to-r peer-checked:hover:from-blue-500 peer-checked:hover:to-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-violet-50-dark peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400 peer-checked:from-slate-400"></div> */}
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gradient-to-r from-blue-500 to-green-400 peer-checked:hover:bg-gradient-to-r peer-checked:hover:from-blue-500 peer-checked:hover:to-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-violet-50-dark peer-checked:after:bg-white after:bg-zinc-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400 peer-checked:from-slate-400"></div>
          </label>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="w-full rounded-md bg-sky-500 pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={facebook} className="h-fit pr-2" alt="" />
                <p>@nathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-neutral-800 dark:text-white">
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
          <div className="w-full rounded-md bg-sky-500 pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={twitter} className="h-fit pr-2" alt="" />
                <p>@nathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-neutral-800 dark:text-white">
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
          <div className="w-full rounded-md bg-gradient-to-r from-orange-300 to-pink-500 pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={instagram} className="h-fit pr-2" alt="" />
                <p>@realnathanf</p>
              </div>
              <div>
                <h1 className="text-5xl text-neutral-800 dark:text-white">
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
          <div className="w-full rounded-md bg-rose-700 pt-1">
            <div className="justify-evenly rounded-b-md h-52 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex flex-col text-center">
              <div className="flex justify-center items-center">
                <img src={youtube} className="h-fit pr-2" alt="" />
                <p> Nathan F.</p>
              </div>
              <div>
                <h1 className="text-5xl text-neutral-800 dark:text-white">
                  8239
                </h1>
                <p className="font-normal tracking-[.5em]">FOLLOWERS</p>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-fit pr-1" src={down} alt="" />
                <p className="text-red-500">144 Today</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl lg:col-span-4">Overview - Today</h2>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Page Views</p>
          <div className="flex items-center justify-end">
            <img src={facebook} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            87
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">3%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={facebook} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            52
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-red-500">2%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={instagram} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            5462
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">2257%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Profile Views</p>
          <div className="flex items-center justify-end">
            <img src={instagram} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            52k
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">1375%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Retweets</p>
          <div className="flex items-center justify-end">
            <img src={twitter} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            117
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">303%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={twitter} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            507
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={up} alt="" />
            <p className="text-emerald-500">553%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Likes</p>
          <div className="flex items-center justify-end">
            <img src={youtube} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            107
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-red-500">19%</p>
          </div>
        </div>

        <div className="h-32 rounded-md w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 grid grid-cols-2 p-4 gap-1">
          <p className="flex items-center">Total Views</p>
          <div className="flex items-center justify-end">
            <img src={youtube} alt="" />
          </div>
          <h2 className="flex items-center text-neutral-800 dark:text-white text-3xl">
            1407
          </h2>

          <div className="flex items-center justify-end">
            <img className="h-fit pr-1" src={down} alt="" />
            <p className="text-red-500">12%</p>
          </div>
        </div>
      </div>
    </Flowbite>
  );
};

export default DashboardComponent;
