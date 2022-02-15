import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const NavHeader = styled.header`
  background-color: #e5e5e5;
  border-bottom: 1px solid #2a363b;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
  font-size: 24px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: #ff6b01;
  }
`;
