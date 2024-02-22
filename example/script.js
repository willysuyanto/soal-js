const text = 'Hello World'

// cara untuk menyeleksi elemen HTML berdasarkan id nya
const headerTag = document.getElementById('header')

// mengubah text yang awalnya kosong menjadi 'Hello World'
headerTag.textContent = text

// menjalankan sesuatu saat elemen header di klik
headerTag.onclick = () => {
  doSomethingWhenHeaderClicked()
}

// bisa juga menggunakan event listener
// headerTag.addEventListener('click', () => {
//   doSomethingWhenButtonClicked()
// })

// fungsi yang dijalankan saat elemen header di klik
function doSomethingWhenHeaderClicked() {
  headerTag.innerHTML = 'Saya sudah di klik'
}

// fungsi yang dijalankan saat tombol ubah tulisan di klik
function doSomethingWhenButtonClicked() {
  const inputTag = document.getElementById('input-text')

  // Cara lain untuk mengubah konten text
  headerTag.innerHTML = inputTag.value
}

// fungsi untuk mengubah jadi merah
function ubahJadiMerah() {
  headerTag.style.color = 'red'
}

// fungsi untuk mengubah jadi kuning
function ubahJadiKuning() {
  headerTag.style.color = 'yellow'
}

// fungsi untuk mengubah jadi hijau menggunakan RGB
function ubahJadiHijau() {
  headerTag.style.color = 'rgb(65, 109, 25)'
}

// fungsi untuk mengubah jadi biru menggunakan HEX
function ubahJadiBiru() {
  headerTag.style.color = '#0C359E'
}

function jadiKecil() {
  if (headerTag.style.fontSize) {
    headerTag.style.fontSize = `${parseInt(headerTag.style.fontSize) - 5}px`
  } else {
    headerTag.style.fontSize = '27px'
  }
}

function jadiBesar() {
  if (headerTag.style.fontSize) {
    headerTag.style.fontSize = parseInt(headerTag.style.fontSize) + 5 + 'px'
  } else {
    headerTag.style.fontSize = '37px'
  }
}

const inputTag2 = document.getElementById('input-text-2')

// fungsi yang dipanggil pada saat inputan berubah
function doSomethingWhenInputChanged() {
  headerTag.textContent = inputTag2.value
}

const inputTag3 = document.getElementById('input-text-3')
const hasil = document.getElementById('hasil')

function bandingkan() {
  if (headerTag.textContent === inputTag3.value) {
    hasil.textContent = 'Hasil: Sama'
  } else {
    hasil.textContent = 'Hasil: Tidak Sama'
  }
}

const box = document.getElementById('boxes')
const hide = document.getElementById('btn-hide')
const show = document.getElementById('btn-show')
const circle = document.getElementById('btn-circle')
const reset = document.getElementById('btn-reset')
const boxList = document.getElementById('box-list')

hide.addEventListener('click', () => {
  box.classList.remove('show')
  box.classList.add('hide')
})

show.addEventListener('click', () => {
  box.classList.add('show')
  box.classList.remove('hide')
})

circle.addEventListener('click', () => {
  box.classList.add('circle')
})

reset.addEventListener('click', () => {
  box.classList.remove('circle')
  box.classList.remove('show')
  box.classList.remove('hide')
})

function addBoxes() {
    var newBox = document.createElement('div') 
    // bisa menambahkan elemen html apapun, disini kita menambahkan elemen div

    // kita bisa menambahkan class pada elemen yang kita buat
    newBox.classList.add('box')

    // atau mengubah css nya
    newBox.style.backgroundColor = 'orange' // warna bisa menggunakan HEX atau RGB
    newBox.style.marginTop = '8px'

    // lalu kita tambahkan kedalam elemen html lain
    boxList.appendChild(newBox)
}

