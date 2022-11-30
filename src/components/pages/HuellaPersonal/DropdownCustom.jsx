import React, {useState, useEffect, useRef} from 'react'
import { BiCaretDown } from "react-icons/bi";

function DropdownCustom({data, Selected, setSelected, elemDisp=[]}) {
    const [IsActive, setIsActive]=useState(false)
    let menuRef=useRef()
    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setIsActive(false)
                //console.log(menuRef.current)
            }
        }
        document.addEventListener("mousedown", handler)
        return ()=>{
            document.removeEventListener("mousedown", handler)
        }
    })
    data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    //fixear hacer click fuera de elemento
  return (
    <div ref={menuRef} className='CustomDrop select-none relative w-[400px] m-auto hover:cursor-pointer'>
        <div onClick={(e)=>(setIsActive(!IsActive))} className='border-[#90bfbf] border-2 backdrop-blur-lg  rounded-xl CustomDropButton py-4 px-5  shadow-[3px_3px_10px_6px_rgba(0,0,0,0.08)] font-bold text-gray-600 flex items-center justify-between'>
            {Selected} <BiCaretDown className='text-a2g_opaque text-2xl'/>
        </div>
        {IsActive && (
            <div className='rounded-xl backdrop-blur-md max-h-[345px] overflow-y-auto z-10 CustomDropContent w-full absolute top-[110%] p-1 shadow-[3px_3px_10px_6px_rgba(0,0,0,0.06)] font-[500] text-gray-600'>
            {   
                data.map((dat)=>{if(elemDisp.length!==0 && elemDisp.includes(dat.name)) return(
                    <div onClick={(e)=>{
                        setSelected(dat.name)
                        setIsActive(false)
                    }} key={dat.code} className='rounded-xl CustomDropItem flex justify-between p-2 items-center w-full transition-all duration-200 hover:bg-gray-200'>
                        <span>{dat.name}</span>
                        {dat.flag_1x1 !== undefined && <img src={'./'+dat.flag_1x1} className=' w-10 h-10'/>}

                    </div>
                )
                else if(elemDisp.length===0) return(
                    <div onClick={(e)=>{
                        setSelected(dat.name)
                        setIsActive(false)
                    }} key={dat.code} className='rounded-xl CustomDropItem flex justify-between p-2 items-center w-full transition-all duration-200 hover:bg-gray-200'>
                        <span>{dat.name}</span>
                        {/*console.log(dat.flag_1x1)*/}
                        {dat.flag_1x1 !== undefined && <img src={'./'+dat.flag_1x1} className='bg-red-50 w-10 h-10'/>}
                    </div>
                )
                })
            }
        </div>
        )}
        
    </div>
  )
}

export default DropdownCustom