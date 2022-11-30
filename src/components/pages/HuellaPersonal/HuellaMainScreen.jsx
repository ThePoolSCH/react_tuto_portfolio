import React from 'react'
import { RiPlayFill } from "react-icons/ri";
import a2g_logo from "./a2g_logo.png"
import a2g_planta from "./planta.png"

function HuellaMainScreen() {
  return (
    <div>
      <section  className="min-h-[93vh] grid grid-cols-1 md:grid-cols-8  gap-8 md:gap-0]">
      <div className=" md:col-span-5 flex items-center justify-center px-12">
        <div className="flex flex-col gap-16">
          <h1 className="text-a2g_soft text-6xl font-bold leading-[7rem] ">
            Ya conoces tu Huella de Carbono <span className="	text-a2g_opaque p-2 border-8 border-a2g_opaque ">Personal?</span>
          </h1>
          <p className="text-gray-500 text-xl leading-[2.5rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum labore facilis earum enim magni fuga reprehenderit minima nam, quis laborum animi neque. Reiciendis sed sit earum perspiciatis et, perferendis assumenda.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            {/*border-primary rounded-xl border-2*/}
            <button onClick={() => window.location.replace("#general")} className="before:hover:scale-x-100 duration-700 transition ease-linear relative before:transition before:duration-500 before:origin-top-left before:ease-in before:scale-x-0 before:-z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-a2g_opaque border-a2g_opaque border-2 xl:w-auto text-a2g_opaque py-2 px-8 text-xl inline hover:text-white hover:z-20 font-bold rounded-xl overflow-hidden">
              Empieza
            </button>
            {/*<button  className="xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl inline">Contact Us</button>*/}
            
            {/*<button onClick={()=> window.open("https://www.youtube.com/watch?v=mQXlL_FaGcE&t=1s")} className="flex items-center gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-[#aee0d7] text-a2g_opaque p-4 box-content rounded-full"/> Aprende sobre la Huella corporativa
            </button>*/}

          </div>
        </div>
      </div>
      <div className=" md:col-span-3 flex items-center justify-center relative p-20 md:p-4 ">
        <img src={a2g_planta} className="w-60 object-cover hover:scale-125 transform duration-1000 ease-out md:w-80"/>
      </div>
    </section>
    </div>
    
  )
}

export default HuellaMainScreen