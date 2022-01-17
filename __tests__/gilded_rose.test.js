const {
  check_item_name,
  check_item_quality,
  check_item_sell_in,
} = require('../gilded_rose');

describe('Test cases for Gilded Rose', () => {
  test('Item does not match with mentioned items ', () => {
    expect(check_item_name('Aged Brie')).toBeTruthy();
  });

  test('Item Quality', () => {
    expect(check_item_quality(-10)).toBeFalsy();
  });

  test('Item Sell in', () => {
    expect(check_item_sell_in(20)).toBeFalsy();
  });
});
