var JumlahAngkot = 10;
var noAngkotBeroprasi = 6;
var noAngkot = 1;

for (var noAngkot = 1; noAngkot <= JumlahAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log("Angkot Nomor " + noAngkot + " Beroprasi Dengan Baik");
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot Nomor " + noAngkot + " Sedang Lembur");
  } else {
    console.log("Angkot Nomor " + noAngkot + " Tidak Beroprasi");
  }
}
