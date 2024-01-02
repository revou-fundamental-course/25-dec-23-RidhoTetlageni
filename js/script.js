document.getElementById("calculateArea").addEventListener("click", function () {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  const resultArea = document.getElementById("resultArea");

  if (base > 0 && height > 0) {
    const area = 0.5 * base * height;
    resultArea.innerHTML = `<p> Hasil Luas Segitiga: ${area.toFixed(0)}</p>`;
  } else {
    resultArea.innerHTML =
      "<p>Masukkan nilai yang valid untuk alas dan tinggi.</p>";
  }
});

document
  .getElementById("calculatePerimeter")
  .addEventListener("click", function () {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);

    const resultPerimeter = document.getElementById("resultPerimeter");

    if (
      sideA > 0 &&
      sideB > 0 &&
      sideC > 0 &&
      sideA + sideB > sideC &&
      sideA + sideC > sideB &&
      sideB + sideC > sideA
    ) {
      const perimeter = sideA + sideB + sideC;
      resultPerimeter.innerHTML = `<p> Hasil Keliling Segitiga: ${perimeter.toFixed(0)}</p>`;
    } else {
      resultPerimeter.innerHTML =
        "<p>Masukkan nilai yang valid untuk panjang sisi segitiga.</p>";
    }
  });
