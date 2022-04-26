import React, { useState, useEffect } from "react";
import { Plant } from "./Plant";
import { useParams } from "react-router-dom";
import waterLily from "../../assets/waterLily.svg";
import { plantsList } from "./plants";
export function Garden() {
  const params = useParams();
  const nickname = params.nickname;
  const [plants, setPlants] = useState([]);

  // fetching user's plants
  const fetchPlants = () => setPlants(plantsList);

  useEffect(() => {
    fetchPlants()}, []
  );
  return (
    <div className="flex flex-col  bg-blueDark min-h-screen w-full">
      <h2 className="text-2xl text-center font-extrabold sm:text-3xl  text-white ">
        Garden World {nickname}
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row auto-rows-max gap-7 justify-center m-auto">
        {plants.length!=0 ? plants.map((plant,index)=>(
        
          <Plant data={plant} key={index}/>
        )):null}
        
  
      </div>
    </div>
  );
}
