import React from "react";
import Image from "next/image";
export default function Semana() {
  return (
    <div className="bg-blue-500 flex rounded-2xl w-full items-center text-center justify-around mx-auto p-4 sm:flex sm:justify-center sm:w-1/2  sm:space-x-4 sm:items-center ">
      <div className="flex flex-col w-14 items-center">
        <p className="text-sm">6:00 AM</p>
        <Image
          src="/sun clouds.png"
          alt="Imagem Senac"
          width={70}
          height={70}
        />
        <p className="font-extrabold text-xl">24°</p>
      </div>

      <div className="flex flex-col w-14 items-center">
        <p className="text-sm">9:00 AM</p>
        <Image
          src="/sun clouds.png"
          alt="Imagem Senac"
          width={70}
          height={70}
        />
        <p className="font-extrabold text-xl">28°</p>
      </div>

      <div className="flex flex-col w-14 items-center">
        <p className="text-sm">2:00 PM</p>
        <Image src="/Sun.png" alt="Imagem Senac" width={70} height={70} />
        <p className="font-extrabold text-xl">30°</p>
      </div>

      <div className="flex flex-col w-14 items-center">
        <p className="text-sm">3:00 AM</p>
        <Image src="/Sun.png" alt="Imagem Senac" width={70} height={70} />
        <p className="font-extrabold text-xl">32°</p>
      </div>
    </div>
  );
}
