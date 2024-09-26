function Login(event) {
    event.preventDefault(); // Prevent the default form submission

    var loginNumber = document.getElementById("loginNumber").value.trim();
    var loginPassword = document.getElementById("loginPassword").value.trim();
    var storedNumber = localStorage.getItem("Accountnumber");
    var storedPassword = localStorage.getItem("password");

    if (loginNumber === "" || loginPassword === "") {
        alert("Please enter your account number and password");
    } else if (loginNumber === storedNumber && loginPassword === storedPassword) {
        alert("Login Successful");
        // Redirect to another page if needed
        window.location.href = "deposit.html";
    } else {
        alert("Invalid account number or password");
    }
}
