import { Link, useLocation } from "react-router-dom";
function WeatherDetails(){

const location =useLocation();
const weather = location.state?.weather;

return(
<>
<div className="relative bg-[url('/Mypic/caption.jpg')] bg-cover bg-center w-full h-screen">

<div className=" h-screen flex items-center justify-center w-full">
    <div className="bg-[url('/Mypic/weather2.jpg')] flex flex-col items-center border-2 justify-center bg-blue-100 rounded-lg  h-screen w-100  ">
    <div className="text-left font-mono">
        <h1 className="text-4xl mb-20 text-violet-800 font-serif font-bold antialiased  decoration-from-font">{weather.name}</h1>
      <p>Temp ：{weather.main.temp}°C</p>
      <p> Min_temp: {weather.main.temp_min}°C</p>
      <p>Max Temp: {weather.main.temp_max}°C</p>
      <p>Weather_id: {weather.id}</p>
      <p>Humidity :{weather.main.humidity}</p>
      <p>Weather: {weather.weather?.[0]?.main}</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
     <p>Wind Speed: {weather.wind.speed} m/s</p>
     <p>Wind Direction: {weather.wind.deg}°</p>
     
    </div>


<Link className=" mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 shadow-md
" to="/" >Home Page</Link>
    </div>
    </div>
    </div>
    </>
)
}


export default WeatherDetails;