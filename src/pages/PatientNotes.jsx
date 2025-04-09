import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/basics/Header';

export const PatientNotes = ({ notes }) => {
  const textareaRef = useRef(null);
  const [notas, setNotas] = useState(notes)

  // Función para ajustar la altura del textarea
  const ajustarAltura = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Restablecer altura
      textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar al contenido
    }
  };

  // Ajustar altura cuando el componente se monte
  useEffect(() => {
    ajustarAltura();
  }, [notes]);

  return (
    <div className='flex flex-col gap-4 mx-6'>
      <Header />
      <h1 className='font-bold text-3xl'>Notas del paciente</h1>
      <textarea
        ref={textareaRef}
        value={notas}
        onChange={(e) => {setNotas(e.target.value)}}
        onInput={ajustarAltura} // Ajustar altura en cada entrada de texto
        className='rounded-md overflow-hidden resize-none bg-white border-black border-2 font-medium px-4 py-4'
      />
    </div>
  );
};
