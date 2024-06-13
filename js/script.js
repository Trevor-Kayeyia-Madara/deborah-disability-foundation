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