/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    wrapper: {
      '--padding': `${4/16}rem`,
      '--border-radius': '8px',
    },
    valueBar: {
      '--padding-block': '8px',
    },
  },
  medium: {
    wrapper: {
      '--padding': `${0/16}rem`,
      '--border-radius': '4px',
    },
    valueBar: {
      '--padding-block': '6px',
    },
  },
  small: {
    wrapper: {
      '--padding': `${0/16}rem`,
      '--border-radius': '4px',
    },
    valueBar: {
      '--padding-block': '4px',
    },
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return (
  <Wrapper style={styles.wrapper} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <ValueBar style={styles.valueBar} value={value}/>
    <VisuallyHidden>Progress Bar</VisuallyHidden>
  </Wrapper>
  );
};

const ValueBar = styled.div`
  background-color: ${COLORS.primary};
  padding-block: var(--padding-block);
  border-radius: ${p => p.value > 99 ? '4px' : '4px 0 0 4px'};
  margin-right: ${p => (p.value < 100 && 100 - p.value)}%;
`

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`

export default ProgressBar;
