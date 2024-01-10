console.log("connected");

const inputBox = document.getElementById("input-box");
console.log(inputBox);

const listContainer = document.getElementById("list-container");
console.log(listContainer);

const modalContainer = document.getElementById("modal-container");
console.log(modalContainer);

function addTask() {
    if (inputBox.value == "") {
        alert("Please add your text!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    } 
    
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function data() {
    listContainer.innerHTML = localStorage.getItem("data");
} data();

function showModal() {
    modalContainer.style.display = "block";
}

function closeModal() {
    modalContainer.style.display = "none";
}

function clearLocalStorage () {
    if (confirm("This will clear your toDo list and all stored data in localStorage.\nAre you sure you want to proceed?")) {
        listContainer.innerHTML = "";
        localStorage.clear();
        closeModal();
    }
}