// 页面切换功能
function navigateTo(pageId) {
    // 隐藏所有内容
    document.querySelectorAll('.nav-content').forEach((content) => {
        content.classList.remove('active');
    });
    // 显示当前页面内容
    document.getElementById(pageId).classList.add('active');
}

// 获取工具提示元素
const infotip = document.getElementById("infotip1");

// 添加点击事件监听
infotip.addEventListener("click", function (event) {
    event.stopPropagation(); // 阻止事件冒泡
    infotip.classList.toggle("active");
});

// 点击页面其他地方时隐藏工具提示
document.addEventListener("click", function () {
    infotip.classList.remove("active");
});