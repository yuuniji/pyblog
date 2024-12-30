const planets = document.querySelectorAll('.plt');
const contentBox = document.getElementById('planet-content');

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        contentBox.textContent = planet.dataset.content;
        contentBox.style.display = 'block';
    });

    planet.addEventListener('mouseover', () => {
        planet.style.animationPlayState = 'paused';
    });

    planet.addEventListener('mouseleave', () => {
        planet.style.animationPlayState = 'running';
    });
});

contentBox.addEventListener('click', () => {
    contentBox.style.display = 'none';
});

// 计算相对路径
const getSunsPath = () => {
    // 获取当前页面的路径并拆分
    const pathParts = window.location.pathname.split('/');
    
    // 计算当前文件所在的目录层级
    const depth = pathParts.filter(part => part !== '').length - 1;

    // 返回相对路径，根据深度向上回退目录
    return '../'.repeat(depth) + 'suns.html';
};

// 动态加载 suns.html 内容
fetch(getSunsPath())  // 使用动态路径来引用 suns.html
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // 将内容插入到 id 为 suns 的元素中
        document.getElementById('suns').innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading suns:', error);
    });