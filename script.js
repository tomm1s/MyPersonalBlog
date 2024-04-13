function complete(){
    alert("Ви увійшли успішно!");
}

function changeColorButton() {
    document.body.style.backgroundColor = 'lightblue';
}
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nameInput = document.getElementById("POST-name");
        var name = nameInput.value;
        
        var outputDiv = document.getElementById("output");
        outputDiv.textContent = "Name: " + name;
    });
});

