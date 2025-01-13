const vocabulary = [
    {
        "word": "hurricane",
        "category": "noun",
        "meaning": "飓风",
        "example": "The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba."
    },
    {
        "word": "was said to be",
        "category": "verb phrase",
        "meaning": "被认为是（被动语态）",
        "example": "The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba."
    },
    {
        "word": "one of the worst",
        "category": "adjective phrase",
        "meaning": "最严重的之一，表强调",
        "example": "The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba."
    },
    {
        "word": "tropical cyclones",
        "category": "noun",
        "meaning": "热带气旋，科学术语，hurricane 的同义词",
        "example": "The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba."
    },
    {
        "word": "has ever hit Cuba",
        "category": "verb phrase",
        "meaning": "现在完成时，说明事件影响至今仍被提及",
        "example": "The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba."
    },
    {
        "word": "formed",
        "category": "verb",
        "meaning": "形成",
        "example": "The storm formed in the southern Caribbean Sea on October 9, 1910."
    },
    {
        "word": "southern Caribbean Sea",
        "category": "noun phrase",
        "meaning": "地理位置，“加勒比海南部”",
        "example": "The storm formed in the southern Caribbean Sea on October 9, 1910."
    },
    {
        "word": "on October 9, 1910",
        "category": "time expression",
        "meaning": "具体时间，表示事件起点",
        "example": "The storm formed in the southern Caribbean Sea on October 9, 1910."
    },
    {
        "word": "grew stronger",
        "category": "verb phrase",
        "meaning": "变得更强（比较级，表程度变化）",
        "example": "It grew stronger as it moved northwest."
    },
    {
        "word": "as it moved northwest",
        "category": "clause",
        "meaning": "从句，表时间和过程，说明飓风路径和强度变化",
        "example": "It grew stronger as it moved northwest."
    },
    {
        "word": "made landfall",
        "category": "verb phrase",
        "meaning": "动词短语，意为“登陆”",
        "example": "It then made landfall on the western end of Cuba."
    },
    {
        "word": "western end of Cuba",
        "category": "noun phrase",
        "meaning": "古巴的西端，表地理位置",
        "example": "It then made landfall on the western end of Cuba."
    },
    {
        "word": "made a loop",
        "category": "verb phrase",
        "meaning": "动词短语，“形成一个环状路径”，强调飓风轨迹的特殊性",
        "example": "The storm made a loop over open water, and then began moving towards the United States."
    },
    {
        "word": "open water",
        "category": "noun phrase",
        "meaning": "意为“开阔水域”，指海洋区域",
        "example": "The storm made a loop over open water, and then began moving towards the United States."
    },
    {
        "word": "began moving",
        "category": "verb phrase",
        "meaning": "开始移动，表动作的开始",
        "example": "The storm made a loop over open water, and then began moving towards the United States."
    },
    {
        "word": "crossing Florida",
        "category": "present participle phrase",
        "meaning": "现在分词短语，作时间状语，表示“穿过佛罗里达州”后",
        "example": "After crossing Florida, the storm moved near the rest of the southeastern United States and passed out to sea."
    },
    {
        "word": "passed out to sea",
        "category": "verb phrase",
        "meaning": "动词短语，指“进入大海”",
        "example": "After crossing Florida, the storm moved near the rest of the southeastern United States and passed out to sea."
    },
    {
        "word": "Because of",
        "category": "preposition",
        "meaning": "表原因",
        "example": "Because of the storm's loop, some reports said it was actually two hurricanes."
    },
    {
        "word": "the storm's loop",
        "category": "noun phrase",
        "meaning": "飓风的环形路径，表特征",
        "example": "Because of the storm's loop, some reports said it was actually two hurricanes."
    },
    {
        "word": "actually",
        "category": "adverb",
        "meaning": "副词，“实际上”，表强调",
        "example": "Because of the storm's loop, some reports said it was actually two hurricanes."
    },
    {
        "word": "in the island's history",
        "category": "prepositional phrase",
        "meaning": "表范围，指古巴历史中",
        "example": "In Cuba, the storm was one of the worst disasters in the island's history."
    },
    {
        "word": "bad damage",
        "category": "noun phrase",
        "meaning": "严重破坏，表影响程度",
        "example": "There was bad damage and thousands of people lost their homes."
    },
    {
        "word": "lost their homes",
        "category": "verb phrase",
        "meaning": "失去家园，描述灾后影响",
        "example": "There was bad damage and thousands of people lost their homes."
    },
    {
        "word": "also",
        "category": "adverb",
        "meaning": "表示“也”，说明影响范围",
        "example": "In Florida, the storm also caused damage and caused flooding in some areas."
    },
    {
        "word": "flooding in some areas",
        "category": "noun phrase",
        "meaning": "部分地区的洪水，具体描述灾害类型",
        "example": "In Florida, the storm also caused damage and caused flooding in some areas."
    },
    {
        "word": "It is not known",
        "category": "verb phrase",
        "meaning": "表被动，意为“目前尚不清楚”",
        "example": "It is not known exactly how much damage the storm caused."
    },
    {
        "word": "how much damage",
        "category": "noun clause",
        "meaning": "提问从句，表示破坏程度不明确",
        "example": "It is not known exactly how much damage the storm caused."
    },
    {
        "word": "losses",
        "category": "noun",
        "meaning": "损失，表经济影响",
        "example": "However, losses in Havana, Cuba were over $1 million."
    },
    {
        "word": "Havana, Cuba",
        "category": "proper noun",
        "meaning": "地名，指古巴的哈瓦那",
        "example": "However, losses in Havana, Cuba were over $1 million."
    },
    {
        "word": "at least",
        "category": "adverb phrase",
        "meaning": "至少，表最低估计",
        "example": "At least 100 people died in Cuba alone."
    },
    {
        "word": "in Cuba alone",
        "category": "prepositional phrase",
        "meaning": "仅在古巴，表范围",
        "example": "At least 100 people died in Cuba alone."
    }
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
            <voch3><strong>${word}</strong></voch3>
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