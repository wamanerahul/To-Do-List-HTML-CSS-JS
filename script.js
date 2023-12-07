const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addValue() {
    if (inputBox.value === '') {
        alert("You Have To Write Something");
    } else {
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listContainer.appendChild(task);

        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7";
        task.appendChild(cross)
    }
    inputBox.value = "";
    savadata();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savadata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savadata();
    }
}, false);

function savadata() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();