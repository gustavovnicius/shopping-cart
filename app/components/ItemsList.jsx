import React from 'react';
import { Container } from 'rebass';
import { Flex } from 'reflexbox';
import ConnectedItem from 'containers/ConnectedItem';

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
            <ConnectedItem key={item._id} {...item} />
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
