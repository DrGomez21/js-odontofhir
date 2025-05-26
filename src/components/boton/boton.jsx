import React from 'react';
import { Folder } from 'lucide-react'

/*
  Botones personalizados con sus iconos, se puede ir agregando mas dentro de este archivo.
  
*/
const BotonConPlus = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`flex justify-center gap-2 end-0 px-4 py-2 rounded-md border-2 border-gray-600 bg-[#B3E5FC] 
        text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all ${className}`}
      onClick={onClick}
    >    
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#2B7A78" strokeWidth={3} 
        strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        {children}
    </button>
  );
};

const BotonConFolder = ({ onClick, children, className = '' }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 
        border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all ${className}`}
      onClick={onClick}
    >    
        <Folder size={24} fill='#4a4a4a' color="#4a4a4a" />
        {children}
    </button>
  );
};


export { BotonConPlus, BotonConFolder };