import React from 'react';

export default ({ heroname }) => {
  if (heroname === 'joker') {
    throw new Error('Not an Hero');
  }
  return <h1>{heroname}</h1>;
};
