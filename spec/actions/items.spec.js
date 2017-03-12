import * as itemsActions from 'actions/items';

describe('Item actions', () => {
  describe('setItems', () => {
    it('should return a setItems action', () => {
      const expected = {
        type: itemsActions.SET_ITEMS,
        data: []
      }

      expect(itemsActions.setItems([])).toEqual(expected);
    })
  })
});
