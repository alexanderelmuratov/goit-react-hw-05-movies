import { Container } from 'components/App/App.styled';
import { NavHeader, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavHeader>
      <Container>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Container>      
    </NavHeader>
  );
};
