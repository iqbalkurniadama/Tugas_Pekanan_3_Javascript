
function calculateSquareRoot() {
  // Mengambil input dari elemen inputNumber
  const elementInput = document.getElementById("inputNumber");
  const x = parseInt(elementInput.value);

  // Mengambil elemen outputResult
  var outputElement = document.getElementById("outputResult");

  // Memeriksa apakah angka negatif
  if (x < 0) {
    outputElement.innerText = "Tidak bisa input bilangan negatif";
  } else if (x % 2 !== 0) { // Memeriksa apakah angka ganjil
    outputElement.innerText = "Tidak bisa input bilangan ganjil";
  } else {
    // Menghitung akar pangkat 2 dari x
    var result = Math.sqrt(x);
    outputElement.innerText = "Akar pangkat 2 dari " + x + " adalah " + result;
  }
}

