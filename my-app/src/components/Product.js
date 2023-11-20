import React, { useState } from 'react';
import uuid from 'react-uuid';
import ProductField from './ProductField';

function Product({ name, cost, catg, id, func }) {
  return (
    <>
      <tr>
        <ProductField
          text={name}
          id={id}
          type="name"
          func={func}
        ></ProductField>
        <ProductField
          text={cost}
          id={id}
          type="cost"
          func={func}
        ></ProductField>
        <ProductField
          text={catg}
          id={id}
          type="catg"
          func={func}
        ></ProductField>
      </tr>
    </>
  );
}

export default Product;
