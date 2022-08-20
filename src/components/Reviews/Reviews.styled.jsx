import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px;
`;

export const List = styled.ul`
  font-size: 16px;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

export const Data = styled.p`
  font-size: 16px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  &:first-of-type {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  &:nth-of-type(2) {
    font-size: 16px;
  }
`;
