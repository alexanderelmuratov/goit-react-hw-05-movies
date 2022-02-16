import { useLocation } from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti';
import { StyledLink } from "./GoBackLink.styled";

export const GoBackLink = () => {
  const location = useLocation();
  return (
    <StyledLink to={location?.state?.from ?? '/'}>
      <TiArrowBack style={{ width: 30, height: 30, marginRight: '5px' }} />
      Go back
    </StyledLink>
  );
};
