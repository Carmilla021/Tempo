import React from "react";
import Image from "next/image";
export default function Previsao() {
  return (
    <div className=" w-full h-60 flex items-center sm:flex sm:justify-center ">
      <div className="flex flex-col p-3">
        <label className="text-gray-900 font-extrabold text-4xl">LAVRAS</label>
        <label className="text-gray-400 text-sm">Chance de chuva: 0%</label>
        <label className="text-gray-900 font-extrabold text-6xl m-5 ">
          28°
        </label>
      </div>
      <Image src="/sun clouds.svg" alt="Imagem Senac" width={180} height={50} />
    </div>
  );
}
