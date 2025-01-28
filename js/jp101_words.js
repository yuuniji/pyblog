// JSON 文件及对应分类名称
const categories = [
    { file: '/components/jp101json/verbs.json', name: 'v.' },
    { file: '/components/jp101json/nouns.json', name: 'n.' },
    { file: '/components/jp101json/na_adjectives.json', name: 'Na-a.' },
    { file: '/components/jp101json/i_adjectives.json', name: 'I-a.' }
];

const tabsContainer = document.getElementById('tabs');
const categoriesContainer = document.getElementById('categories-container');

// 动态生成 Tabs 和类别内容
categories.forEach((category, index) => {
    // 创建 Tab
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.textContent = category.name;
    tab.onclick = () => showCategory(index);
    tabsContainer.appendChild(tab);

    // 创建分类容器
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category-container';
    categoryDiv.id = `${category.name.toLowerCase()}-container`;

    // 添加分类标题
    categoryDiv.innerHTML = `
        <h2>${category.name}</h2>
        <div class="container" id="${category.name.toLowerCase()}-content">
            <!-- Category content will be loaded -->
        </div>
    `;
    categoriesContainer.appendChild(categoryDiv);

    // 加载对应 JSON 数据
    fetch(category.file)
        .then(response => response.json())
        .then(data => {
            const categoryContainer = document.getElementById(`${category.name.toLowerCase()}-content`);

            data.flat().forEach(word => {
                const wordDiv = document.createElement('div');
                wordDiv.className = 'word';

                // 渲染单词信息
                wordDiv.innerHTML = `
                    <h3>${word.word} (${word.romaji})</h3>
                    <p><strong>Meaning:</strong> ${word.english}</p>
                    <p><strong>Kana:</strong> ${word.kana}</p>
                    <audio controls src="${word.audio}">Your browser does not support the audio element.</audio>

                    <div class="examples">
                        <h4>Examples:</h4>
                        ${word.examples.map(example => `
                            <p>${example.text} (${example.romaji})</p>
                            <p><strong>Translation:</strong> ${example.english}</p>
                            <audio controls src="${example.audio}"></audio>
                        `).join('')}
                    </div>
                `;
                categoryContainer.appendChild(wordDiv);
            });

            // 默认显示第一个分类
            if (index === 0) {
                tab.classList.add('active');
                categoryDiv.classList.add('active');
            }
        })
        .catch(error => {
            console.error(`Error loading ${category.file}:`, error);
        });
});

// 显示选中的分类
function showCategory(index) {
    const tabs = document.querySelectorAll('.tab');
    const categories = document.querySelectorAll('.category-container');

    tabs.forEach(tab => tab.classList.remove('active'));
    categories.forEach(category => category.classList.remove('active'));

    tabs[index].classList.add('active');
    categories[index].classList.add('active');
}