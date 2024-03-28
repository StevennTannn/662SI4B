let data = ["Steven", "Tan"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa)

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";

    
}