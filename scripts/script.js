window.onload = function() {
    console.log("Portfolio Loaded Successfully!");

    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    function checkSections() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });

        // Fade in footer when in view
        const footerTop = footer.getBoundingClientRect().top;
        if(footerTop < triggerBottom) {
            footer.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkSections);
    checkSections(); // trigger on load
};
