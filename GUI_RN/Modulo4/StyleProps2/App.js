import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: blue;
  margin-top: 50px;
  margin-left: 50px;
`;

const Estilos = () => {
  return(
    <StyledText>Texto Azul</StyledText>
  );
};

export default Estilos;
