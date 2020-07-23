import React, { useState } from 'react';
import _ from 'lodash';
import * as Styled from './style';

function CardCode() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(_.get(event, 'target.value').replace(/[^\dA-Z]/g, ''));
  };

  return (
    <Styled.CardCode
      id='card-code'
      placeholder='CVC'
      value={value}
      onChange={handleChange}
      maxLength='3'
    />
  )
};

export default CardCode;
