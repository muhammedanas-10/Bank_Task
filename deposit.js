if (localStorage.getItem("balance") === null) {
    localStorage.setItem("balance", 0); // Initialize balance if not set
}

// Function to display balance (for debugging, you can remove this)
function getBalance() {
    return parseFloat(localStorage.getItem("balance"));
}

// Get the correct password from localStorage
function getStoredPassword() {
    return localStorage.getItem("password"); // Retrieves password from localStorage
}

// Deposit function
function Deposit() {
    let amount = parseFloat(document.getElementById("deposit").value);
    let password = document.getElementById("depositPassword").value;
    let depositMessage = document.getElementById("depositMessage");
    let storedPassword = getStoredPassword();

    if (password !== storedPassword) {
        depositMessage.innerHTML = "⚠ Incorrect password";
        depositMessage.style.color = "red";
    } else if (isNaN(amount) || amount <= 0) {
        depositMessage.innerHTML = "⚠ Invalid amount";
        depositMessage.style.color = "red";
    } else {
        let currentBalance = getBalance();
        localStorage.setItem("balance", currentBalance + amount);
        depositMessage.innerHTML = "✅ Amount successfully added";
        depositMessage.style.color = "green";
    }
}

// Withdraw function
function Withdraw() {
    let amount = parseFloat(document.getElementById("withdraw").value);
    let password = document.getElementById("withdrawPassword").value;
    let withdrawMessage = document.getElementById("withdrawMessage");
    let storedPassword = getStoredPassword();

    if (password !== storedPassword) {
        withdrawMessage.innerHTML = "⚠ Incorrect password";
        withdrawMessage.style.color = "red";
    } else if (isNaN(amount) || amount <= 0) {
        withdrawMessage.innerHTML = "⚠ Invalid amount";
        withdrawMessage.style.color = "red";
    } else {
        let currentBalance = getBalance();
        if (amount > currentBalance) {
            withdrawMessage.innerHTML = "⚠ Insufficient balance";
            withdrawMessage.style.color = "red";
        } else {
            localStorage.setItem("balance", currentBalance - amount);
            withdrawMessage.innerHTML = "✅ Amount successfully withdrawn";
            withdrawMessage.style.color = "green";
        }
    }
}