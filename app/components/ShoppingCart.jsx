import React, { Component } from 'react';
import {
  Container,
  Panel,
  PanelFooter,
  Text,
  Space,
  Divider,
} from 'rebass';
import {
  Flex,
} from 'reflexbox';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          quantity: 10,
          price: 100,
        },
        {
          id: 2,
          quantity: 5,
          price: 100,
        },
        {
          id: 3,
          quantity: 6,
          price: 100,
        },
        {
          id: 4,
          quantity: 7,
          price: 100,
        },
      ],
    };
  }
  render() {
    return (
      <Container>
        <Panel>
          {
            this.state.items.map(p => (
              <Flex key={p.id}>
                <Text>{p.id}</Text>
                <Space auto />
                <Text>{p.price}</Text>
                <Divider />
              </Flex>
              ))
          }
          <PanelFooter>
            <Text>Total</Text>
            <Space auto />
            <Text>1000</Text>
          </PanelFooter>
        </Panel>
      </Container>
    );
  }
}
