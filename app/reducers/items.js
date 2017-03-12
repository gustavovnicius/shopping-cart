import {
  SET_ITEMS,
  ADD_ITEM_TO_CART,
} from 'actions/items';
import _ from 'lodash';

const initialState = {
  items: [],
  cart: [],
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.data,
      };
    case ADD_ITEM_TO_CART: {
      const item = _.find(state.items, i => i._id === action.id);
      item.stock = {
        remaining: item.stock.remaining - action.amount,
      };

      return {
        ...state,
        cart: _.concat(state.cart, [{
          id: item._id,
          description: item.description,
          amount: action.amount,
          price: item.price,
        }]),
      };
    }
    default:
      return state;
  }
}
