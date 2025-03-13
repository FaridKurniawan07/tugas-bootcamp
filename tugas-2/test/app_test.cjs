const assert = require('assert');
const { Biaya_Parkir } = require('../app');
const { error } = require('console');

describe('Calculate', () => {
  describe('Tarif Parkir Mobil',() => {
    it('Tarif Pas 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Mobil',60), 5000);
    });
    it('Tarif Kurang dari 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Mobil',40), 5000);
    });
    it('Tarif Lebih dari 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Mobil',62), 9000);
    });
  });
  describe('Tarif Parkir Motor',() => {
    it('Tarif Pas 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Motor',60), 3000);
    });
    it('Tarif Kurang dari 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Motor',40), 3000);
    });
    it('Tarif Lebih dari 60 Menit', () => {
      assert.strictEqual(Biaya_Parkir('Motor',62), 5000);
    });
  })
  describe('Tarif Parkir Truck',() => {
    it('Tarif Pas 60 Menit', () => {
      assert.throws(() => { Biaya_Parkir('truck',60) }, Error, 'Jenis Kendaan Tidak Dikena');
    });
})
})