import {
  SET_ITEMS,
  ADD_ITEM_TO_CART,
  CHECKOUT,
} from 'actions/items';
import _ from 'lodash';

const initialState = {
  items: {},
  cart: [],
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.data.map(i => {
          let item = {}
          item[i._id] = {...i}
          return item;
        }).reduce((i, acc) => ({ ...acc, ...i }), {})
      };
    case ADD_ITEM_TO_CART:
      const items = state.items;
      const item = items[action.id];
      const newItem = {
        ...item,
        stock: {
          remaining: item.stock.remaining - action.amount,
        }
      }
      items[action.id] = newItem;

      return {
        ...state,
        items: items,
        cart: _.concat(state.cart, [{
          id: item._id,
          description: item.description,
          amount: action.amount,
          price: item.price,
        }]),
      };
    case CHECKOUT:
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
}
