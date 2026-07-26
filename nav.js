fetch("components/nav.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar-container").innerHTML = data;

        const hamburgerBtn = document.getElementById("hamburger");
        const mobileMenu = document.getElementById("mobileMenu");

        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");

            document.body.style.overflow =
                mobileMenu.classList.contains("open")
                    ? "hidden"
                    : "auto";
        });


        // ACTIVE NAV LINK
        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        const navLinks = document.querySelectorAll(
            ".nav-links a, .mobile-links a"
        );

        navLinks.forEach(link => {

            const linkPage = link.getAttribute("href");

            if (linkPage === currentPage) {
                link.classList.add("active");
            }

        });

    })
    .catch(error => console.log("Navbar load nahi hua:", error));