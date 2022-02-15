import { Outlet, useLocation } from 'react-router-dom';
import { TiArrowDown } from 'react-icons/ti';
import { AddInfoList, AddInfoItem, StyledNavLink } from './MovieAddInfo.styled';

export const MovieAddInfo = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Additional information</h2>
      <AddInfoList>
        <AddInfoItem>
          <StyledNavLink to="cast" state={{ from: location?.state?.from }}>
            <TiArrowDown style={{ width: 30, height: 30 }} />
            Cast
          </StyledNavLink>
        </AddInfoItem>
        <AddInfoItem>
          <StyledNavLink to="reviews" state={{ from: location?.state?.from }}>
            <TiArrowDown style={{ width: 30, height: 30 }} />
            Reviews
          </StyledNavLink>
        </AddInfoItem>
      </AddInfoList>
      <Outlet />
    </div>
  );
};
