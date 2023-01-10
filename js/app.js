let taskList = []

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valueEntered = document.getElementById("input-field");
    let task = valueEntered.value;
    taskList.push(task);
    document.getElementById("input-field").value = "";

    renderTodos();
});

function renderTodos() {
    let containerList = document.getElementById("container-list");
    containerList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        containerList.innerHTML += `<li class='items'>${taskList[i]}</li>`;
    }
}