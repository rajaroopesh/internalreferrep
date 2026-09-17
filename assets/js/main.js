document.addEventListener("DOMContentLoaded", () => {
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
 
    document
        .querySelectorAll(".navigation a")
        .forEach((link) => {
 
            const linkPage =
                link.getAttribute("href");
 
            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
});
 
