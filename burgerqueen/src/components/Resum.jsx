/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Resum = (props) => {
  const { resumItems, removeAll } = props;
  const [total, setTotal] = useState([]);

  useEffect(() => {
    if (resumItems.length === 0) {
      return 0;
    }
    const prices = resumItems.map((item) => item.qty * item.price);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    return setTotal(prices.reduce(reducer));
  }, [resumItems]);

  return (
    <div>
      <div className="div-client-name">
        <input className="client-nane" placeholder="Nombre del cliente" />
      </div>
      <div className="resum-content">
        <h3> Resumen del pedido</h3>
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
      <div>
        <p>Total: ${total}</p>
        <button type="button">Enviar</button>
      </div>
    </div>
  );
};
export default Resum;
