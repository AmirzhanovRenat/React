import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const texts = ['text1', 'text2', 'text3', 'text4'];
  const [value, setValue] = useState('');

  let options = texts.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {options}
      </select>

      <p>out:{value}</p>
    </>
  );
}
export default App;
