 // Use querySelectorAll if there are multiple buttons
var backToTopBtn = document.querySelectorAll(".backToTopBtn");

// Add an event listener to each button
backToTopBtn.forEach(function(button) {
  button.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
});

// popup

function showThankYouPopup() {
    alert("Thank you for your submission. We will contact you soon.");
}