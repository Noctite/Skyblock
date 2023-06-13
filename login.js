document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "jacob" && password === "jacob") {
        window.location.href = "SnowyOwls.html";
    } else {
        alert("Invalid username or password!");
    }
});

