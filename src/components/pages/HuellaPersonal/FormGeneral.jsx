import React, {useState} from 'react'
import {Zoom, Fade} from 'react-reveal'
import { AiOutlineArrowDown } from "react-icons/ai";

import numberFams from './people.json'
import data from './country.json'

import "./flag-icons.min.css";
import "./flag-icons.css"

import DropdownCustom from './DropdownCustom';

//al usar items center, el div que se use, fit the object y pierde el flex
function FormGeneral() {
  const [Selected, setSelected]= useState("Selecciona tu pais")
  const [Selected1, setSelected1]= useState("Selecciona numero fam")
  const paisesDisp=["Venezuela", "Peru", "Chile", "Bolivia", "Ecuador", "Colombia", "Argentina", "Brasil", "Uruguay", "Paraguay", "Mexico"]
  return (
    <section id="general" className='min-h-screen p-20 flex flex-col gap-16  items-center'>
      {/*<div className='float-right -top-14 left-10 relative text-4xl p-0'>
        <span className='text-[#2a94cb] text-bold animate-wiggle float-right right-0 p-0'>1/7</span>
      </div>*/}
      <div className='float-right -top-14 left-10 relative text-4xl p-0 w-full'>
        <span className='text-[#2a94cb] text-bold animate-wiggle float-right right-0 p-0'>1/7</span>
      </div>
      <Zoom>
        <h1 className='text-6xl text-center font-black -mt-28'>
            Cuéntanos sobre ti
        </h1>
      </Zoom>

      {/*<input type="number"></input>
      <div className='h-[50px] w-full max-w-[400px] relative'>
        <input type='number' className='w-full h-full bg-green-100 text-black pt-[20px] border-none outline-none'></input>
        <label className='lbl_name overflow-hidden absolute bottom-0 left-0 w-full h-full pointer-events-none border-b-[1px] border-a2g_opaque border-solid after:absolute after:left-0 after:-bottom-[1px] after:w-full after:h-full after:border-b-[3px] after:border-solid after:border-a2g_light after:-translate-x-full after:transition-all after:duration-300 after:ease-in'>
            <span className='text_nom absolute bottom-1 left-0 transition-all duration-300 ease-in color-black focus:valid:'>a</span>
        </label>
        </div>*/}


      {/*data=>Lista de elementos del dropdown, elemDisp=>Restricciones de lista (solo los elementos que esten) */}
      {/*fixear la separacion con los fades */}

        <DropdownCustom data={data} Selected={Selected} setSelected={setSelected} elemDisp={paisesDisp}/>


        <DropdownCustom data={numberFams} Selected={Selected1} setSelected={setSelected1}/>



      <button onClick={() => window.location.replace("#habits")} className="animate-bounce flex items-center gap-4 py-2 px-2 -mb-16 rounded-xl text-xl">
        <AiOutlineArrowDown className="bg-[#aee0d7] text-a2g_opaque p-4 box-content rounded-full"/>
      </button>
      

      {/*<div className='relative text-2xl'>
      {
        data.map((dat)=>(
          //console.log(dat.capital)
          <div key={dat.code}>
            <span>{dat.capital}</span>
            <img src={'./'+dat.flag_1x1} className='bg-red-50 w-10 h-10'/>
            <br/>
          </div>
        ))
      }
      </div>*/}

    </section>
  )
}

export default FormGeneral