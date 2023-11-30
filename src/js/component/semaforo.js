import React, { useState } from 'react';

const Semaforo = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (light) => {
    setActiveLight(light === activeLight ? null : light);
  };

  const getButtonClass = (light) => `btn ${activeLight === light ? `btn-${light}` : 'btn-light'} w-25 border-0`;

  return (
    <div>
      <div className="d-flex flex-column align-items-center mb-2">
        <button
          className={`btn btn-danger ${getButtonClass('red')}`}
          onClick={() => handleLightClick('red')}
        >
          Red
        </button>
        <button
          className={`btn btn-warning ${getButtonClass('yellow')}`}
          onClick={() => handleLightClick('yellow')}
        >
          Yellow
        </button>
        <button
          className={`btn btn-success ${getButtonClass('green')}`}
          onClick={() => handleLightClick('green')}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Semaforo;
