var noAngkotBeroprasi = 9;
var noAngkot = 1;
var JumlahAngkot = 10;
while (noAngkot <= noAngkotBeroprasi) {
  console.log("Angkot Nomor " + noAngkot + " Beroprasi dengan baik");
  noAngkot++;
}

for (noAngkot = noAngkotBeroprasi + 1; noAngkot <= JumlahAngkot; noAngkot++) {
  console.log("Angkot Nomor " + noAngkot + " Belum Beroprasi");
}
