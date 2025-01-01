const vocabulary = [
    {
        word: "Intricate",
        category: "adjective",
        meaning: "Very complicated or detailed.",
        example: "The engineer explained the intricate details of the machine.",
    },
    {
        word: "Persevere",
        category: "verb",
        meaning: "Continue in a course of action even in the face of difficulty.",
        example: "She decided to persevere with her studies despite challenges.",
    },
    {
        word: "Harmony",
        category: "noun",
        meaning: "A pleasing combination of elements in a whole.",
        example: "The song achieved perfect harmony among instruments.",
    },
    {
        word: "Vivid",
        category: "adjective",
        meaning: "Producing strong, clear images in the mind.",
        example: "She described the scene in vivid detail.",
    },
    {
        word: "Intricate",
        category: "adjective",
        meaning: "Very complicated or detailed.",
        example: "The engineer explained the intricate details of the machine.",
    },
    {
        word: "Persevere",
        category: "verb",
        meaning: "Continue in a course of action even in the face of difficulty.",
        example: "She decided to persevere with her studies despite challenges.",
    },
    {
        word: "Harmony",
        category: "noun",
        meaning: "A pleasing combination of elements in a whole.",
        example: "The song achieved perfect harmony among instruments.",
    },
    {
        word: "Vivid",
        category: "adjective",
        meaning: "Producing strong, clear images in the mind.",
        example: "She described the scene in vivid detail.",
    },
    {
        word: "Intricate",
        category: "adjective",
        meaning: "Very complicated or detailed.",
        example: "The engineer explained the intricate details of the machine.",
    },
    {
        word: "Persevere",
        category: "verb",
        meaning: "Continue in a course of action even in the face of difficulty.",
        example: "She decided to persevere with her studies despite challenges.",
    },
    {
        word: "Harmony",
        category: "noun",
        meaning: "A pleasing combination of elements in a whole.",
        example: "The song achieved perfect harmony among instruments.",
    },
    {
        word: "Vivid",
        category: "adjective",
        meaning: "Producing strong, clear images in the mind.",
        example: "She described the scene in vivid detail.",
    },
];

function renderWords(category = "all", searchQuery = "") {
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = "";

    let filteredWords = category === "all"
        ? vocabulary
        : vocabulary.filter(word => word.category === category);

    // 根据搜索框内容进行筛选
    if (searchQuery) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        filteredWords = filteredWords.filter(word =>
            word.word.toLowerCase().includes(lowerCaseQuery) ||
            word.meaning.toLowerCase().includes(lowerCaseQuery) ||
            word.example.toLowerCase().includes(lowerCaseQuery)
        );
    }

    if (filteredWords.length === 0) {
        wordList.innerHTML = "<p>No matching words found.</p>";
        return;
    }

    filteredWords.forEach(({ word, meaning, example, category }) => {
        const card = document.createElement("div");
        card.classList.add("word-card");
        card.innerHTML = `
            <h3>${word}</h3>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Meaning:</strong> ${meaning}</p>
            <p><strong>Example:</strong> ${example}</p>
        `;
        wordList.appendChild(card);
    });
}

function setupCategoryClick() {
    const categories = document.querySelectorAll("#categories li");
    categories.forEach(category => {
        category.onclick = () => {
            document.querySelector("#categories li.active").classList.remove("active");
            category.classList.add("active");
            const selectedCategory = category.getAttribute("data-category");
            const searchQuery = document.getElementById("search-input").value; // 获取当前搜索内容
            renderWords(selectedCategory, searchQuery);
        };
    });
}

function setupSearch() {
    const searchInput = document.getElementById("search-input");
    searchInput.oninput = () => {
        const activeCategory = document.querySelector("#categories li.active").getAttribute("data-category");
        const searchQuery = searchInput.value;
        renderWords(activeCategory, searchQuery);
    };
}

function initializeVocabularyApp() {
    renderWords();
    setupCategoryClick();
    setupSearch();
}

// 调用入口
initializeVocabularyApp();