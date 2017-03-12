import items from 'reducers/items';

describe('items reducer', () => {
  it('define an empty items and cart list by default', () => {
    const dummyAction = { type: 'DUMMY' }
    const expected = {
      items: [],
      cart: []
    }

    expect(items(undefined, dummyAction)).toEqual(expected)
  })

  it('accepts a SET_ITEMS action', () => {
    const item = {
      description: "Proident adipisicing excepteur non ad enim deserunt.",
      color: "yellow",
      image: "http://placehold.it/100x100",
      price: "$1,003.45",
      stock: {
        remaining: 23
      },
      _id: "571762bfec3aac46241599e0"
    };
    const setItemsAction = {
      type: 'SET_ITEMS',
      data: [item]
    }
    const expected = {
      items: [item],
      cart: []
    }

    expect(items(undefined, setItemsAction)).toEqual(expected)
  })
});
