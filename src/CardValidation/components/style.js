import styled, { css } from "styled-components";

const Input = styled.input`
  color: black;
  font-size: 15px;
  border: none;
  outline-width: 0;
  outline: none;
`;

export const CardDate = styled(Input)`
  max-width: 65px;

  ${props => !props.isValid && props.value.length === 7 && css`
    color: red;
  `}
`;

export const CardCode = styled(Input)`
  max-width: 65px;
`;

export const CardNumber = styled(Input)`
  max-width: 180px;
`;

export const CardImg = styled.img`
  max-height: 30px;
  max-width: 30px;
  vertical-align: middle;
`;

export const CardValidation = styled.div`
`;
