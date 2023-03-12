// Smooth Scroll for Nav Links
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });
  // Phone Number Link
const phoneNumberLink = document.getElementById('phone-link');
const phoneNumber = '8918167484';

// Format Phone Number
const formattedPhoneNumber = `tel:+91${phoneNumber}`;

// Set Phone Number Link Text and Href
phoneNumberLink.textContent = phoneNumber;
phoneNumberLink.setAttribute('href', formattedPhoneNumber);
  
  // Toggle Mobile Navigation
  const toggleNav = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
  }
  
  document.querySelector('.menu-icon').addEventListener('click', toggleNav);
  
  // Change Hero Image on Button Click
  const heroImage = document.querySelector('#hero');
  
  document.querySelector('.button').addEventListener('click', () => {
    heroImage.style.backgroundImage = "url('hero-image-2.jpg')";
  });
  
  // Accordion for Services Section
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
  
  // Form Submission
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
    console.log(formData);
    // Here you can add your own code to send the form data to your backend or API
  });