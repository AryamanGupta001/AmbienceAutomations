function getUsername(email) {
  return email.split('@')[0]; // takes only the part before '@'
}

// Inject contact info with masked text
document.getElementById("email1").textContent = getUsername(CONTACT_INFO.email1);
document.getElementById("email1").href = `mailto:${CONTACT_INFO.email1}`;

document.getElementById("email2").textContent = getUsername(CONTACT_INFO.email2);
document.getElementById("email2").href = `mailto:${CONTACT_INFO.email2}`;

document.getElementById("phone").textContent = CONTACT_INFO.phone;
document.getElementById("address").textContent = CONTACT_INFO.address;
document.getElementById("map").textContent = CONTACT_INFO.mapLink;

// Form validation (same as before)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all fields.');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
