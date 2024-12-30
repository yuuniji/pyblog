// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector(".sidebar input");
//     const books = document.querySelectorAll(".book");
//     const categoryList = document.querySelector("#categoryList");
//     const categoryTitle = document.querySelector("#category-title");

//     // 默认激活的分类
//     const defaultCategory = "all";
//     let activeCategory = defaultCategory;
//     updateCategory(defaultCategory);

//     // 分类过滤功能
//     categoryList.addEventListener("click", (event) => {
//         const link = event.target;
//         if (link.tagName === "A") {
//             event.preventDefault();
//             activeCategory = link.dataset.category;

//             // 更新激活样式
//             document.querySelector(".sidebar ul li a.active").classList.remove("active");
//             link.classList.add("active");

//             // 更新分类标题和书籍显示
//             updateCategory(activeCategory);
//         }
//     });

//     function updateCategory(category) {
//         activeCategory = category;
//         categoryTitle.textContent = category === "all" ? "All Books" : category.replace("-", " ");
//         filterBooks();
//     }

//     // 搜索功能
//     searchInput.addEventListener("input", filterBooks);

//     function filterBooks() {
//         const query = searchInput.value.toLowerCase();
//         books.forEach((book) => {
//             const title = book.querySelector(".details h3").textContent.toLowerCase();
//             const matchesCategory = activeCategory === "all" || book.dataset.category === activeCategory;
//             const matchesSearch = title.includes(query);

//             // 书籍显示规则：必须同时匹配当前分类和搜索内容
//             book.style.display = matchesCategory && matchesSearch ? "block" : "none";
//         });
//     }
// });

function filterBooksByCategory(category) {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        if (category === 'all' || book.dataset.category === category) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
    document.getElementById('category-title').textContent = category === 'all' ? 'All Books' : category.charAt(0).toUpperCase() + category.slice(1) + ' Books';
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        book.style.display = title.includes(query) ? '' : 'none';
    });
}
