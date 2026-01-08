
const navItems = document.querySelectorAll("ul li");
const pages = document.querySelectorAll("#home, #about, #service, #contact, #landing-page");


function showPage(pageId){
    pages.forEach((page) => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";
}


navItems.forEach(item => {
    item.addEventListener('click', () => {
        const route = item.dataset.route;
        showPage(route);
    });
});


showPage("landing-page")



/////////////////HOME PAGE/////////////////////



const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const addBtn = document.querySelector("#add-btn");
const nameMsg = document.getElementById("name-msg");
const ageMsg = document.getElementById("age-msg");
const gender = document.getElementById("gender");
const clearBtn = document.querySelector("#clear-btn");
const tableContainer = document.querySelector("#table-container");
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

let id = 0;
let table;
let tbody;

addBtn.style.backgroundColor = "green";

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle("show");
});

addBtn.addEventListener('click', () => {

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const selectedGender = gender.value;

    if (name === "" && age === ""){
        nameMsg.textContent = "Enter a valid name";
        ageMsg.textContent = "Enter a valid age";
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
        
        tableContainer.appendChild(table);

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

gender.style.backgroundColor = "gray";
clearBtn.style.backgroundColor = "red";
clearBtn.style.border = "none";

clearBtn.addEventListener('click', () => {
    table.remove();
    table = null;
})



//////////////////ABOUT PAGE//////////////////////

const loginMsg = document.getElementById("login-msg");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("btn");
const emailPrompt = document.getElementById("email-prompt");
const passwordPrompt = document.getElementById("password-prompt");

loginBtn.addEventListener('click', () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    let isValid = true;

    if(email.trim() === ""){
        emailPrompt.textContent = "Please enter a valid email";
        passwordPrompt.style.color = "red";
        loginEmail.style.borderColor = "red";
        loginEmail.style.borderWidth = "3px";
        isValid = false;
    }

    if(password.trim() === ""){
        passwordPrompt.textContent = "Please enter a valid password";
        emailPrompt.style.color = "red";
        loginPassword.style.borderColor = "red";
        loginPassword.style.borderWidth = "3px";
        isValid = false;
    } 
    
    if(isValid){
        showPage("landing-page");

    }
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    if(i < 0) index = images.length - 1;
    else if(i >= images.length) index = 0;
    else index = i;

    slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 5000);
