import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from 'actions/items';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import {
  Toolbar,
  NavItem,
  Space,
} from 'rebass';
import ConnectedItemsList from 'containers/ConnectedItemsList';
import ConnectedDetailedItem from 'containers/ConnectedDetailedItem';
import ConnectedShoppingCart from 'containers/ConnectedShoppingCart';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <Router>
        <div>
          <Toolbar>
            <NavItem is={Link} to="/">
              Items
            </NavItem>
            <Space auto x={1} />
            <NavItem is={Link} to="/cart">
              ShoppingCart
            </NavItem>
          </Toolbar>
          <Route exact path="/" component={ConnectedItemsList} />
          <Route exact path="/items/:id" component={ConnectedDetailedItem} />
          <Route exact path="/cart" component={ConnectedShoppingCart} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  fetchItems: React.PropTypes.func.isRequired,
};

export const mapStateToProps = () => ({});
export const mapDispatchToProps = dispatch => (
  {
    fetchItems: () => dispatch(fetchItems()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
