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

// Dynamically load product videos
const products = [
  {
    img: "Industrial_UPS.png",
    title: "Industrial Inverter UPS",
    description: "90% efficiency under load. Reliable power for industrial settings.",
    video: "videos/industrial-ups-demo.mp4",
  },
  {
    img: "EV_Charger.png",
    title: "EV Charger",
    description: "Fast-charging and compatible with various models for future mobility.",
    video: "videos/ev-charger-demo.mp4",
  },
];

const productGrid = document.querySelector(".product-grid");
products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  productItem.innerHTML = `
    <img src="${product.img}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <video controls>
      <source src="${product.video}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  `;

  productGrid.appendChild(productItem);
});

// Back to top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
