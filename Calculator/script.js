let currentInput = '';  // Menyimpan input sementara
let previousInput = ''; // Menyimpan input sebelumnya (untuk operasi)
let currentOperation = null; // Menyimpan operasi yang dipilih

// Fungsi untuk menambahkan angka ke tampilan
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Fungsi untuk memperbarui tampilan kalkulator
function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Fungsi untuk mengatur operasi (tambah, kurang, kali, bagi)
function setOperation(operation) {
  if (currentInput === '') return;  // Menghindari operasi jika input kosong
  if (previousInput !== '') {
    calculateResult();  // Jika ada operasi sebelumnya, hitung hasilnya
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';  // Reset input setelah memilih operasi
}

// Fungsi untuk menghitung hasil operasi
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;  // Menghindari kesalahan jika input bukan angka

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';  // Menghindari pembagian dengan nol
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();  // Set input ke hasil perhitungan
  currentOperation = null;  // Reset operasi setelah hasil dihitung
  previousInput = '';  // Reset input sebelumnya
  updateDisplay();
}

// Fungsi untuk menghapus tampilan
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateDisplay();
}
