import { Link } from "react-router-dom";
import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const StyledListItem = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: 400;  
  font-size: 18px;
  color: #2a363b;
  text-decoration: none;

  &:hover {
    color: #ff6b01;
  }
`;
