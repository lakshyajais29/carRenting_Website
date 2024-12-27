// Event Listener for Search Button
document.getElementById("search-btn").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const cars = Array.from(document.getElementById("cars").selectedOptions).map(opt => opt.value);

    if (!city || cars.length === 0) {
        alert("Please select a location and at least one car.");
    } else {
        alert(`Searching for cars: ${cars.join(", ")} in ${city}.`);
    }
});

// Event Listener for Login Button
document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password.");
    } else {
        window.location.href = "booking.html";
    }
});
