import React from "react";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsGoogle,
  BsFacebook,
  BsTwitter,
  BsTwitch,
  BsInstagram,
  BsMessenger,
  BsApple,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="relative bg-black">
      <img
        className="h-screen w-full cover opacity-60"
        src="assets\cover2.jpg"
      />
      <h1 className="absolute top-0 left-0 w-full h-screen items-center  flex justify-center text-center text-neutral-100 text-7xl font-bold font-Oswald hover:opacity-50 duration-300 ">
        WEATHER WIND
      </h1>
      <h2 className="text-3xl pt-96 text-neutral-100 font-bold absolute top-0 left-0 w-full text-center">
        YOUR TRUSTED WEATHER MAP CHECKER
      </h2>
      <button className="absolute top-96 left-96 mt-20 ml-52 bg-purple-700 p-3 rounded-xl font-bold text-neutral-200 ">
        <Link to="/weatherdata"> GET STARTED</Link>
      </button>
      <div className="icons absolute top-36 left-28 gap-6 cursor-pointer flex flex-col">
        <BsGithub className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsGoogle className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsFacebook className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsInstagram className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsMessenger className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsTwitter className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsTwitch className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
        <BsApple className="text-neutral-300 h-6 w-6 hover:h-8 w-8" />
      </div>

      <section className="bg-gradient-to-r from-gray-950 to-blue-950 h-screen w-full flex items-center justify-start">
        <div className="left flex flex-col p-28 gap-10">
          <h1 className="text-5xl cursor-pointer text-neutral-100 text-center">
            FASTER WEATHER INFO
          </h1>
          <p className="text-neutral-200 text-md leading-10 hover:opacity-50 duration-200 ">
            In addition to forecasts, the app offers various weather-related
            information.
            <br />
            Users can explore interactive maps to view radar images, satellite
            imagery,
            <br />
            and weather patterns in real-time. They can also access historical
            weather
            <br />
            data to
            {/* <br /> */}
            analyze trends and patterns for a particular location.
          </p>
        </div>
        <div className="right">
          <img
            className="h-96 border-4 rounded-xl mr-16"
            src="assets\img.jpg"
          />
        </div>
      </section>

      <section className="w-full h-screen bg-gradient-to-r from-gray-950 to-cyan-950 flex items-center justify-between p-16">
        <img className="h-96 border-4 rounded-xl  " src="assets\img2.jpg" />
        <div className="flex flex-col ml-8">
          <h1 className="text-neutral-100 text-3xl pb-10">
            KEEP UPDATED WITH ACCURATE FORECASTS
            <br />
            <p className="text-center leading-10">AND OUR AI</p>
          </h1>
          <h2 className="text-neutral-100 text-md leading-10 hover:opacity-50 duration-200">
            Overall, the weather app combines user-friendly design, accurate
            forecasts, and a wide range of features to deliver an all-in-one
            weather experience. It empowers users to make informed decisions
            based on reliable weather data, keeping them prepared and informed
            about current and future weather conditions.
          </h2>
        </div>
      </section>

      <footer className="w-full h-60 bg-gray-950 flex flex-col items-center justify-between p-16">
        <h1 className="text-3xl text-neutral-50 font-semibold hover:opacity-40 duration-500">
          All Rights Received @2023. WEATHER WIND
        </h1>
        <div className="flex gap-12">
          <BsTwitter className="text-neutral-300 h-10 w-10 hover:h-12 w-12 hover:border-4 rounded-full opacity-50 p-2" />
          <BsTwitch className="text-neutral-300 h-10 w-10 hover:h-12 w-12 hover:border-4 rounded-full opacity-50 p-2" />
          <BsApple className="text-neutral-300 h-10 w-10 hover:h-12 w-12 hover:border-4 rounded-full opacity-50 p-2" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
