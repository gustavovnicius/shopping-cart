import React from 'react';
import { mapDispatchToProps } from 'containers/App';

describe('App', () => {
  describe('mapDispatchToProps', () => {
    it('return the mapped dispatch', () => {

      expect(mapDispatchToProps()).toEqual({
        fetchItems: expect.any(Function)
      });
    });
  });
});
