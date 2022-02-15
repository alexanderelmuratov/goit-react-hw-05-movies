import styled from "styled-components";

export const MovieCard = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const MovieImage = styled.img`
  width: 200px;
  margin-right: 20px;
`;

export const MovieText = styled.p`
  margin-top: 5px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }  
`;
