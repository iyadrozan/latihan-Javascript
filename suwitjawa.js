var tampilan = true;
while (tampilan) {
  // Menangkap apa yang user masukan
  var p = prompt("Pilih : gajah, semut, orang");
  // Menangkap apa yang komputer masukan
  // Menggenerate bilangan Random
  var comp = Math.random();

  if (comp < 0.32) {
    comp = "gajah";
  } else if (comp >= 0.32 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // Menentukan Rules Dari permainan
  var hasil = "";
  if (p === comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "Menang!";
    } else {
      hasil = "Kalah!";
    }
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "Kalah!" : "Menang!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah!" : "Menang!";
  } else {
    hasil = "Memasukan pilihan yang salah (semua pilihan harus dalam huruf kecil)";
  }
  // Menampilkan Hasilnya
  alert("Kamu memilih : " + p + " \nKomputer memilih : " + comp + "\nMaka Hasilnya : Kamu " + hasil);

  tampilan = confirm("Main Lagi?");
}

alert("Terima kasih sudah bermain");
