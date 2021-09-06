function jumlahVolumeduaKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolumeduaKubus(5, 2));
alert(jumlahVolumeduaKubus(5, 2));
console.log(jumlahVolumeduaKubus(7, 5));
alert(jumlahVolumeduaKubus(7, 5));
console.log(jumlahVolumeduaKubus(9, 8));
alert(jumlahVolumeduaKubus(9, 8));
console.log(jumlahVolumeduaKubus(3, 8));
alert(jumlahVolumeduaKubus(3, 8));
