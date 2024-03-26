document.getElementById("Welcome").innerHTML = "Selamat Datang";
document.getElementById("Nama").innerHTML = "<b>Steven Tan</b>";
document.getElementById("Email").innerHTML = "StevenTan@gmail.com";

console.log("Harap bisa dilihat dari cosnsole");

// Variabel
let nama=" "
let email=" "
let data=[];

// Function
function tampil(){
    console.log("Button Ditekan")
    nama = document.getElementById("txtNama").value;
    console.log(nama)

    document.getElementById("nama").innerHTML = nama;

    document.getElementById("email").innerHTML = email;

    data.push(nama);
    console.log(data);
}

    
