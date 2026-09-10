document.addEventListener("DOMContentLoaded", () => {

    // Navbar
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    // Mobile Menu
    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });


        // Close menu after clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    // Active Navigation
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    // Typing Effect
    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const phrases = [
            "| Java • Web • AI",
            "| Java • MySQL • OOP",
            "| Python • OpenCV • AI",
            "| Frontend • Backend • AI"
        ];

        let phraseIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentPhrase = phrases[phraseIndex];

            if (!deleting) {

                characterIndex++;

                typingElement.textContent =
                    currentPhrase.substring(0, characterIndex);

            } else {

                characterIndex--;

                typingElement.textContent =
                    currentPhrase.substring(0, characterIndex);

            }


            let speed = deleting ? 40 : 80;


            // Pause when text is complete
            if (
                !deleting &&
                characterIndex === currentPhrase.length
            ) {

                speed = 1500;
                deleting = true;

            }


            // Move to next phrase
            if (
                deleting &&
                characterIndex === 0
            ) {

                deleting = false;
                phraseIndex++;

                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }

                speed = 400;

            }


            setTimeout(typeEffect, speed);

        }


        setTimeout(typeEffect, 1000);

    }


    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        ".section-heading, .about-text, .about-stats, " +
        ".skill-card, .project-card, .experience-card, " +
        ".education-card, .certifications-card, .contact-box"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    setTimeout(() => {
                        entry.target.classList.add("active");
                    }, 50);

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    // Project Card Animation
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    // Skill Card Animation
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.07}s`;

    });


    // Current Year
    const yearElement = document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // Preloader
    window.addEventListener("load", () => {

        const preloader =
            document.querySelector(".preloader");

        if (preloader) {

            setTimeout(() => {

                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";

            }, 800);

        }

    });


    // Reset mobile menu on resize
    window.addEventListener("resize", () => {

        if (window.innerWidth > 768 && navLinks) {

            navLinks.classList.remove("active");

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        }

    });

});