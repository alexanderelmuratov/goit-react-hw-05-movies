import styled from "styled-components";

export const ReviewItem = styled.li`
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  
    &:not(:last-child) {
    margin-bottom: 30px;    
  }  
`;

export const ReviewAuthor = styled.p`
  margin-bottom: 10px;
  font-weight: 500;  
  font-size: 14px;
  color: #2a363b;
`;

export const ReviewPublished = styled.p`
  margin-bottom: 10px;
  font-weight: 400;  
  font-size: 12px;
  color: rgba(128, 128, 128);
`;

export const ReviewText = styled.p`  
  text-indent: 20px;
  font-style: italic;
  font-weight: 400;  
  font-size: 14px;
  color: #2a363b;
`;