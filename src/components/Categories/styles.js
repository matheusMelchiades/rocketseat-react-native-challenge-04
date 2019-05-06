import styled from 'styled-components/native';
import styleApp from '../../config/style';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Content = styled.TouchableOpacity`
    height: 60;
    width: 100;
    justify-content: center;
    align-items: center;
    background-color: ${styleApp.primary.light};
`;

export const Title = styled.Text`
  color: ${styleApp.primary.text};
  font-size: 16;
  font-weight: bold;
`;
