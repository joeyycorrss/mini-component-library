import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    iconStrokeWidth: 1,
    '--font-size': `${14/16}rem`,
    '--padding-block': '4px',
    '--border-block-end': '1px solid',
  },
  large: {
    iconSize: 24,
    iconStrokeWidth: 2,
    '--font-size': `${18/16}rem`,
    '--padding-block': '8px 7px',
    '--border-block-end': '2px solid',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size]
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InlineEndSpacing>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStrokeWidth}/>
      </InlineEndSpacing>
      <Input width={width} placeholder={placeholder}/>
      <FillWrapper/>
    </Wrapper>
  );
};


const InlineEndSpacing = styled.div`
  margin-inline-end: 6px;
` 
const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  -webkit-appearance: none;
  appearance: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: ${props => props.width}px;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${COLORS.black}
  }
`
const FillWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;
  ${Input}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline: auto;
    outline-offset: 4px;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: var(--font-size);
  padding-block: var(--padding-block);
  border-block-end: var(--border-block-end);
  position: relative;
`

export default IconInput;
