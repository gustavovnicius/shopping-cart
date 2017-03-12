import { connect } from 'react-redux';
import _ from 'lodash';
import DetailedItem from 'components/DetailedItem';

export const mapStateToProps = (state, ownProps) => ({
  item: _.find(state.items.items, item => item._id === ownProps.match.params.id),
});

export default connect(mapStateToProps)(DetailedItem);
