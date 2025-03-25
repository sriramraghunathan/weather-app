import { useState } from "react";
import axios from "axios";
function Weather() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");
  const [temperature, settemp] = useState("");
  const [desc, setdesc] = useState("");

  function handleCity(event) {
    setcity(event.target.value);
  }

  function getWeather() {
    let weatherdata = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f48f7ceb0048c49ebc86207f0d7a9ca5`
    );
    weatherdata.then(function (success) {
      console.log(success.data);
      setweather(success.data.weather[0].main);
      setdesc(success.data.weather[0].description);
      settemp(success.data.main.temp);
    });
  }

  return (
    <>
      <div className="bg-black p-20  ">
        <div className="bg-blue-400 p-16  rounded-md text-center flex flex-col mt-20 mb-80 gap-3">
          <h1 className="text-6xl  font-medium animate-bounce ">
            WEATHER REPORT
          </h1>
          <div className="flex justify-center  mt-20">
            <input
              type="text"
              className="bg-blue-300 p-5 content-center font-medium rounded-l-2xl w-80 "
              placeholder="Enter your City Name"
              onChange={handleCity}
              value={city}
            />
            <button
              onClick={getWeather}
              className="bg-blue-200 text-black font-medium rounded-r-2xl p-2 w-24"
            >
              Get Report
            </button>
          </div>
          <div className="flex justify-center gap-20 mt-20">
            <h2 className="font-semibold text-3xl">Weather: {weather}</h2>
            <h2 className="font-semibold  text-3xl">
              Temperature: {temperature}
            </h2>
            <h2 className="font-semibold  text-3xl">Description: {desc}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
