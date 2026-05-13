import { Link } from "react-router-dom";
import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  color: #2a363b;
  text-decoration: none;
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const MoviePoster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  background-color: #ddd;
`;

export const MovieInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MovieTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: 400;  
`;

export const MovieMeta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  
  span {
    background: #e0e0e0;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Badge = styled.span`
  background-color: #ff6b01;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid ${props => props.danger ? '#ff4d4f' : '#1890ff'};
  background-color: ${props => props.active ? (props.danger ? '#ff4d4f' : '#1890ff') : 'transparent'};
  color: ${props => props.active ? 'white' : (props.danger ? '#ff4d4f' : '#1890ff')};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.danger ? '#ff4d4f' : '#1890ff'};
    color: white;
  }
`;
