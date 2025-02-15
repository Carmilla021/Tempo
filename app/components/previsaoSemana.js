import React from "react";
import Image from "next/image";

export default function PrevisaoSemana() {
  return (
    <div>
      <div className="bg-slate-50 flex flex-col rounded-2xl p-4 m-4">
        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Segunda</p>
          <Image
            src="/sun clouds.png"
            alt="Imagem Senac"
            width={100}
            height={100}
          />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Terça</p>
          <Image src="/Sun.png" alt="Imagem Senac" width={100} height={100} />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Quarta</p>
          <Image src="/Sun.png" alt="Imagem Senac" width={100} height={100} />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Quinta</p>
          <Image
            src="/sun clouds.png"
            alt="Imagem Senac"
            width={100}
            height={100}
          />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Sexta</p>
          <Image
            src="/clouds.png"
            alt="Imagem Senac"
            width={100}
            height={100}
          />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Sábado</p>
          <Image src="/rain.svg" alt="Imagem Senac" width={100} height={100} />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <p className="text-slate-400 w-20 text-2xl font-medium">Domingo</p>
          <Image
            src="/sun clouds.png"
            alt="Imagem Senac"
            width={100}
            height={100}
          />
          <div className="flex gap-2 text-2xl">
            <p className="text-gray-600">29°</p>
            <p className="text-slate-400">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
