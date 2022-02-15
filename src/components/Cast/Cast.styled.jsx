import styled from "styled-components";

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 24px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 8px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ActorText = styled.p`
  margin-bottom: 5px;
  font-weight: 500;  
  font-size: 14px;
  color: #2a363b;
  text-align: center;
`;

export const CharacterText = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-style: italic;
  font-weight: 400;  
  font-size: 12px;
  color: rgba(128, 128, 128);
`;
