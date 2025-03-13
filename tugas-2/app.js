function Jumlah(a,b) {
    return a + b;
}

function Pengurangan(a,b){
    return a - b;
}

function Perkalian(a,b){
    return a*b
}
module.exports = { Jumlah, Pengurangan, Perkalian };

console.log(Jumlah(2,4))