import styled from 'styled-components/native';
import styleApp from '../../config/style';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 7%;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 5%;
  border-width: 0.5;
  border-radius: 4;
  border-color: rgba(0,0,0,0.03);
  background-color: white;
`;

export const CardMidia = styled.Image`
  width: 250;
  height: 350;
`;

export const ButtonAddCart = styled.TouchableOpacity`
  background-color: ${styleApp.secondary.light};
  opacity: 1;
`;

export const TitleButton = styled.Text`
  color: #FFF;
`;

export const CardContent = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Name = styled.Text`
  color: ${styleApp.text.dark};
`;

export const Brand = styled.Text`
  color: ${styleApp.secondary.textLight};
`;

export const Price = styled.Text`
  color: ${styleApp.secondary.dark}
`;
