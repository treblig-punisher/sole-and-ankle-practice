import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <RightSideWrapper >
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </RightSideWrapper>
    </Wrapper>
  );
};
const sideMargin = "40px";
const RightSideWrapper = styled.div`
  display : flex;  
  margin-left: auto;
  gap: 30px;
  margin-right: ${sideMargin};
  
`;
const Wrapper = styled.div`
  font-size: 0.875rem;
  align-items: center;
  padding-block: 10px;
  display: flex;
  
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-left:  ${sideMargin};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
