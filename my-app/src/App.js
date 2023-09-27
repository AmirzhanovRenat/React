// import React from 'react';
import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  let [age, setAge] = useState('');

  return (
    <>
      <select
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      >
        <option>text1</option>
        <option>text2</option>
        <option>text3</option>
      </select>

      {age}
      <input
        placeholder="hohoh"
        onChange={(eve) => {
          setAge(eve.target.value);
        }}
      />
      <p>{age}</p>
    </>
  );
}
export default App;
