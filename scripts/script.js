window.onload = function() {
    console.log("Portfolio Loaded Successfully!");

    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    const skillFills = document.querySelectorAll(".skill-fill");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav ul li a");

    function checkSections() {
        const triggerBottom = window.innerHeight * 0.85;

        // Fade in sections
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < triggerBottom) section.classList.add("visible");
        });

        // Fade in footer
        const footerTop = footer.getBoundingClientRect().top;
        if(footerTop < triggerBottom) footer.classList.add("visible");

        // Animate skill bars
        const skillsSection = document.querySelector("#skills");
        const skillsTop = skillsSection.getBoundingClientRect().top;
        if(skillsTop < triggerBottom) {
            skillFills.forEach(fill => {
                if(fill.classList.contains("html")) fill.style.width="90%";
                if(fill.classList.contains("css")) fill.style.width="85%";
                if(fill.classList.contains("js")) fill.style.width="80%";
                if(fill.classList.contains("python")) fill.style.width="75%";
                if(fill.classList.contains("sql")) fill.style.width="70%";
            });
        }

        // Active nav highlighting
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute("id");
            if(window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`header nav ul li a[href="#${id}"]`);
                if(activeLink) activeLink.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    checkSections();

    // Header scroll effect
    window.addEventListener("scroll", function() {
        if(window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    });
};
