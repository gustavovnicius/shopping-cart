import * as itemsActions from 'actions/items';

describe('Item actions', () => {
  describe('setItems', () => {
    it('should return a setItems action', () => {
      const expected = {
        type: itemsActions.SET_ITEMS,
        data: []
      }

      expect(itemsActions.setItems([])).toEqual(expected);
    });
  });

  describe('addItemToCart', () => {
    it('should return a addItemToCart action', () => {
      const expected = {
        type: itemsActions.ADD_ITEM_TO_CART,
        id: 1,
        amount: 10,
      }

      expect(itemsActions.addItemToCart(1, 10)).toEqual(expected);
    });
  });
});
