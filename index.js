const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const addBtn = document.querySelector("#add-btn");
const nameMsg = document.getElementById("name-msg");
const ageMsg = document.getElementById("age-msg");
const gender = document.getElementById("gender");


let id = 0;
let table;
let tbody;


addBtn.style.backgroundColor = "green";

addBtn.addEventListener('click', () => {

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const selectedGender = gender.value;

    if (name === "" && age === ""){
        nameMsg.textContent = "Enter a valid name";
        ageMsg.textContent = "Enter a valid name";
        ageInput.style.borderColor = "red";
        nameInput.style.borderColor = "red";
        return;
    
    
    }else if(name === ""){
        nameMsg.textContent = "Enter a valid name";
        nameInput.style.borderColor = "red";
        return;
       
    }
    else if(age === ""){
        ageMsg.textContent = "Enter a valid age";
        ageInput.style.borderColor = "red";
        return;
    }
    else{
        ageMsg.textContent = "";
        nameMsg.textContent = "";
        ageInput.style.borderColor = "green";
        nameInput.style.borderColor = "green";
    }

    if(ageInput.value.length >= 6){
       alert("Please enter a valid age");
       ageInput.style.borderColor = "red";
       nameInput.style.borderColor = "red";
        return ;
    }
    else{
        ageInput.style.borderColor = "green";
        nameInput.style.borderColor = "green";
    }


    if(!table){
        table = document.createElement("table");
        table.style.borderCollapse = "collapse";

        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>GENDER</th>
            </tr>
        `
       tbody = document.createElement('tbody');
        table.appendChild(thead);
        
        document.body.appendChild(table);

    }

     const tr = document.createElement("tr");

        
        tr.innerHTML = `
        
                <td>${++id}</td>
                <td>${name}</td>
                <td>${age}</td>
                <td>${selectedGender}</td>
            

        `

        tbody.appendChild(tr);
        table.appendChild(tbody);

        nameInput.value = "";
        ageInput.value = "";
})