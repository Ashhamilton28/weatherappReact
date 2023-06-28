import React from "react";
import ChanceOfRain from "./ChanceOfRain";

function Forecasts() {
  return (
    <div>
      <div className="flex gap-96">
        <div className="flex gap-4 mt-4 ml-6">
          <p className="text-gray-400 text-xl">Today</p>
          <p className="text-gray-400 text-xl">Tomorrow</p>
          <p className="text-white text-xl">Next 7 days</p>
        </div>

        <div className="flex gap-4 mt-4 ml-6">
          <p className="bg-primarycolor-blue py-2 px-6 rounded-full">
            Forecast
          </p>
          <p className="text-gray-400 py-2 px-6 rounded-full bg-dark-gray-color">
            Air Quality
          </p>
        </div>
      </div>

     <div className="flex ">
     <section className="flex flex-col  h-50 max-w-[250px] bg-primarycolor-blue ml-6 rounded-2xl mt-6">
        

        <div className="card-header flex justify-between p-4 bg-darker-primary-blue rounded-t-2xl font-bold">
          <h2>Monday</h2>
          <p className="font-ff-playfair-display">11:42 PM</p>
        </div>

        <div className="flex card-body py-2 px-3">
          <div className="flex flex-col ">
          <span className=" ml-2 text-4xl font-ff-playfair-display">16&deg;</span>
          <p className="text-xs">Real Feel <span className="font-bold">18&deg;</span></p>
            <p className="text-xs">Wind: N-E, <span className="font-bold">5-8km-h</span></p>
            <p className="text-xs">Pressure: <span className="font-bold">1000MB</span> </p>
            <p className="text-xs">Humidity: <span className="font-bold">51%</span> </p>

          </div>

{/* couldn't get sunrise and sunset to line up with pressure and humidity  */}
          <div className="mt-20 ">
            <p className="text-xs">Sunrise: <span className="font-bold">6:02AM</span></p>
            <p className="text-xs">Sunset: <span className="font-bold">9:18PM</span></p>
          </div>
          {/* <div className="flex items-center gap-10 bg-primarycolor-blue pb-2">
            <span className=" ml-2 text-4xl font-ff-playfair-display">16&deg;</span>
            <i className="text-3xl text-yellow-500 fa-solid fa-sun"></i>
          </div>

          <div className="text-xs ml-2">
            <p>Real Feel <span className="font-bold">18&deg;</span></p>
            <p>Wind: N-E, <span className="font-bold">5-8km-h</span></p>
            <p>Pressure: <span className="font-bold">1000MB</span> Sunrise: <span className="font-bold">6:02AM</span></p>
            <p>Humidity: <span className="font-bold">51%</span> Sunset: <span className="font-bold">9:18PM</span></p>
          </div> */}
        </div>
      </section>

      <section className="flex">
        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Tue</h4>
         
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">10&deg;</p>

        </div>

        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl  flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Wed</h4>
          
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">15&deg;</p>

        </div>

        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl  flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Thur</h4>
        
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">11&deg;</p>

        </div>


        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Fri</h4>
         
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">18&deg;</p>

        </div>

        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl  flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Sat</h4>
          
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">12&deg;</p>

        </div>

        <div className="text-white ml-6 mt-6 min-w-[100px] h-52 bg-even-darker-gray rounded-3xl  flex flex-col items-center justify-around">
          <h4 className="border-b-2 border-dark-gray-color w-full text-center pb-2">Sun</h4>
         
          <i className="text-5xl text-center fa-solid fa-sun"></i>
          <p className="text-4xl text-center font-ff-playfair-display">10&deg;</p>

        </div>
      </section>
<ChanceOfRain />
     
     </div>
    
    </div>
  );
}

export default Forecasts;
