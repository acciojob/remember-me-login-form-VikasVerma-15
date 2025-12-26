//your JS code here. If required.
const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");
    const form = document.getElementById("loginForm");

    // Check if credentials already exist on page load
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingBtn.style.display = "inline-block";
    }

    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "inline-block";
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    });

    // Handle existing user login
    existingBtn.addEventListener("click", function () {
      const savedUsername = localStorage.getItem("username");
      alert(`Logged in as ${savedUsername}`);
    });