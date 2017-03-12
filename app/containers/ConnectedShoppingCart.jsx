import { connect } from 'react-redux';
import { checkoutWithAlert } from 'actions/items';
import ShoppingCart from 'components/ShoppingCart';

export const mapStateToProps = state => ({
  cart: state.items.cart,
});

export const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkoutWithAlert())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
