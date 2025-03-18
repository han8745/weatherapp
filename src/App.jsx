import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function App(){
  const apikey="ca6f96bcfee67fd0ad80ddf1d1c3e7b5"
  const defaultcity="Kuala Lumpur"
  const [city,setCity]=useState(defaultcity)
  const [weather, setWeather]=useState(null)
  const [searchCity, setSearchCity] = useState(""); 
  const navigate = useNavigate(); 

  const keyboard = (e)=>{
    if(e.key==="Enter"){
      setCity(searchCity);
      setSearchCity("");
    }
  }

useEffect(
()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
.then(res => res.json())
.then(data=>
  setWeather(data))

.catch(error=>console.error("Error:",error));
},[city]);
return(
  <> 
<div className="relative bg-[url('/Mypic/caption.jpg')] bg-cover bg-center w-full h-screen">


<div className="flex flex-col items-center justify-center h-screen z-10 ">
<div className="bg-[url('/Mypic/weather.webp')]  w-90 flex flex-col items-center h-screen mt-20 mb-20 border rounded-lg  ">
<h1 className="mt-20 text-3xl font-mono font-bold">Weather Today</h1>

<input onKeyDown={keyboard}
className="text-center bg-white border border-gray-300 rounded-lg p-2 mb-10 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-20" 
type="text" value={searchCity} onChange={(e)=>setSearchCity(e.target.value)}/>


<button className="bg-blue-200 border border-gray-300 mb-10 hover:bg-gray-50 rounded-lg flex w-20  h-10 cursor-pointer items-center text-center justify-center " onClick={()=>
setCity(searchCity)

}>check</button>


  
{weather && weather.main ? (
  <>
    <div className="text-left font-mono">
      <p> City ：{weather.name}</p>
      <p>Temp ：{weather.main.temp}°C</p>
      <p> Min_temp: {weather.main.temp_min}°C</p>
      <p>wethaer_id: {weather.id}</p>
    </div>
  </>
) : (
  <p>no city found, please try again</p>
)}

<button  disabled={!weather || !weather.main}
  className={`mt-2 bg-blue-400 border-none rounded-lg flex h-8 w-24 text-center 
  items-center justify-center ${!weather ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-300"}`}
  onClick={() => navigate("/WeatherDetails", { state: { weather } })
  }>more details</button>

</div>
</div>
</div>
  </>
  
)

}


export default App;


