import styled from 'styled-components';

export const SearchBox = styled.form`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  margin: 0;
  padding: 5px;
  min-width: 300px;
  height: 40px;
  outline: none;
  height: 30px;
  border: 0;
  background-color: rgb(10, 90, 90);
  border-radius: 5px;
  color: white;
`;

export const SearchBtn = styled.button`
  width: 48px;
  height: 48px;
  background-size: 40%;
  background-position: center;
  margin-right: 5px;
  border-radius: 50%;
  outline: none;
`;
