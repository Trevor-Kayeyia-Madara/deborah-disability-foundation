document.addEventListener("DOMContentLoaded", function() {
  const spinner = document.getElementById("spinner");

  function showSpinner() {
    spinner.style.display = "block";
  }

  function hideSpinner() {
    spinner.style.display = "none";
  }

  // Show spinner when any link is clicked
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      showSpinner();
    });
  });

  // Hide spinner when the page is loaded
  window.addEventListener("load", function() {
    hideSpinner();
  });

  // Hide spinner when navigating within the site
  window.addEventListener("pageshow", function() {
    hideSpinner();
  });
});

function showSuccessMessage() {
  document.getElementById('success-message').style.display = 'block';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var fullName = document.getElementById('full_name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  var mailtoLink = `mailto:deborahfoundation2023@gmail.com?subject=Message%20from%20${encodeURIComponent(fullName)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(fullName)}%20(${encodeURIComponent(email)})`;
  
  window.location.href = mailtoLink;

  showSuccessMessage();
});