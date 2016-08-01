import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
const mount = document.querySelector('#mount');

function getHash() {
  const raw = window.location.hash;

  return raw.charAt(0) === '#'
    ? raw.substr(1)
    : raw || 'landing';
}

ReactDom.render(<App cmp={getHash()}/>, mount);

window.addEventListener('hashchange', () => {
  ReactDom.render(<App cmp={getHash()}/>, mount);
});
