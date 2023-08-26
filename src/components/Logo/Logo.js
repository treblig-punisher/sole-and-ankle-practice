import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Logo = (props) => {
  return (
    <Link href="/">
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  display: flex;
  position: absolute;
  
  margin-top: -28px;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
