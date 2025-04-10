import React, { useState } from "react";

const ExpandableText = () => {
  const [currentOpen, setCurrentOpen] = useState(null);

  const toggleContent = (id) => {
    setCurrentOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(1)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Cómo juego High or Lower?</p>
        <div
          id="content-1"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 1 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center">El objetivo es simple: adivina cuál de las dos cartas mostradas es mayor. Si aciertas, aparecerá una nueva carta y simplemente vuelve a adivinar cuál crees que es mayor. Cada juego tiene infinitas preguntas, así que intenta conseguir una racha de puntuaciones altas.</p>
        </div>
      </div>

      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(2)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Cuál es el sistema de puntuación? </p>
        <div
          id="content-2"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 2 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center">Si aciertas si la siguiente carta es mayor o menor, ganas un punto. En cuanto te equivoques, el juego termina y tienes que empezar de cero con una nueva selección aleatoria de preguntas.</p>
        </div>
      </div>

      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(3)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Hay límite de tiempo en Higher or Lower?</p>
        <div
          id="content-3"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 3 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center">En Higher or Lower no hay presión de tiempo. Tómate tu tiempo para decidir tu respuesta. ¡Disfruta del juego a tu propio ritmo!</p>
        </div>
      </div>

      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(4)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Cuál es la puntuación más alta en Higher o Lower?</p>
        <div
          id="content-4"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 4 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center"> Hay tablas de clasificación para cada categoría en la app. ¡Descárgala y compite!</p>
        </div>
      </div>

      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(5)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Cuándo se actualizó "Higher or Lower"?</p>
        <div
          id="content-5"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 5 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center"> Nos esforzamos al máximo para asegurarnos de que todos los modos de juego se hayan actualizado en los últimos 12 meses. Con más de 100 modos de juego "Higher or Lower" disponibles, los más populares se actualizan con mayor frecuencia.</p>
        </div>
      </div>

      <div className="text-clickable border-1 border-white w-[700px]" onClick={() => toggleContent(6)}>
        <p className="text-yellow-300 font-bold cursor-pointer text-center">¿Puedo Sugerir una nueva categoria?</p>
        <div
          id="content-6"
          className={`mt-2 transition-all duration-300 max-h-0 overflow-hidden ${currentOpen === 6 ? 'max-h-[200px]' : 'hidden'}`}
        >
          <p className="text-white text-center"> Claro, agradecemos sugerencias para que el juego sea aún más divertido y entretenido. Puedes encontrar tu información de contacto{' '}<a href="https://www.ejemplo.com" className="text-green-500">Aqui</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableText;
