import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue)
  return (
    <>
      {label && <Label>{label}</Label>}
      <ValueWrapper>
        {displayedValue}
        <span><Icon id="chevron-down"/></span>
        <ChildrenWrapper value={value} onChange={onChange}>
          {children}
        </ChildrenWrapper>
      </ValueWrapper>
    </>
  );
};

const Label = styled.label`
  display: block;
  padding: 6px;
  font-size: ${15/16}rem;
  &::after {
    content: ':';
    padding-inline-start: 2px;
  }
`

const ChildrenWrapper = styled.select`
  opacity: 0;
  -webkit-appearance: none;
  appearance: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  position: absolute;
  left: 0;
  width: 100%;
`

const ValueWrapper = styled.div`
  position: relative;
  width: fit-content;
  overflow: hidden;
  font-size: ${16/16}rem;
  font-weight: 400;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  display: flex;
  align-items: center;

  & > span {
    margin-inline-start: 18px;
  }

  &:focus {
    outline: auto;
  }

  &:hover {
    color: ${COLORS.black};
  }
`


export default Select;
