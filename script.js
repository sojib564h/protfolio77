// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 15, 0.95)";
    } else {
        navbar.style.background = "rgba(10, 10, 15, 0.8)";
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        mobileMenuToggle.classList.toggle("active");

        // Prevent body scroll when menu is open
        if (navLinksContainer.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    // Close menu when clicking on a link
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
            mobileMenuToggle.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!mobileMenuToggle.contains(e.target) &&
            !navLinksContainer.contains(e.target)
        ) {
            navLinksContainer.classList.remove("active");
            mobileMenuToggle.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message
        alert("Thank you for your message! I will get back to you soon.");

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        console.log("Form data:", data);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe all cards and sections
document
    .querySelectorAll(".service-card, .portfolio-item, .testimonial-card")
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

// Skill bar animation
const skillBars = document.querySelectorAll(".skill-progress");
const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = "0";
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, {
        threshold: 0.5
    },
);

skillBars.forEach((bar) => {
    skillObserver.observe(bar);
});

// CTA button click
document.querySelectorAll(".cta-button, .btn-primary").forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!button.getAttribute("href")) {
            e.preventDefault();
            document.querySelector("#contact").scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

// Add parallax effect to hero orbs
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const orbs = document.querySelectorAll(".gradient-orb");
    orbs.forEach((orb, index) => {
        const speed = 0.5 + index * 0.2;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Console message
console.log(
    "%c🚀 Digital Marketing Portfolio",
    "color: #6366f1; font-size: 20px; font-weight: bold;",
);
console.log(
    "%cLooking for a digital marketing expert? Let's connect!",
    "color: #ec4899; font-size: 14px;",
);