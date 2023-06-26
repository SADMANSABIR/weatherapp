import React from "react";
import axios from "axios";
import { useState } from "react";

const Weatherdata = () => {
  //   const [data, setData] = useState({});
  //   const [location, setLocation] = useState("");
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a2bee166c4e3c9f70e281c6a42cb3936&units=metric`;

  //   const searchLocation = (event) => {
  //     if (event.key === "Enter") {
  //       axios.get(url).then((response) => {
  //         setData(response.data);
  //         console.log(response.data);
  //       });
  //       setLocation("");
  //     }
  //   };
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // const key = process.env.key;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a2bee166c4e3c9f70e281c6a42cb3936&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className=" h-screen w-full bg-slate-950">
      <video
        src="assets\cloud.mp4"
        muted
        autoPlay
        loop
        className="object-cover h-screen w-full opacity-70"
      ></video>

      <div className="absolute top-0 flex flex-col items-center justify-between h-5/6 w-full p-20 space-y-10 ">
        <div>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
            className="outline-none placeholder-[#f8f8f8] rounded-2xl pt-3 pb-3
          pl-4 pr-4 font-bold bg-white bg-opacity-50 text-xl before:uppercase"
          />
          {/* type="text" */}
        </div>
        <div className="flex flex-col items-center justify-between gap-28 bg-black opacity-50 rounded-2xl w-full h-screen">
          <div className=" flex space-x-10 mt-10">
            <h1 className="text-neutral-50 text-3xl font-extrabold font-sans brightness-200">
              {/* {data.name === input.value ? (<p>{ input.value}</p>)} : null } */}
              {data.name}
            </h1>
            <h1 className="text-3xl font-semibold text-neutral-50">
              {/* 30 <span>°C</span> */}
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </h1>
          </div>
          <div className="flex gap-11">
            <span>
              <h1 className="text-2xl font-sans text-black font-semibold bg-white opacity-90 p-4 rounded-xl flex flex-col items-center justify-between">
                Feels Like
                {/* <span>31°C</span> */}
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
              </h1>
            </span>
            <span>
              <h1 className="text-2xl flex font-sans text-black font-semibold bg-white opacity-90 rounded-xl p-4  flex-col items-center justify-between mb-20">
                Wind Speed
                {/* <span>31 KMH</span> */}
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
              </h1>
            </span>
            <span>
              {/* <h1 className="text-2xl bg-white opacity-90 rounded-xl p-4 font-semibold text-black flex flex-col items-center justify-between"> */}
              <h1 className="text-black font-sans bg-white opacity-90 rounded-xl p-4 font-semibold flex flex-col items-center justify-between text-2xl">
                Humidity
                {/* <span>31%</span> */}
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
              </h1>
            </span>
            <span>
              <h1 className="text-2xl font-sans bg-white opacity-90 rounded-xl p-4 font-semibold text-black flex flex-col items-center justify-between">
                Description
                {/* <span>3000</span> */}
                {data.weather ? (
                  <p className="bold">{data.weather[0].description}</p>
                ) : null}
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherdata;
