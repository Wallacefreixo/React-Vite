import * as Styled from './styles';
import viteLogo from '../../assets/vite.svg';
import reactLogo from '../../assets/react.svg';

const Logos = () => {
  return (
    <Styled.Logos>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </Styled.Logos>
  );
};

export default Logos;
