import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Save, Download, Trash2 } from 'lucide-react';

const dentalConditions = {
  healthy: { name: 'Sano', color: 'bg-white' },
  caries: { name: 'Caries', color: 'bg-red-500' },
  filled: { name: 'Obturado', color: 'bg-blue-500' },
  missing: { name: 'Ausente', color: 'bg-gray-500' },
  crown: { name: 'Sarro', color: 'bg-yellow-500' },
  toExtract: { name: 'Para extraer', color: 'bg-purple-500' },
};

const ConditionSelector = ({ currentCondition, onConditionChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Object.entries(dentalConditions).map(([key, { name, color }]) => (
        <button
          key={key}
          className={`px-3 py-1 rounded ${color} border ${currentCondition === key
            ? 'ring-2 ring-offset-2 ring-blue-500'
            : 'hover:opacity-80'
            } ${color === 'bg-white' ? 'text-black' : 'text-white'}`}
          onClick={() => onConditionChange(key)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

const SaveModal = ({ isOpen, onClose, onSave }) => {
  const [saveName, setSaveName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Guardar Odontograma</h3>
          <button onClick={onClose} className="hover:cursor-pointer p-1 rounded-sm transition hover:bg-gray-300 text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <input
          type="text"
          value={saveName}
          onChange={(e) => setSaveName(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Nombre del registro (ej: Consulta 19/02/2025)"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              if (saveName.trim()) {
                onSave(saveName);
                setSaveName('');
                onClose();
              }
            }}
            className="px-4 py-2 border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all rounded-md"
            disabled={!saveName.trim()}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadModal = ({ isOpen, onClose, saves, onLoad, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Cargar Odontograma</h3>
          <button onClick={onClose} className="hover:cursor-pointer p-1 rounded-sm transition hover:bg-gray-300 text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {Object.entries(saves).length === 0 ? (
            <p className="text-gray-500 text-center">No hay registros guardados</p>
          ) : (
            Object.entries(saves).map(([key, save]) => (
              <div key={key} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium">{save.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(save.date).toLocaleDateString()} {new Date(save.date).toLocaleTimeString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onLoad(key)}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-md"
                  >
                    <Download size={20} />
                  </button>
                  <button
                    onClick={() => onDelete(key)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const NoteModal = ({ isOpen, onClose, toothNumber, note, onSave }) => {
  const [noteText, setNoteText] = useState(note || '');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Nota para diente {toothNumber}</h3>
          <button onClick={onClose} className="hover:cursor-pointer p-1 rounded-sm transition hover:bg-gray-300 text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="w-full h-32 p-2 border rounded-md mb-4 resize-none"
          placeholder="Escribe una nota para este diente..."
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              onSave(toothNumber, noteText);
              onClose();
            }}
            className="px-4 py-2 border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all  rounded-md"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const Tooth = ({ number, position, conditions, onPartClick, currentCondition, note, onNoteClick }) => {
  const getPartStyle = (part) => {
    const condition = conditions[`${number}-${part}`] || 'healthy';
    return `${dentalConditions[condition].color} border cursor-pointer hover:opacity-80`;
  };

  return (
    <div className="relative w-14 h-20 my-1 mx-2">
      <div className="absolute w-full text-center text-sm font-medium top-0.5">{number}</div>
      <div className="absolute top-5 w-full h-16 flex items-center justify-center">
        <div
          className={`absolute top-0 w-8 h-2.5 cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100 ${getPartStyle('top')}`}
          onClick={() => onPartClick(number, 'top')}
        />
        <div
          className={`absolute top-3 right-0 w-2.5 h-8 border cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100 ${getPartStyle('right')}`}
          onClick={() => onPartClick(number, 'right')}
        />
        <div
          className={`absolute bottom-2 w-8 h-2.5 border cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100 ${getPartStyle('bottom')}`}
          onClick={() => onPartClick(number, 'bottom')}
        />
        <div
          className={`absolute top-3 left-0 w-2.5 h-8 border cursor-pointer hover:scale-105 hover:border-2 hover:rounded-md transition-all duration-100 ${getPartStyle('left')}`}
          onClick={() => onPartClick(number, 'left')}
        />
        <div
          className={`absolute top-3 w-8 h-8 border cursor-pointer hover:scale-95 hover:border-2 hover:rounded-md transition-all duration-100 ${getPartStyle('center')}`}
          onClick={() => onPartClick(number, 'center')}
        />

      </div>
      <button
        onClick={() => onNoteClick(number)}
        className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2  hover:text-blue-500`}
      >
        <MessageCircle size={16} className={`${note ? 'text-blue-300 fill-current' : 'text-gray-500'}`} />
      </button>
    </div>
  );
};

const DentalChart = () => {
  const [conditions, setConditions] = useState({});
  const [currentCondition, setCurrentCondition] = useState('healthy');
  const [notes, setNotes] = useState({});
  const [selectedTooth, setSelectedTooth] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [saves, setSaves] = useState({});

  const upperTeeth = ['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'];
  const lowerTeeth = ['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];

  useEffect(() => {
    const savedData = localStorage.getItem('dentalChartSaves');
    if (savedData) {
      setSaves(JSON.parse(savedData));
    }
  }, []);

  const handlePartClick = (toothNumber, part) => {
    setConditions(prev => ({
      ...prev,
      [`${toothNumber}-${part}`]: currentCondition
    }));
  };

  const handleNoteClick = (toothNumber) => {
    setSelectedTooth(toothNumber);
    setIsNoteModalOpen(true);
  };

  const handleNoteSave = (toothNumber, noteText) => {
    if (noteText.trim()) {
      setNotes(prev => ({
        ...prev,
        [toothNumber]: noteText
      }));
    } else {
      const newNotes = { ...notes };
      delete newNotes[toothNumber];
      setNotes(newNotes);
    }
  };

  const handleSave = (name) => {
    const newSaves = {
      ...saves,
      [Date.now()]: {
        name,
        date: Date.now(),
        conditions,
        notes,
      }
    };
    setSaves(newSaves);
    localStorage.setItem('dentalChartSaves', JSON.stringify(newSaves));
  };

  const handleLoad = (key) => {
    const save = saves[key];
    setConditions(save.conditions);
    setNotes(save.notes);
    setIsLoadModalOpen(false);
  };

  const handleDelete = (key) => {
    const newSaves = { ...saves };
    delete newSaves[key];
    setSaves(newSaves);
    localStorage.setItem('dentalChartSaves', JSON.stringify(newSaves));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <ConditionSelector
          currentCondition={currentCondition}
          onConditionChange={setCurrentCondition}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setIsSaveModalOpen(true)}
            className="px-4 py-2 border-2 border-gray-600 bg-[#B3E5FC] text-[#4A4A4A] font-semibold hover:cursor-pointer hover:bg-[#86cff0] hover:scale-95 duration-100 transition-all rounded-md flex items-center gap-2"
          >
            <Save size={20} />
          </button>
          <button
            onClick={() => setIsLoadModalOpen(true)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center gap-2"
          >
            <Download size={20} />
          </button>
        </div>
      </div>

      {/* <ConditionSelector
        currentCondition={currentCondition}
        onConditionChange={setCurrentCondition}
      /> */}

      <div className="flex flex-wrap justify-center mb-8">
        {upperTeeth.map(number => (
          <Tooth
            key={number}
            number={number}
            position="upper"
            conditions={conditions}
            onPartClick={handlePartClick}
            currentCondition={currentCondition}
            note={notes[number]}
            onNoteClick={handleNoteClick}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center">
        {lowerTeeth.map(number => (
          <Tooth
            key={number}
            number={number}
            position="lower"
            conditions={conditions}
            onPartClick={handlePartClick}
            currentCondition={currentCondition}
            note={notes[number]}
            onNoteClick={handleNoteClick}
          />
        ))}
      </div>

      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSave}
      />

      <LoadModal
        isOpen={isLoadModalOpen}
        onClose={() => setIsLoadModalOpen(false)}
        saves={saves}
        onLoad={handleLoad}
        onDelete={handleDelete}
      />

      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        toothNumber={selectedTooth}
        note={selectedTooth ? notes[selectedTooth] : ''}
        onSave={handleNoteSave}
      />
    </div>
  );
};

export default DentalChart;