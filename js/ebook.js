document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".sidebar input");
    const books = document.querySelectorAll(".book");

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        books.forEach((book) => {
            const title = book
                .querySelector("h3")
                .textContent.toLowerCase();
            book.style.display = title.includes(query)
                ? "block"
                : "none";
        });
    });
});