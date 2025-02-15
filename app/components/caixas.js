import React from "react";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";

export default function Caixas() {
  return (
    <div className=" w-full h-96 flex gap-4 p-2 ">
      <div className="m-2 sm:flex sm:space-x-5">
        <div className="flex space-x-4">
          <div className="bg-slate-50 w-40 h-36 mt-4 rounded-3xl text-center items-center flex flex-col justify-center">
            <label className="text-slate-500 text-[14px] font-bold ">
              Sensação Térmica
            </label>
            <div className="justify-center items-center flex ">
              <WiThermometer size={60} className="text-slate-400 " />
              <label className="text-gray-600 text-5xl font-bold">30°</label>
            </div>
          </div>

          <div className="bg-slate-50 w-40 h-36 mt-4 rounded-3xl text-center items-center flex flex-col justify-center">
            <label className="text-slate-500 text-[14px] font-bold ">
              Chances de Chuva
            </label>
            <div className="justify-center items-center flex ">
              <WiRaindrop size={60} className="text-slate-400 " />
              <label className="text-gray-600 text-5xl font-bold">0%</label>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="bg-slate-50 w-40 h-36 mt-4 rounded-3xl text-center items-center flex flex-col justify-center">
            <label className="text-slate-500 text-[14px] font-bold ">
              Vento
            </label>
            <div className="justify-center items-center flex ">
              <WiStrongWind size={60} className="text-slate-400 " />
              <div>
                <label className="text-gray-600 text-5xl font-bold">2</label>
              </div>
              <div>
                <label className="text-gray-600 text-sm font-bold">km/h</label>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-40 h-36 mt-4 rounded-3xl text-center items-center flex flex-col justify-center">
            <label className="text-slate-500 text-[14px] font-bold ">
              Índice UV
            </label>
            <div className="justify-center items-center flex ">
              <WiDaySunny size={60} className="text-slate-400 " />
              <label className="text-gray-600 text-5xl font-bold">4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
