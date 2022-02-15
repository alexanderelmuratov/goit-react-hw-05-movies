import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MutatingDots color="#00BFFF" height={80} width={80} />
    </LoaderWrapper>
  );
};
