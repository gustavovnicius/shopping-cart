import { connect } from 'react-redux';
import ItemsList from 'components/ItemsList';

export const mapStateToProps = state => ({
  items: state.items.items,
});

export default connect(mapStateToProps)(ItemsList);
