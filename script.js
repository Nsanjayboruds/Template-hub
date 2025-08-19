 function goBackOrCanvas() {
    if (document.referrer) {
      window.history.back();
    } else {
      window.location.href = 'https://code-canvas-dev.netlify.app/';
    }
  }
// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}

// Listen for toggle
themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  const mode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", mode);
});

// Search filter
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  document.querySelectorAll(".template-card").forEach(card => {
    const title = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// Category filter
function filterTemplates(category) {
  document.querySelectorAll(".template-card").forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}

// Save last visited template (optional)
function setTemplate(templateName) {
  localStorage.setItem("lastTemplate", templateName);
}









const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });

        // Template Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const templateCards = document.querySelectorAll('.template-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter templates
                const category = btn.dataset.category;
                templateCards.forEach(card => {
                    if (category === 'all' || card.dataset.category.includes(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Template Modal
        const modal = document.getElementById('templateModal');
        const modalPreview = document.getElementById('modalPreview');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalCategory = document.getElementById('modalCategory');
        const modalFeatures = document.getElementById('modalFeatures');
        const modalSize = document.getElementById('modalSize');
        const closeModal = document.querySelector('.close-modal');

        // Modal open/close
        function openModal(template) {
            // Set modal content based on clicked template
            const previewImg = template.querySelector('.template-preview img').src;
            const title = template.querySelector('.template-info h3').textContent;
            const description = template.querySelector('.template-info p').textContent;
            const category = template.querySelector('.template-tag').textContent;
            
            modalPreview.src = previewImg;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalCategory.textContent = category;
            
            // Set random features and size for demo
            const features = ['Responsive', 'Dark Mode', 'Contact Form', 'Project Gallery', 'SEO Friendly'];
            modalFeatures.textContent = features.sort(() => 0.5 - Math.random()).slice(0, 3).join(', ');
            modalSize.textContent = `${(Math.random() * 2 + 0.5).toFixed(1)} MB`;
            
            modal.classList.add('open');
        }

        function closeModalFunc() {
            modal.classList.remove('open');
        }

        // Add click event to all template cards
        templateCards.forEach(card => {
            card.addEventListener('click', () => {
                openModal(card);
            });
        });

        closeModal.addEventListener('click', closeModalFunc);

        // Close modal when clicking outside content
        modal.add







