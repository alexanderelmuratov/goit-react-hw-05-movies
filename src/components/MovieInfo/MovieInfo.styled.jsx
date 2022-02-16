import styled from "styled-components";

export const MovieCard = styled.div`  
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 200px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const MovieText = styled.p`
  margin-top: 5px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }  
`;
