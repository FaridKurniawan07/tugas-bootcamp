const assert = require('assert');
const { Jumlah, Pengurangan, Perkalian } = require('../app');

describe('Calculate', () => {
  describe('perkalian',() => {
    it('perkalian angka kecil', () => {
      assert.strictEqual(Perkalian(4,2), 8);
    });
    it('perkalian angka kecil lagi', () => {
      assert.strictEqual(Perkalian(4,3), 12);
    });
    it('perkalian angka besar', () => {
      assert.strictEqual(Perkalian(4,1000), 4000);
    });
  });
  
});