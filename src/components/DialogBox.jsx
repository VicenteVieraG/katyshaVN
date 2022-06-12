import React from 'react'

const DialogBox = ({name, text}) => {
  return (
    <div className="mx-auto w-11/12 h-40 text-center shadow-xl bg-vintageTexture">
        {/*<div className="w-40 h-10 bg-zinc-200 ml-16 border-4 border-neutral-500 text-slate-300">{name}</div>*/}
        <p className="font-semibold text-black text-2xl">{text}</p>
    </div>
  )
}

export default DialogBox