document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-msg").textContent = "Thank you for registering! See you at the event 🚀";
    this.reset();
});