// Get elements
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Function to open modal
function openModal(imageSrc, imageAlt) {
    modal.classList.add("show");
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    document.body.style.overflow = "hidden";
}

// Function to close modal
function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}

// Function to download image
function downloadImage(imageSrc, filename) {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add click handlers for all images and buttons
document.addEventListener('DOMContentLoaded', function() {
    // Hero image click
    const heroImg = document.querySelector(".hero-image img");
    if (heroImg) {
        heroImg.onclick = function() {
            openModal(this.src, this.alt);
        }
    }
    
    // View Product button click
    const viewProductBtn = document.querySelector(".hero-btn");
    if (viewProductBtn) {
        viewProductBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const heroImg = document.querySelector(".hero-image img");
            if (heroImg) {
                openModal(heroImg.src, heroImg.alt);
            }
        });
    }
    
    // Download button click
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            const modalImg = document.getElementById("modalImg");
            if (modalImg && modalImg.src) {
                downloadImage(modalImg.src, "Lem_G_Orlee_Certificate.png");
            }
        });
    }
    
});

// Modal close handlers
closeBtn.onclick = closeModal;

modal.onclick = function(e) {
    if (e.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});


// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

