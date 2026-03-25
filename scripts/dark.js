document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        const id = e.currentTarget.id;

        document.body.classList.remove("dark-mode", "light-mode");

        if (id === "dark") {
            document.body.classList.add("dark-mode");
        } else if (id === "light") {
            document.body.classList.add("light-mode");
        }

    });
});