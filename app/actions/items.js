export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const CHECKOUT = 'CHECKOUT';

export const setItems = items => ({
  type: SET_ITEMS,
  data: items,
});

export const fetchItems = () => dispatch => (
  fetch('http://beta.json-generator.com/api/json/get/4kiDK7gxZ')
    .then(response => response.json())
    .then(json => dispatch(setItems(json)))
);

export const addItemToCart = (id, amount) => ({
  type: ADD_ITEM_TO_CART,
  id,
  amount,
});

export const checkout = () => ({
  type: CHECKOUT
});

export const checkoutWithAlert = () => dispatch => {
  alert('Success!')
  dispatch(checkout())
}
