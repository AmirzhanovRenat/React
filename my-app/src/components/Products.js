import React, { useState } from 'react';
import uuid from 'react-uuid';
import Product from './Product';

const initProds = [
  { id: uuid(), name: 'prod1', cost: 'cost1', catg: 'catg1' },
  { id: uuid(), name: 'prod2', cost: 'cost2', catg: 'catg2' },
  { id: uuid(), name: 'prod3', cost: 'cost3', catg: 'catg3' },
];
function Products() {
  let [prod, setProds] = useState(initProds);

  function func(id, field, event) {
    setProds(
      prod.map((elem) => {
        if (elem.id === id) {
          elem[field] = event.target.value;
        }
        return elem;
      })
    );
  }

  let res = prod.map((elem) => {
    return (
      <table>
        <tbody>
          {
            <Product
              id={elem.id}
              key={elem.id}
              name={elem.name}
              cost={elem.cost}
              catg={elem.catg}
              func={func}
            ></Product>
          }
        </tbody>
      </table>
    );
  });

  return <>{res}</>;
}

export default Products;
