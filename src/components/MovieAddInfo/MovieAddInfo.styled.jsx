import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const AddInfoList = styled.ul`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AddInfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }  
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 400;  
  font-size: 18px;
  color: #2a363b;
  text-decoration: none;

  &.active {
    color: #ff6b01;
  }
`;
