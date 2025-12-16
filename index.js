const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const addBtn = document.getElementById("add-btn");
const tableContainer = document.getElementById("table-container"); // a div to hold table

let idCounter = 0;
let table;   
let tbody;   

addBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name === "" || age === "") {
        alert("Please enter your name and age");
        return;
    }

    
    if (!table) {
        table = document.createElement('table');
        table.style.borderCollapse = "collapse";
        table.style.margin = "20px auto";

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
            </tr>
        `;
        table.appendChild(thead);

        tbody = document.createElement('tbody');
        table.appendChild(tbody);

        tableContainer.appendChild(table);
    }

    
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${++idCounter}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>Male</td>
    `;

    tbody.appendChild(tr);

    nameInput.value = '';
    ageInput.value = '';
});
