import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import * as Styled from './style';

function CardNumber() {
  const [value, setValue] = useState('');
  const [cardName, setCardName] = useState('noname');
  const handleChange = (event) => {
    setValue(_.get(event, 'target.value').replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim());
  };

  // It's just a small simulation of card recognition
  useEffect(() => {
    value.slice(0, 1) === '4' ? setCardName('visa')
    : value.slice(0, 1) === '5' ? setCardName('master')
    : setCardName('noname');
    if (value.length === 19) {
      document.querySelector('#card-date').focus();
    };
  }, [value])

  return (
    <>
      <Styled.CardImg src={require(`./media/${cardName}-card.png`)} />
      <Styled.CardNumber
        id='card-number'
        placeholder='Card number'
        value={value}
        onChange={handleChange}
        maxLength='19'
        autoFocus
      />
    </>
  )
};

export default CardNumber;