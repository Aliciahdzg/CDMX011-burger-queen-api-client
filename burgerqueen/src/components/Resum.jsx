/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
import './styles/Resum.scss';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';

const Resum = (props) => {
  const {
    resumItems,
    setResumItems,
    removeAll,
    client,
    setClient,
    api,
    urlK,
    order
  } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (resumItems.length === 0) {
      return 0;
    }
    const prices = resumItems.map((item) => item.qty * item.price);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    return setTotal(prices.reduce(reducer));
  }, [resumItems]);

  const resetInputField = () => {
    setClient('');
  };

  const postOrder = () => {
    const options = {
      body: order,
      headers: { 'Content-Type': 'application/json' }
    };
    if (!client) {
      alert('Nombre del cliente es requerido');
      return;
    }
    const r = window.confirm('¿Enviar orden?');
    if (r) {
      api
        .post(urlK, options)
        .then((res) => {
          if (res.err) {
            console.log(res.statusText);
          }
        })
        .then(setResumItems([]))
        .then(resetInputField());
    }
  };

  return (
    <div className="resum-content">
      <div className="div-client-name">
        <input
          className="client-name"
          autoFocus
          placeholder="Nombre de cliente"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <div className="resum-summary">
        <h3>Resumen del pedido</h3>
        <div className="titles">
          <p>Alimento</p>
          <p>Cantidad</p>
          <p>Subtotal</p>
        </div>
        <div className="no-items">
          {resumItems.length === 0 && <p>El pedido esta vacio</p>}
        </div>
        <div className="items-container">
          {resumItems.map((item) => (
            <div className="item-body" key={item.id}>
              <p id="name">{item.name}</p>
              <p id="qty"> {item.qty}</p>
              <p id="subtotal"> $ {item.qty * item.price}</p>
              <button
                className="delete-icon"
                type="button"
                onClick={() => removeAll(item)}
              >
                <Icon icon="cil:delete" color="#f2884b" height="30" />
              </button>
            </div>
          ))}
        </div>
        <div className="div-total">
          {resumItems.length === 0 ? (
            <p>
              <span>Total:</span> $ 0.00
            </p>
          ) : (
            <p>
              <span>Total:</span> $ {total} .00
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              postOrder();
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Resum;
