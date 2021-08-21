var makanan = prompt("Masukan nama makanan yang ingin kamu cek jenis makanan tersebut : \n (cntoh: nasi, mie instan, burger, ikan laut, softdrink, daging, susu");

switch (makanan) {
  case "nasi":
    alert("Makanan / Minuman yang kamu masukan SEHAT");
    break;
  case "mie instan":
    alert("Makanan / Minuman yang kamu masukan TIDAK SEHAT");
    break;
  case "burger":
    alert("Makanan / Minuman yang kamu masukan TIDAK SEHAT");
    break;
  case "ikan laut":
    alert("Makanan / Minuman yang kamu masukan SEHAT");
    break;
  case "softdrink":
    alert("Makanan / Minuman yang kamu masukan TIDAK SEHAT");
    break;
  case "daging":
    alert("Makanan / Minuman yang kamu masukan SEHAT");
    break;
  case "susu":
    alert("Makanan / Minuman yang kamu masukan SEHAT");
    break;
  default:
    alert("Makanan yang kamu masukan belum terdaftar dalam list");
}

// break; bisa di hilangkan untuk efisien dalam menggunakan switch
