import React from 'react'
import { RiPlayFill } from "react-icons/ri";
import img_1 from "./assets/img_1.png"
import figma from "./assets/figma.png"
import sketch from "./assets/sketch.png"
import adobexd from "./assets/adobexd.png"
function MainHome() {
  return (
    <section className="min-h-[92vh] grid grid-cols-1 md:grid-cols-8  gap-8 md:gap-0">
                <div className=" md:col-span-5 flex items-center justify-center p-12 ">
                    <div className="flex flex-col gap-16 hover:gap-20">
                        <h1 className="text-[#27446f] text-6xl font-bold leading-[7rem]">
                            We Design Impactful Digital <span className="text-primary p-2 border-8 border-primary ">Products</span>
                        </h1>
                        <p className="text-gray-500 text-xl leading-[2.5rem]">
                            Help find solutions with intuitice and in accordance
                            with client business goals. We provide a high-quality
                            service.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {/*border-primary rounded-xl border-2*/}
                            <button  className="before:hover:scale-x-100 duration-700 transition relative before:transition before:duration-500 before:origin-top-left before:ease-in before:scale-x-0 before:-z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-primary border-primary border-2 xl:w-auto text-primary py-2 px-8 text-xl inline hover:text-white">Contact Us</button>
                            {/*<button  className="xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl inline">Contact Us</button>*/}
                            <button  className="flex items-center gap-4 py-2 px-8 rounded-xl text-xl">
                                <RiPlayFill className="bg-[#c2edff] text-primary p-4 box-content rounded-full"/> Watch our video
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" md:col-span-3 flex items-center justify-center relative p-20 md:p-4 ">
                    <img src={img_1} className="w-96 h-96 object-cover hover:animate-ping"/>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  bg-[#c2edff] border-[#27446f] rounded-full -z-10 w-[330px] h-[330px] border-[10px]"></div>
                    <img src={figma} className="animate-spin hover:animate-none w-20 h-20 object-cover rounded-full border-l-8 border-gray-700 absolute top-[5%] right-[5%] md:top-[25%] md:right-[10%]"></img>
                    <img src={sketch} className="animate-spin hover:animate-none w-20 h-20 absolute top-[5%] right-[80%] md:top-[15%] md:right-[100%]"></img>
                    <img src={adobexd} className="animate-spin hover:animate-none w-20 h-20 object-cover rounded-full border-l-8 border-gray-700 absolute bottom-[0%] left-[%] md:bottom-[15%] md:right-[50%]"></img>
                </div>
            </section>
  )
}

export default MainHome