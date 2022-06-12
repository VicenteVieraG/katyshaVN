import React from 'react'

const OptionSelect = ({textL, textR, a}) => {
  const resL = () =>{
    a(false);
  }
  const resR = () =>{
    a(true);
  }
  
  return (
    <div className="flex justify-around w-full">
        <button className="h-16 w-1/5 bg-slate-500 rounded-lg border-4 border-slate-700" onClick={resL}>{textL}</button>
        <button className="h-16 w-1/5 bg-slate-500 rounded-lg border-4 border-slate-700" onClick={resR}>{textR}</button>
    </div>
  )
}

export default OptionSelect