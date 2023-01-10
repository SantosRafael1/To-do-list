let taskList = []
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", () => {
    let task = document.getElementById("container").value;
    document.getElementById("container").value = "";
    taskList.push(task);

    let containerList = document.getElementById("container-list");
    containerList.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        containerList.innerHTML += `<li>${taskList[i]}</li>`;
    }

});