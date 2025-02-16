const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click'), function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

// Open the sign-up modal
function openModal() {
    document.getElementById("signup-modal").style.display = "block";
  }
  
  // Close the sign-up modal
  function closeModal() {
    document.getElementById("signup-modal").style.display = "none";
  }
  
  // Close the modal if the user clicks outside the modal content
  window.onclick = function (event) {
    const modal = document.getElementById("signup-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Dummy login function
  function login() {
    // Replace with your login logic
    alert("Logging in...");
  }
  
  // Dummy OAuth functions (replace with actual OAuth logic)
  function signUpWithGoogle() {
    alert("Signing up with Google...");
  }
  
  function signUpWithLinkedIn() {
    alert("Signing up with LinkedIn...");
  }
  
  function signUpWithMicrosoft() {
    alert("Signing up with Microsoft...");
  }
  