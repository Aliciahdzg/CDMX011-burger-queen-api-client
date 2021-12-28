/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
import './styles/Resum.scss';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Resum = ({
  resumItems,
  setResumItems,
  removeAll,
  client,
  setClient,
  api,
  urlK,
  order
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const prices = resumItems.map((item) => item.qty * item.price);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    setTotal(prices.reduce(reducer, 0));
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
      Swal.fire({
        title: 'Error!',
        text: 'Nombre de cliente es requerido',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    Swal.fire({
      title: '¿Enviar Orden?',
      icon: 'question',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar!',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
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
    });
  };

  return (
    <div className="resum-content">
      <div className="div-client-name">
        <input
          className="client-name"
          autoFocus
          placeholder="Nombre de cliente"
          value={client}
          onChange={(e) => {
            setClient(e.target.value);
          }}
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
                onClick={() => {
                  removeAll(item);
                }}
              >
                <Icon icon="cil:delete" color="#f2884b" height="30" />
              </button>
            </div>
          ))}
        </div>
        <div className="div-total">
          <p>
            <span>Total:</span> $ {total} .00
          </p>
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
