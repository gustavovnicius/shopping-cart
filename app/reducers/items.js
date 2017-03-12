import {
  SET_ITEMS,
} from 'actions/items';

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
    default:
      return state;
  }
}
