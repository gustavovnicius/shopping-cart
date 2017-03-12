import React from 'react';
import { Container } from 'rebass';
import { Flex } from 'reflexbox';
import Item from 'components/Item';

function ItemsList({ items }) {
  return (
    <Container>
      <Flex
        align="center"
        justify="center"
        gutter={2}
        wrap
      >
        {
          items.map(item => (
            <Item key={item._id} {...item} />
            ))
        }
      </Flex>
    </Container>
  );
}

ItemsList.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default ItemsList;
