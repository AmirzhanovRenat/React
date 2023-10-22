import React, { createElement, useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];
  const [notes, setNotes] = useState(initNotes);

  // function func(id) {
  //   setNotes(
  //     notes.map((note) => {
  //       if (note.id === id) {
  //         note.prop1 += '!!!!';

  //         return note;
  //       }
  //       return note;
  //     })
  //   );
  // }
  function func(id) {
    setNotes((par) => par.filter((el) => el.id !== id));
  }
  let a = notes.map((note) => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
        <button
          onClick={() => {
            func(note.id);
          }}
        >
          click
        </button>
      </li>
    );
  });
  return <>{a}</>;
}

export default App;
