<<<<<<< HEAD
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
=======
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-param-reassign */
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: 'application/json'
    };
<<<<<<< HEAD
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || 'GET';
    options.header = options.header
=======

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || 'GET';
    options.headers = options.headers
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);
<<<<<<< HEAD

=======
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
<<<<<<< HEAD
              statusText: res.statusText || 'Ocurrio un error'
=======
              statusText: res.statusText || 'Ocurrió un error'
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
            })
      )
      .catch((err) => err);
  };
  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

<<<<<<< HEAD
  return { get, post, put, del };
=======
  return {
    get,
    post,
    put,
    del
  };
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
};
