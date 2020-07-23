import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import * as Styled from './style';

function CardDate() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    setValue(_.get(event, 'target.value').replace(/[^\dA-Z]/g, '').replace(/^(\d{2})(\d{1})/, '$1 / $2'));
  };
  const isMaxLength = value.length === 7;

  useEffect(() => {
    const year = Number(new Date().getFullYear().toString().slice(2));
    const month = new Date().getMonth() + 1;
    const providedYear = Number(value.slice(5));
    const providedMonth = Number(value.slice(0, 2));
    setIsValid(true);
    if ((providedMonth < month && providedYear < year) || providedYear < year || providedMonth > 12) {
      setIsValid(false);
    };
  }, [isMaxLength, value]);

  useEffect(() => {
    if (isMaxLength && isValid) {
      document.querySelector('#card-code').focus();
    }
  }, [isValid, isMaxLength]);

  return (
    <Styled.CardDate
      id='card-date'
      isValid={isValid}
      placeholder='MM / YY'
      value={value}
      onChange={handleChange}
      maxLength='7'
    />
  )
};

export default CardDate;
