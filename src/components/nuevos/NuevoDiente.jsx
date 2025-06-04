export const NuevoDiente = ({ diente, onClick }) => {

  // const colorBg = diente.estado === 'hallazgo'
  //   ? 'bg-blue-400'
  //   : diente.estado === 'procedimiento'
  //     ? 'bg-red-400'
  //     : diente.estado === null || diente.estado === undefined
  //       ? 'bg-white'
  //       : 'bg-white'

  const colorBg = diente.estado ? 'bg-blue-400' : 'bg-white'
  const colorBorder = diente.procedimientos ? 'border-red-400' : 'border-black'

  return (
    <div className='relative w-14 h-20 mx-2'>
      <div className='absolute w-full text-center text-sm font-medium'>{diente.numberISO}</div>

      <div className='absolute top-2 w-full h-16 flex items-center justify-center'>
        <div
          className={`
            w-10 h-10 border-2 rounded-lg 
            ${colorBg} ${colorBorder}
            cursor-pointer hover:scale-95 hover:border-4 hover:rounded-xl transition-all duration-100
          `}
          onClick={onClick}
        />
      </div>
    </div>
  )
}