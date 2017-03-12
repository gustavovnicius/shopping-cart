import React from 'react';
import {
  Card,
  CardImage,
  Heading,
  Button,
  LinkBlock,
} from 'rebass';
import {
  Flex,
  Box,
} from 'reflexbox';
import {
  Link,
} from 'react-router-dom';

function Item({ _id, price }) {
  return (
    <Box m={2}>
      <Card rounded width={256}>
        <LinkBlock is={Link} to={`items/${_id}`}>
          <CardImage src="http://placehold.it/320/08e/fff" />
        </LinkBlock>
        <Flex wrap column>
          <Heading
            level={2}
            size={3}
            big
            style={{ alignSelf: 'flex-end' }}
          >
            { price }
          </Heading>
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
            big
          >
            Add to cart
          </Button>
        </Flex>
      </Card>
    </Box>
  );
}

Item.propTypes = {
  _id: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
};

export default Item;
