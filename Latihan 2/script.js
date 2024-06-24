let data = ["Steven", "Tan"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa)

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";

let npm = document.getElementById("npm");
// tampilkan data localStorage ke dalam elemen <p id="npm">
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");


// simpan data ke localStorage
localStorage.setItem("email", "steven@gmail.com");

// data array
let hobi = ("game", "komik", "lagu");
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

// data object
let mhs = {npm: 2226240065, nama: "Steven"};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {kode_mk: "SI0001", nama_mk: "Pemograman Web"},
    {kode_mk: "SI0002", nama_mk: "PAB"},
];

// tampilkan nama_mk Pemograman Web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam localStorage
localStorage.setItem("nilai", JSON.stringify(nilai))

// tampilkan menggunakan for atau forEach
let lsNilai = localStorage=JSON.parse(localStorage.getItem("nilai"));
for (const [index, data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampilkan data mk ke dalam <ul id="listMk">
    document.getElementById("listMk").innerHTML+= `<li>${data.kode_mk} ${data.nama_mk}</li>`

}

}