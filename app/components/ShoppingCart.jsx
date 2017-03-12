import React from 'react';
import {
  Container,
  Panel,
  PanelFooter,
  Text,
  Space,
  Divider,
  CardImage,
  Card,
  Button,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';

function ShoppingCart({ cart, checkout }) {
  return (
    <Container>
      <Panel>
        {
          cart.map((p, index) => (
            <Flex key={index}>
              <Text>{p.amount}</Text>
              <Space />
              <Card rounded width={100}>
                <CardImage src="http://placehold.it/100/08e/fff" />
              </Card>
              <Space auto />
              <Text>{p.price}</Text>
              <Divider />
            </Flex>
            ))
        }
        <PanelFooter>
          <Space auto />
          <Button onClick={checkout}>
            Checkout
          </Button>
        </PanelFooter>
      </Panel>
    </Container>
  );
}

ShoppingCart.propTypes = {
  cart: React.PropTypes.array.isRequired,
  checkout: React.PropTypes.func.isRequired,
};

export default ShoppingCart;
