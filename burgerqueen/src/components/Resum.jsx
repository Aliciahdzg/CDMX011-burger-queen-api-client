/* eslint-disable react/prop-types */
import React from 'react';

const Resum = (props) => {
  const { resumItems, removeAll } = props;
  return (
    <div>
      <h3>Resumen del pedido</h3>
      <div>{resumItems.length === 0 && <p>El pedido esta vacio</p>}</div>
      {resumItems.map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.name}</li>
            <li> cant {item.qty}</li>
            <li>total $ {item.qty * item.price}</li>
          </ul>
          <button type="button" onClick={() => removeAll(item)}>
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
};
export default Resum;
