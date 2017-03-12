import { connect } from 'react-redux';
import _ from 'lodash';
import { addItemToCart } from 'actions/items';
import DetailedItem from 'components/DetailedItem';

export const mapStateToProps = (state, ownProps) => ({
  item: state.items.items[ownProps.match.params.id],
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: () => dispatch(addItemToCart(ownProps.match.params.id, 1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedItem);
