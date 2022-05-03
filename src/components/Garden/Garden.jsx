import React, { useState, useEffect } from "react";
import { Plant } from "./Plant";
import ModalLayout from "../../layouts/ModalLayout";

import { useParams } from "react-router-dom";
import waterLily from "../../assets/waterLily.svg";
import { plantsList } from "./plants";

import { GiCarnivorousPlant } from 'react-icons/gi'
import { FaSeedling } from 'react-icons/fa'

export function Garden() {
  const params = useParams();
  const nickname = params.nickname;
  const [plants, setPlants] = useState([]);


  /* Modal open state */
  const [openModal, setOpenModal] = useState(false)

  // fetching user's plants
  const fetchPlants = () => setPlants(plantsList);

  useEffect(() => {
    fetchPlants()
  }, []
  );
  return (
    <div className="flex flex-col bg-blueDark min-h-screen w-full relative">


      <div className="top-garden flex items-center justify-between">
        <h2 className="text-2xl text-center font-extrabold sm:text-3xl  text-white ">
          Garden World {nickname}
        </h2>
        <button onClick={() => setOpenModal(!openModal)} className=" w-max h-max p-3 btn-primary rounded-full hover:bg-purple hover:text-blueDark duration-300 z-20"><GiCarnivorousPlant className="text-5xl" /></button>
      </div>

      <ModalLayout title="Available plants" openModal={openModal} setOpenModal={setOpenModal}>
        <div className="h-96 overflow-y-auto grid place-items-center gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
          {plants && plants.map((plant, index) => (

            <div className="index bg-blueDark w-44 h-44 rounded-lg flex flex-col items-center py-2 justify-center" key={index}>
              <picture className="w-20 h-3/4 flex items-center">
                <img className="w-16 m-auto" src={plant.image} alt="" />
              </picture>
              <div className="divbottom flex items-center justify-between py-2 px-5 w-full h-1/4">
                <div className="price text-white font-semibold flex items-center gap-2">
                  <FaSeedling />
                  <span>0</span>
                </div>
                <button className="btn-primary py-1 text-base">Select</button>
              </div>
            </div>
          ))}
        </div>
      </ModalLayout>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row auto-rows-max gap-7 justify-center m-auto">
        {plants.length != 0 ? plants.map((plant, index) => (

          <Plant data={plant} key={index} />
        )) : null}


      </div>
    </div>
  );
}
