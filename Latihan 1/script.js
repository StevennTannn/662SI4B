let angka1 = document.getElementById("angka1")
let angka2 = document.getElementById("angka2")
let hasil = document.getElementById("hasil")

// function tambah(){
//     angka1 = document.getElementById("angka1").values;
//     angka2 = document.getElementById("angka2").values;
//     hasil = angka1 + angka2;
//     document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
// }

// function kurang(){
//     angka1 = document.getElementById("angka1").values;
//     angka2 = document.getElementById("angka2").values;
//     hasil = angka1 - angka2;
//     document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
// }

// function kali(){
//     angka1 = document.getElementById("angka1").values;
//     angka2 = document.getElementById("angka2").values;
//     hasil = angka1 * angka2;
//     document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
// }

// function bagi(){
//     angka1 = document.getElementById("angka1").values;
//     angka2 = document.getElementById("angka2").values;
//     hasil = angka1 / angka2;
//     document.getElementById("hasil").innerHTML = "Hasil : " + hasil;
// }

function getTambah(){
    hasil.innerHTML = parseFloat(angka1.value) + parseFloat(angka2.value);
}

function getKurang(){
    hasil.innerHTML = Number(angka1.value) - Number(angka2.value);
}

function getKali(){
    hasil.innerHTML = Number(angka1.value) * Number(angka2.value);
}

function getBagi(){
    hasil.innerHTML = Number(angka1.value) / Number(angka2.value);
}