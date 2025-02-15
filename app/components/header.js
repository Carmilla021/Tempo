import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className=" w-full h-20 flex items-center gap-16 sm:flex sm:justify-center">
      <div className="flex flex-col ml-5">
        <Image
          src="/Senac_logo.svg"
          alt="Imagem Senac"
          width={70}
          height={70}
        />
        <label className="font-bold text-blue-400">TEMPO</label>
      </div>
      <input className="h-8 w-1/2 rounded" placeholder="🔎"></input>
    </div>
  );
}
