
function Register(event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("username").value.trim();
    var number = document.getElementById("number").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "" || number === "" || password === "") {
        alert("Please fill all the fields");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("Accountnumber", number);
        localStorage.setItem("password", password);

        alert("Registered Successfully");
        window.location.href = "login.html";
    }
}
