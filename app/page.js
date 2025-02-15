import Image from "next/image";
import Header from "./components/header";
import Previsao from "./components/previsao";
import Semana from "./components/semana";
import Caixas from "./components/caixas";
import PrevisaoSemana from "./components/previsaoSemana";

export default function Home() {
  return (
    <div className="bg-blue-200 w-full overflow-hidden">
      <Header />
      <div className=" justify-evenly -space-x-48 sm:flex">
        <div className=" ">
          <Previsao />
          <Semana />
          <Caixas />
        </div>
        <div className="">
          <PrevisaoSemana />
        </div>
      </div>
    </div>
  );
}
