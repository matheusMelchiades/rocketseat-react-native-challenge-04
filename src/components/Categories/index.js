import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Scroll, Content, Title,
} from './styles';

function Categories({ categories, changeCategory }) {
  return (
    <Container>
      <Scroll>
        {
          categories && categories.map(category => (
            <Content key={category.id} onPress={() => changeCategory(category.id)}>
              <Title>
                {category.title}
              </Title>
            </Content>
          ))
        }
      </Scroll>
    </Container>
  );
}

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  changeCategory: PropTypes.func.isRequired,
};

export default Categories;
