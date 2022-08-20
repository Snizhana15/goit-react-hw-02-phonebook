import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px 10px;
`;

export const Item = styled(Link)`
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: calc(100% / 5 - 15px);
  padding: 5px;
  color: white;
  background-color: rgb(10, 90, 90);
  font-size: 18px;
  border-radius: 2px;

  & img {
    width: 100%;
  }
`;
