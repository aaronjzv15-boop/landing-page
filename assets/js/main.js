/* ======================================
   LANDING PAGE - MAIN JS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAVBAR SCROLL EFFECT
    =============================== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });

    /* ===============================
       SMOOTH SCROLL (anchors)
    =============================== */
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.length > 1) {
                e.preventDefault();
                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    /* ===============================
       SCROLL ANIMATION (REVEAL)
    =============================== */
    const revealElements = document.querySelectorAll(
        ".card, section h2, section p"
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* ===============================
       CTA BUTTON FEEDBACK
    =============================== */
    const ctaButtons = document.querySelectorAll(".btn-primary");

    ctaButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.add("btn-loading");

            setTimeout(() => {
                btn.classList.remove("btn-loading");
            }, 1200);
        });
    });

});