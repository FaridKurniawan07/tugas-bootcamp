const Mobil = 'Mobil';
const Motor = 'Motor';

function Biaya_Parkir(kendaraan, durasi) {
    let tarif_awal, tarif_tambahan;
    
    if (kendaraan === Mobil) {
        tarif_awal = 5000;
        tarif_tambahan = 4000;
    } else if (kendaraan === Motor) {
        tarif_awal = 3000;
        tarif_tambahan = 2000;
    } else {
        throw new Error("Jenis kendaraan tidak valid");
    }
    
    if (durasi <= 60) {
        return tarif_awal;
    } else {
        let tambahan_waktu = Math.ceil((durasi - 60) / 60);
        return tarif_awal + tambahan_waktu * tarif_tambahan;
    }
}

module.exports = { Biaya_Parkir};
