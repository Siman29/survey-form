function value_checks() {
    var num_value = document.getElementsByClassName("number");
    if (num_value.value !== Number) {
        alert("Enter a number ...Not any text");
        num_value.style.borderColor = 'red';
    }
}