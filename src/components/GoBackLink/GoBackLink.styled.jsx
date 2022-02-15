import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 400;  
  font-size: 18px;
  color: #2a363b;
  text-decoration: none;

  &:hover {
    color: #ff6b01;
  }
`;
