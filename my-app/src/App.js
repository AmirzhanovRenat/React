import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  let [name, setName] = useState(false);
  let [name1, setName1] = useState(false);
  let [name2, setName2] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        onChange={() => {
          setName(!name);
        }}
      />
      <input
        type="checkbox"
        onChange={() => {
          setName1(!name1);
        }}
      />
      <input
        type="checkbox"
        onChange={() => {
          setName2(!name2);
        }}
      />
      <p>
        {name ? 'html' : ''} 
        {name1 ? 'js' : ''} 
        {name2 ? 'css' : ''}
      </p>
    </>
  );
}
export default App;
