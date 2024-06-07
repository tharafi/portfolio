import React, { useContext } from 'react'
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { themeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(themeContext)
  const handleSubmitToggle = () => {
      theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='w-[50px] h-[25px] rounded-l-full rounded-r-full border-1 border-gray-300 bg-white fixed top-3 right-3 z-30 flex items-center justify-around'>
      <img src={Sun} alt=""  className='w-[16px] h-[16px]'/>
      <img src={Moon} alt="" className='w-[16px] h-[16px]' />
      <div className="button w-[25px] h-[25px] rounded-full bg-slate-400 cursor-pointer absolute " onClick={handleSubmitToggle} style={{left: theme.state.darkMode ? 0: 25}}></div>
    </div>
  )
}

export default Toggle
