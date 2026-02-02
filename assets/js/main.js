// Scroll event for header visibility
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});

// Fade in hero section on page load
window.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hi-there');
  setTimeout(() => {
    heroSection.classList.add('visible');
  }, 100);
});

// Scroll event for about sections
window.addEventListener('scroll', () => {
  const aboutSections = document.querySelectorAll('.about, .about-paragraph, .section-divider, .section-header, .still-reading, .photo-grid');
  aboutSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // Fade in when scrolling down
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
    // Fade out when scrolling back up past the section
    if (sectionBottom < 100) {
      section.classList.remove('visible');
    }
  });
});

// Scroll event for contact section
window.addEventListener('scroll', () => {
  const contact = document.querySelector('.contact-me');
  if (contact) {
    const contactTop = contact.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (contactTop < windowHeight - 100) {
      contact.classList.add('visible');
    }
  }
});

// Photo Grid Modal Functionality
const imageData = [
  { src: 'assets/images/travel1.jpg', caption: 'Torres del Paine, Chile' },
  { src: 'assets/images/travel2.jpg', caption: 'Skógafoss, Iceland' },
  { src: 'assets/images/travel3.jpg', caption: 'Lago di Garda, Italy' },
  { src: 'assets/images/travel4.jpg', caption: 'Kirkjufell, Iceland' },
  { src: 'assets/images/travel5.jpg', caption: 'São Miguel, Azores, Portugal' },
  { src: 'assets/images/travel6.jpg', caption: 'Lago Pehoe, Torres del Paine, Chile' },
  { src: 'assets/images/travel7.jpg', caption: 'Mount Fitz Roy, Argentina' },
  { src: 'assets/images/travel8.jpg', caption: 'Yosemite National Park, California, United States' },
  { src: 'assets/images/travel9.jpg', caption: 'Forrest Gump Point, Utah, United States' },
  { src: 'assets/images/travel10.jpg', caption: 'Monument Valley, Arizona, United States' },
  { src: 'assets/images/travel11.jpg', caption: 'Matterhorn, Zermatt, Switzerland' },
  { src: 'assets/images/travel12.jpg', caption: 'Torres del Paine Base, Chile' },
  { src: 'assets/images/travel13.jpg', caption: 'Horseshoe Bend, Arizona, United States' },
  { src: 'assets/images/travel14.jpg', caption: 'Monument Valley Scenic Drive, Arizona, United States' },
  { src: 'assets/images/travel15.jpg', caption: 'Lago Atitlán, Guatemala' },
  { src: 'assets/images/travel16.jpg', caption: 'Torres del Paine, Chile' },
  { src: 'assets/images/travel17.jpg', caption: 'Antelope Canyon, Arizona, United States' },
  { src: 'assets/images/travel18.jpg', caption: 'Torres del Paine, Chile (Patagonia is just beautiful;))' },
  { src: 'assets/images/travel19.jpg', caption: 'Giza Complex, Egypt' },
  { src: 'assets/images/travel20.jpg', caption: 'Menton, France' },
  { src: 'assets/images/travel21.jpg', caption: 'Grota do Inferno, Azores, Portugal' },
  { src: 'assets/images/travel22.jpg', caption: 'Rio de Janeiro, Brazil' },
  { src: 'assets/images/travel23.jpg', caption: 'Somewhere in Iceland' },
  { src: 'assets/images/travel24.jpg', caption: 'Rome, Italy' },
  { src: 'assets/images/travel25.jpg', caption: 'Poços de Caldas, Minas Gerais, Brazil (my family\'s hometown)' },
  { src: 'assets/images/travel26.jpg', caption: 'Vatnajökull Glacier, Iceland' },
  { src: 'assets/images/travel27.jpg', caption: 'Perito Moreno Glacier, Argentina' },
  { src: 'assets/images/travel28.jpg', caption: 'Foz do Iguaçu National Park, Brazil' },
  { src: 'assets/images/travel29.jpg', caption: 'Maracanã Stadium, Rio de Janeiro, Brazil' },
  { src: 'assets/images/travel30.jpg', caption: 'New York City, New York, NY' }
];

let currentImageIndex = 0;

function openModal(index) {
  currentImageIndex = index;
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  
  modal.style.display = 'block';
  modalImg.src = imageData[index].src;
  caption.innerHTML = imageData[index].caption;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  
  // Loop around if at the beginning or end
  if (currentImageIndex < 0) {
    currentImageIndex = imageData.length - 1;
  } else if (currentImageIndex >= imageData.length) {
    currentImageIndex = 0;
  }
  
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  
  modalImg.src = imageData[currentImageIndex].src;
  caption.innerHTML = imageData[currentImageIndex].caption;
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target == modal) {
    closeModal();
  }
}

// Keyboard navigation for modal
document.addEventListener('keydown', function(event) {
  const modal = document.getElementById('imageModal');
  if (modal.style.display === 'block') {
    if (event.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeImage(1);
    } else if (event.key === 'Escape') {
      closeModal();
    }
  }
});