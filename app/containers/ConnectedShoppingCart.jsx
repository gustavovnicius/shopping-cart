import { connect } from 'react-redux';
import ShoppingCart from 'components/ShoppingCart';

export const mapStateToProps = state => ({
  cart: state.items.cart,
});

export default connect(mapStateToProps)(ShoppingCart);
