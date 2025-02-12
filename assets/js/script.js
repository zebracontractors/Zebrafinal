(function() {
  emailjs.init("ZT2gA49km0Kms_3Z6");
})();

// Track the scroll position and highlight active section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');
const footerLinks = document.querySelectorAll('.footer-section a');

// Function to highlight active link based on scroll position
function highlightActiveLink() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });

  footerLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveLink);

document.addEventListener('DOMContentLoaded', highlightActiveLink);

// Footer navigation links functionality
footerLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    footerLinks.forEach(nav => nav.classList.remove('active'));
    event.target.classList.add('active');

    // Scroll smoothly to the relevant section
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navMobileLinks = document.querySelectorAll('.nav-menu a'); // Select all navigation links

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
});

// Close the menu when a navigation link is clicked
navMobileLinks.forEach(link => {
  link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      navToggle.classList.remove('active');
  });
});

// Header navigation links functionality
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    event.target.classList.add('active');

    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


const modal = document.getElementById('modal');
const learnMoreBtn = document.getElementById('learnMore');
const closeBtn = document.querySelector('.close-button');
const mainContent = document.querySelectorAll('.page-section, .header');

function openModal() {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  mainContent.forEach(element => {
    element.classList.add('blur-content');
});
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  mainContent.forEach(element => {
    element.classList.remove('blur-content');
});
}

learnMoreBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

// slide navigation code

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.about-dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(nextSlide, 5000);

//service card flipped code
const readMoreButtons = document.querySelectorAll('.read-more');
    const backButtons = document.querySelectorAll('.back-button');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service-card');
            card.classList.add('flipped');
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service-card');
            card.classList.remove('flipped');
        });
    });

//Highlights page popup code

const serviceDetails = {
  residential: {
      title: "Residential Builds",
      description: "We specialize in designing and constructing custom homes that perfectly reflect your unique style and preferences. Our team works closely with you to ensure that every detail is tailored to fit your vision, delivering a home that is both functional and aesthetically pleasing."
  },
  subdivision: {
      title: "Low-Rise to Mid-Rise Subdivisions",
      description: "Whether you're developing a residential neighborhood or a modern community, we have the expertise to craft low-rise and mid-rise subdivisions. Our focus is on creating well-planned, modern, and functional communities that enhance the living experience while ensuring sustainability and longevity."
  },
  commercial: {
      title: "Commercial Construction",
      description: "At Zabra Contractors, we understand the importance of building durable, modern, and functional commercial infrastructure. From office buildings to retail spaces, we provide innovative construction solutions that meet the needs of businesses while adhering to industry standards and ensuring on-time delivery."
  },
  renovation: {
      title: "Renovations & Remodels",
      description: "Whether you're updating your kitchen, renovating your office, or completely remodeling a space, we bring expert craftsmanship to every project. Our renovation services are designed to maximize space, improve functionality, and create beautiful environments that reflect your personal or business needs."
  },
  garden: {
      title: "New Garden Suite Unit",
      description: "Unlock the hidden potential of your property with a custom garden suite. Our team can design and build garden suites that add valuable living space while complementing your existing property. Whether for additional rental income, extra living space for family, or a home office, we'll help you maximize your property's potential with thoughtful and innovative designs."
  }
};

function openPopup(serviceType) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  const description = document.getElementById('popup-description');
  
  title.textContent = serviceDetails[serviceType].title;
  description.textContent = serviceDetails[serviceType].description;
  
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
      closePopup();
  }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_0vyggxj", "template_xl2mx3b", {
    name: name,
    email: email,
      message: message,
  })
  .then(function(response) {
      document.getElementById('contactForm').reset();
      window.location.href = "thank-you.html";
  })
  .catch(function(error) {
      alert("Error sending message. Please try again.");
      console.error("Error:", error);
  });
});
