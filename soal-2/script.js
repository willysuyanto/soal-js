function generateRandom6DigitNumber() {
  return Math.floor(Math.random() * 900000) + 100000
}

const kodeOTP = document.getElementById('kode-otp')
const percobaan = document.getElementById('kesempatan')
kodeOTP.textContent = generateRandom6DigitNumber()

var kesempatan = 3
percobaan.textContent = kesempatan

function checkOTP() {
  // Tambahkan code untuk mengecek apakah Kode OTP yang dimasukkan sama dengan kode OTP yang ditampilkan
  // Jika kode otp sama dengan kode yang diinput, maka ubah tulisan hasil menjadi "Benar" dengan warna hijau
  // Jika kode otp tidak sama kode dengan yang diinput, ubah tulisan hasil menjadi "Salah" dengan warna kuning
  // Setiap kali salah melakukan input kode OTP, maka kesempatan akan berkurang 1
  // Setiap jika kesempatan sudah 0 ubah tulisan hasil menjadi "Salah, Silahkan coba kembali nanti" dengan warna merah
}
