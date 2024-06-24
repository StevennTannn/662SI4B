let inputNama = document.getElementById("nama");
let inputTestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function () {
  if (localStorage.getItem("testimoni")) {
    data = JSON.parse(localStorage.getItem("testimoni"));
    data.push({
      nama: inputNama.value,
      testimoni: inputTestimoni.value,
    });
  } else {
    data.push({
      nama: inputNama.value,
      testimoni: inputTestimoni.value,
    });
  }

  localStorage.setItem("testimoni", JSON.stringify(data));

  getData();
});

function getData() {
  list.innerHTML = "";

  if (localStorage.getItem("testimoni")) {
    data = JSON.parse(localStorage.getItem("testimoni"));
    for (const [ondex, row] of data.entries()) {
      //   list.innerHTML += `<li> ${row.nama} ${row.testimoni} </li>`;
      list.innerHTML += `
                <tr>
                <td>${row.nama}</td>
                <td>${row.testimoni}</td>
                </tr>
    `;
    }
  }
}
