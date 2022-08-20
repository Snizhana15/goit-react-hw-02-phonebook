import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 30px;
`;

export const NavContainer = styled.header`
  padding: 20px;
  border: 1px solid black;
  text-align: center;
  background-color: rgb(10, 90, 90);
`;

export const NavLinkItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  &:first-of-type {
    margin-right: 30px;
  }
  &.active {
    color: white;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px;
  }
`;
