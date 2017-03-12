import { connect } from 'react-redux';
import Item from 'components/Item';
import { addItemToCart } from 'actions/items';

export const mapStateToProps = () => ({});
export const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () => dispatch(addItemToCart(ownProps._id, 1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
