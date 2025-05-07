// 1. Event Handling
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
  });
  
  document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
  });
  
  document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
  });
  
  let timeout;
  document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("You double-clicked me!");
  });
  
  document.getElementById("secretButton").addEventListener("mousedown", function() {
    timeout = setTimeout(function() {
      alert("You held me too long!");
    }, 1000);
  });
  
  document.getElementById("secretButton").addEventListener("mouseup", function() {
    clearTimeout(timeout);
  });
  
  // 2. Interactive Elements
  document.getElementById("changeButton").addEventListener("click", function() {
    this.textContent = "You Clicked Me!";
    this.style.backgroundColor = "green";
  });
  
  let images = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;
  
  function showNextImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
  }
  
  setInterval(showNextImage, 2000); // Change image every 2 seconds
  
  function openTab(tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
  }
  
  // 3. Form Validation
  document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!document.getElementById("name").value.trim()) {
      alert("Name is required!");
      event.preventDefault();
    }
  });
  
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });
  
  document.getElementById("passwordForm").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      event.preventDefault();
    }
  });
  
  document.getElementById("realTimeInput").addEventListener("input", function() {
    document.getElementById("feedback").textContent = "You typed: " + this.value;
  });
  
  // Bonus: Animation
  document.getElementById("animatedBox").style.animation = "fadeIn 2s";
  