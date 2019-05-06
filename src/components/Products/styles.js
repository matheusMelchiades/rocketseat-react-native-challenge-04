import styled from 'styled-components/native';
import styleApp from '../../config/style';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
  max-width: 160;
  border-width: 0.5;
  border-radius: 4;
  border-color: rgba(0,0,0,0.03);
  background-color: white;
`;

export const CardMidia = styled.Image`
  width: 150;
  height: 250;
`;

export const CardContent = styled.View`
  width: 100%;
  padding: 10px;
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
