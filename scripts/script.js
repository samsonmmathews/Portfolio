window.onload = function () {
    console.log("Portfolio Loaded Successfully!");

    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    const skillFills = document.querySelectorAll(".skill-fill");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav ul li a");

    function checkSections() {
        const triggerBottom = window.innerHeight * 0.85;

        // Fade-in sections
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) section.classList.add("visible");
        });

        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < triggerBottom) footer.classList.add("visible");

        // Animate skill bars
        const skillsSection = document.querySelector("#skills");
        const skillsTop = skillsSection.getBoundingClientRect().top;
        if (skillsTop < triggerBottom) {
            skillFills.forEach(fill => {
                if (fill.classList.contains("html")) fill.style.width = "90%";
                if (fill.classList.contains("css")) fill.style.width = "85%";
                if (fill.classList.contains("js")) fill.style.width = "80%";
                if (fill.classList.contains("python")) fill.style.width = "75%";
                if (fill.classList.contains("sql")) fill.style.width = "70%";
            });
        }

        // Active nav highlighting
        const scrollPos = window.scrollY + window.innerHeight / 2; // midpoint
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`header nav ul li a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }

    // Smooth scroll for navbar links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // offset for sticky header
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", checkSections);
    checkSections(); // trigger on load

    // Header scroll effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    });
};
