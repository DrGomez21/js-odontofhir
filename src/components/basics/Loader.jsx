import React from 'react';

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#2B7A78] animate-bounce [animation-delay:.7s]" />
        <div className="w-4 h-4 rounded-full bg-[#2B7A78] animate-bounce [animation-delay:.3s]" />
        <div className="w-4 h-4 rounded-full bg-[#2B7A78] animate-bounce [animation-delay:.7s]" />
      </div>
      <span className='text-sm'>Cargando datos, por favor, aguarde un momento.</span>
    </div>
  );
}

export default Loader;
