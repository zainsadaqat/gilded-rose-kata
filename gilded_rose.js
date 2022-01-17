function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const items = [];

const check_item_name = (item_name) => {
  return item_name !== 'Aged Brie' ||
    item_name !== 'Backstage passes to a TAFKAL80ETC concert' ||
    item_name !== 'Sulfuras, Hand of Ragnaros'
    ? true
    : false;
};

const check_item_quality = (item_quality) => {
  return item_quality > 0 && item_quality < 50 ? true : false;
};

const check_item_sell_in = (item_sell_in) => {
  return item_sell_in < 11 ? true : false;
};

const update_quality = () => {
  items.forEach((item) => {
    if (check_item_name(item.name) && check_item_quality(item.quality)) {
      item.quality -= 1;
    }
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      item.sell_in -= 1;
    }
    if (
      check_item_sell_in(item.sell_in) &&
      check_item_name(item.name) &&
      check_item_quality(item.quality)
    ) {
      item.quality -= 1;
    }
    if (
      check_item_quality(item.quality) &&
      check_item_sell_in(item.sell_in) &&
      item.name === 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      item.quality += 1;
    }
  });
};

module.exports = { check_item_name, check_item_quality, check_item_sell_in };
