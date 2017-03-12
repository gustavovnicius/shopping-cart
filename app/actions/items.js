export const SET_ITEMS = 'SET_ITEMS';

export const setItems = items => ({
  type: SET_ITEMS,
  data: items,
});

export const fetchItems = () => dispatch => (
  fetch('http://beta.json-generator.com/api/json/get/4kiDK7gxZ')
    .then(response => response.json())
    .then(json => dispatch(setItems(json)))
);
