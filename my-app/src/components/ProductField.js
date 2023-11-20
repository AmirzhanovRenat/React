import React, { useState } from 'react';
import uuid from 'react-uuid';

function ProductField({ id, text, type, func }) {
  let [edit, setEdit] = useState(false);

  return edit ? (
    <input
      value={text}
      onChange={(event) => {
        func(id, type, event);
      }}
      onBlur={() => {
        setEdit(false);
      }}
    ></input>
  ) : (
    <>
      <span
        onClick={() => {
          setEdit(true);
        }}
      >
        {' '}
        {text}
      </span>
    </>
  );
}

export default ProductField;
