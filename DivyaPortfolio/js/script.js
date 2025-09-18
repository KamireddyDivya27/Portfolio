// Initialize EmailJS
(function() {
  emailjs.init("ECHktFpaQIOvGTJSg"); // Updated with your EmailJS public key
})();

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Mobile Menu Toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_3s7600j", "your_template_id", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }).then(() => {
    alert("✅ Message sent successfully!");
    document.getElementById("contactForm").reset();
  }).catch(err => {
    alert("❌ Failed to send message. Try again.");
    console.error("EmailJS Error:", err);
  });
});

document.querySelectorAll('.section').forEach(section => {
  section.classList.remove('animated');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(section);
});

// Typing animation for name
const nameText = "Hi, I'm Divya 👋";
const nameElement = document.getElementById("animatedName");
let idx = 0;
let typingForward = true;

function typeName() {
  if (typingForward) {
    if (idx < nameText.length) {
      nameElement.textContent = nameText.slice(0, idx + 1);
      idx++;
      setTimeout(typeName, 120);
    } else {
      typingForward = false;
      setTimeout(typeName, 1200); // Pause before erasing
    }
  } else {
    if (idx > 0) {
      nameElement.textContent = nameText.slice(0, idx - 1);
      idx--;
      setTimeout(typeName, 60);
    } else {
      typingForward = true;
      setTimeout(typeName, 600); // Pause before typing again
    }
  }
}

typeName();
