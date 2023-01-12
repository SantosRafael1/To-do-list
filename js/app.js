document.querySelector('form').addEventListener("submit", function(e) {
    e.preventDefault();

    let task = document.querySelector("input[type='text']").value;

    let createLi = document.createElement("li");
    createLi.innerText = task;

    createLi.addEventListener("click", function() {
        this.remove();
    });

    document.querySelector("ul").appendChild(createLi);
    document.querySelector("input[type='text']").value = "";
});

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = "Are you sure you want to leave this page?";
});