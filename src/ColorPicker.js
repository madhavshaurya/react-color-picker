import React, { useState } from 'react';

function ColorPicker() {
  const initialColors = [
    'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan',
    'gray', 'brown', 'violet', 'indigo', 'teal', 'maroon', 'lime', 'magenta'
  ];

  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: '#ffc0cb', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {showColorList && (
        <ul className="color-list" style={{ listStyle: 'none', padding: 0 }}>
          {initialColors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                backgroundColor: color,
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                margin: '5px',
                display: 'inline-block',
              }}
            ></li>
          ))}
        </ul>
      )}
      <button onClick={toggleColorList} style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
        Pick a color
      </button>
      {selectedColor && (
        <p className="selected-color">Selected Color: {selectedColor}</p>
      )}
    </div>
  );
}

export default ColorPicker;
