import React from 'react'

export default function Navbar({pname, colorLink}) {
  return (
    <>
        {/* navigation */}
    <div className = "w-full flex items-center justify-between px-20 pt-5 pb-5 rounded-b-sm bg-gray-800">
        <div className = "flex gap-5 items-center">
            <span className = "text-3xl font-bold text-[#CBB9A8] ">{'>_'}</span>
            <span className = "text-3xl font-semibold text-white">Phanuwat Torsrisakul</span>
        </div>
        <div className = "flex gap-5 items-center">
            <a href = "/" className= "text-white" style={{color: pname == 'home' ? colorLink : 'white'}}>Home</a>
            <a href = "/portfolio" className= "text-white" style={{color: pname == 'portfolio' ? colorLink : 'white'}}>About</a>
            <a href = "/contact" className= "text-white" style={{color: pname == 'contact' ? colorLink : 'white'}}>Contact</a>
            <a href = "/about" className= "text-white border-2 border-white px-4 py-1 rounded-2xl" style={{color: pname == 'about' ? colorLink : 'white'}}>Let's Talk</a>
        </div>
        </div>
    </>
  )
}
