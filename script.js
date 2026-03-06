function showAlert() {
    alert("Product details coming soon!");
}

function changeBackground() {
    document.body.style.backgroundColor = "#ffe4e1";
}

function highlightEvents() {
    document.querySelectorAll(".events li")
        .forEach(item => item.style.color = "red");
}

function validateForm() {
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
