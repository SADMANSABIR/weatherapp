import React from "react";
import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
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
    <div className="flex items-center justify-between flex-col absolute top-0">
      <div className="h-screen w-full bg-slate-950 relative ">
        <img
          className="h-screen w-full cover opacity-50 "
          src="assets\weather.jpg"
          alt=""
        />
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Search For Your Location"
          spellCheck="false"
          className="absolute w-72 top-16 left-72 ml-64 outline-none placeholder-[#f8f8f8] rounded-2xl pt-3 pb-3 pl-4 pr-4 font-bold bg-white bg-opacity-50 text-xl  before:uppercase "
          type="text"
        />
      </div>

      <div className="values">
        <div>
          <h1>name</h1>
          <h1>
            {" "}
            30 <span></span>
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Weather;
