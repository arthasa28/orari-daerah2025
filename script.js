// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navigation = document.getElementById("navigation");

  if (mobileMenuToggle && navigation) {
    mobileMenuToggle.addEventListener("click", function () {
      navigation.classList.toggle("mobile-active");

      // Toggle hamburger icon
      const icon = mobileMenuToggle.querySelector("i");
      if (navigation.classList.contains("mobile-active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navigation = document.getElementById("navigation");

    if (mobileMenuToggle && navigation) {
      mobileMenuToggle.addEventListener("click", function () {
        navigation.classList.toggle("mobile-active");

        const icon = mobileMenuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      });
    }
  });
  const toggle = document.getElementById("mobileMenuToggle");
  const nav = document.getElementById("navigation");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  // News Tabs Functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navigation.classList.contains("mobile-active")) {
          navigation.classList.remove("mobile-active");
          const icon = mobileMenuToggle.querySelector("i");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  });

  // Header scroll effect
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  // Add fade-in animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  document
    .querySelectorAll(".value-card, .event-card, .news-card, .button-card")
    .forEach((el) => {
      observer.observe(el);
    });

  // Dropdown hover effects for desktop
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    let hoverTimeout;

    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(hoverTimeout);
      dropdownContent.style.opacity = "1";
      dropdownContent.style.visibility = "visible";
      dropdownContent.style.transform = "translateY(0)";
    });

    dropdown.addEventListener("mouseleave", function () {
      hoverTimeout = setTimeout(() => {
        dropdownContent.style.opacity = "0";
        dropdownContent.style.visibility = "hidden";
        dropdownContent.style.transform = "translateY(-10px)";
      }, 150);
    });
  });

  // Add loading effect to external links
  document
    .querySelectorAll('button[onclick*="window.open"]')
    .forEach((button) => {
      button.addEventListener("click", function () {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
        this.disabled = true;

        setTimeout(() => {
          this.innerHTML = originalText;
          this.disabled = false;
        }, 2000);
      });
    });

  // Add hover effects to cards
  document
    .querySelectorAll(".event-card, .news-card, .button-card, .value-card")
    .forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

  // Add ripple effect to buttons
  document
    .querySelectorAll(".btn-primary, .btn-secondary")
    .forEach((button) => {
      button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
});

// Add CSS for mobile navigation
const style = document.createElement("style");
style.textContent = `
    @media (max-width: 768px) {
        .navigation {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .navigation.mobile-active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .navigation ul {
            flex-direction: column;
            padding: 1rem 0;
        }
        
        .navigation li {
            width: 100%;
        }
        
        .navigation a {
            padding: 1rem 2rem;
            border-bottom: 1px solid #f3f4f6;
            justify-content: space-between;
        }
        
        .dropdown-content {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            background: #f9fafb;
            margin-left: 2rem;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
