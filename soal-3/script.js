// Kita akan membuat aplikasi pesan makananan sederhana

const btnTambah = document.getElementById('btn-tambah')
const namaMakanan = document.getElementById('') // tambahkan id yang sesuai
const jumlahMakanan = document.getElementById('') // tambahkan id yang sesuai
const listPesanan = document.getElementById('') // tambahkan id yang sesuai
const message = document.getElementById('c') // tambahkan id yang sesuai

btnTambah.addEventListener('click', () => {
    // Ambil nilai dari inputan nama makanan dan dari inputan jumlah makanan
    // input nama makanan dan jumlah makanan tidak boleh kosong
    // jika nama makanan kosong ubah tulisan message menjadi "Nama makanan tidak boleh kosong" berwarna merah
    // jika jumlah makanan kosong ubah tulisan message menjadi "Jumlah makanan tidak boleh kosong" berwarna merah
    // jika nama makanan dan jumlahnya sudah terisi panggil function tambahPesanan() untuk menambahkan makanan kedalam list 
    // dan ubah message menjadi "Berhasil Menambahkan Makanan" warna hijau
    // Hapus tulisan dari message setiap nilai dari nama makanan dan jumlah makanan berubah
    // Happy Coding :)

})

function tambahPesanan() {
    var pesanan = document.createElement('li')
    pesanan.textContent = `${jumlahMakanan.value} porsi ${namaMakanan.value}`
    listPesanan.appendChild(pesanan)
}

