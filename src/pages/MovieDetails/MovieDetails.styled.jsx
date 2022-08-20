import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 10px 20px 20px;
  border-bottom: 1px solid;
`;
export const ImageContainer = styled.div`
  margin-right: 35px;
  flex-direction: column;
`;

export const Button = styled.button`
  font-weight: bold;
  background: rgb(10, 90, 90);
  margin-bottom: 5px;
  padding: 7px 12px;
  border-radius: 5px;
  color: white;
  transition: all 0.5s ease 0s;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 200px;
  display: block;
  border-radius: 5px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
`;

export const DataTitle = styled.h2`
font-size: 30px;
margin-bottom: 10px;
}
`;

export const Description = styled.p`
font-size:18px;
&:not(:last-of-type){
margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  padding: 10px 20px 20px;
  border-bottom: black;
`;

export const InfoLink = styled(NavLink)`
  font-size: 18px;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
  &.active {
    background-color: rgb(10, 90, 90);
    color: white;
    border-radius: 4px;
    padding: 5px;
  }
`;
