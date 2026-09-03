/* =========================================================
   1. NAVBAR AL HACER SCROLL
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* =========================================================
   2. MENÚ MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

}


/* =========================================================
   3. ANIMACIONES REVEAL (Aparecer al entrar en viewport)
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   4. IMAGEN HERO PARALLAX AL MOVER EL MOUSE
========================================================= */

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");

if (hero && heroImage) {

    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        // Calcular posición relativa del cursor al centro del hero
        const mouseX = event.clientX - (rect.left + rect.width / 2);
        const mouseY = event.clientY - (rect.top + rect.height / 2);

        // Fuerza del movimiento de la imagen
        const movementX = (mouseX / (rect.width / 2)) * -20;
        const movementY = (mouseY / (rect.height / 2)) * -20;

        heroImage.style.transform = `scale(1.1) translate(${movementX}px, ${movementY}px)`;
    });

    hero.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1.05) translate(0px, 0px)";
    });

}


/* =========================================================
   5. SCROLL HORIZONTAL ("NUESTRO OBJETIVO")
========================================================= */

const horizontalSection = document.querySelector(".horizontal-section");
const horizontalTrack = document.getElementById("horizontalTrack");

function horizontalScroll() {

    if (!horizontalSection || !horizontalTrack) return;

    // En pantallas pequeñas (móviles) desactivamos el scroll horizontal
    if (window.innerWidth <= 800) {
        horizontalTrack.style.transform = "none";
        return;
    }

    const sectionTop = horizontalSection.offsetTop;
    const sectionHeight = horizontalSection.offsetHeight;
    const scrollPosition = window.scrollY;

    const maxScroll = sectionHeight - window.innerHeight;
    let progress = (scrollPosition - sectionTop) / maxScroll;

    // Limitar entre 0 y 1
    progress = Math.max(0, Math.min(1, progress));

    const trackWidth = horizontalTrack.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxMovement = trackWidth - viewportWidth;

    const movement = progress * maxMovement;

    horizontalTrack.style.transform = `translateX(-${movement}px)`;

}

window.addEventListener("scroll", horizontalScroll);
window.addEventListener("resize", horizontalScroll);
window.addEventListener("load", horizontalScroll);


/* =========================================================
   6. FORMULARIO DE CONTACTO
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formMessage) {
            formMessage.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
            formMessage.style.color = "#EDD8AF";
        }

        contactForm.reset();
    });

}


/* =========================================================
   7. WHATSAPP (OPACIDAD SEGÚN SCROLL)
========================================================= */

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            whatsapp.style.opacity = "1";
        } else {
            whatsapp.style.opacity = "0.85";
        }
    });

}


/* =========================================================
   8. ENTRADA ANIMADA HERO
========================================================= */

window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.classList.add("loaded");
    }
});


/* =========================================================
   9. SMOOTH SCROLL PARA ENLACES (#)
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

}
)
;