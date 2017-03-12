import React, {
  PropTypes,
} from 'react';
import {
  Card,
  CardImage,
  Text,
  Container,
  Button,
  Divider,
  ButtonCircle,
  Input,
  Heading,
} from 'rebass';
import {
  Flex,
  Box,
} from 'reflexbox';

function DetailedItem({ item }) {
  return (
    <Container>
      <Flex
        align="center"
        justify="center"
        gutter={2}
        wrap
      >
        <Box px={2} py={2}>
          <Card rounded width={400}>
            <CardImage src="http://placehold.it/300/08e/fff" />
            <Flex wrap column>
              <Text>
                {item.description}
              </Text>
              <Divider />
              <Text>
                Color: {item.color}
              </Text>
              <Text>
                Stock: {item.stock.remaining}
              </Text>
            </Flex>
          </Card>
        </Box>
        <Box px={2} py={2} style={{ alignSelf: 'flex-start' }}>
          <Box px={2} py={2}>
            <Heading big>
              {item.price}
            </Heading>
            <Flex align="center" justify="center">
              <ButtonCircle>-</ButtonCircle>
              <Input
                label=""
                name="input_example"
                placeholder=""
                rounded
                type="number"
                style={{ margin: '0px' }}
              />
              <ButtonCircle>+</ButtonCircle>
            </Flex>
          </Box>
          <Button big style={{ width: '300px' }}>
            Add to cart
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

DetailedItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    stock: PropTypes.shape({
      remaining: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailedItem;
