var angka = prompt("Masukan Nomor Yang ingin anda lihat: ");

switch (angka) {
  case "1":
    alert("Anda Memasukan angka 1");
    break;
  case "2":
    alert("Anda memasukan angka 2");
    break;
  case "3":
    alert("Anda memasukan angka 3");
    break;
  default:
    alert("Anda memasukan angka yang tidak terdaftar");
}

// jika hanya menggunakan prompt saja pada variable maka semua tipe data yang di masukan oleh user adalah string
// Maka nilai pada case harus di beri string juga agar bisa terbaca
// Jika anda ingin yang user masukan bukan berupa string maka tambahkan perseInt(prompt()) pada variable
