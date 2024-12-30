function bringToFront(card) {
    const cards = document.querySelectorAll(".card");
    // 清除所有卡片的 active 类
    cards.forEach((c) => c.classList.remove("active"));

    // 确保点击后按星期顺序更新 z-index
    cards.forEach((c, index) => {
        c.style.zIndex = cards.length - index; // 恢复默认 z-index
    });

    // 将点击的卡片置于最前
    card.classList.add("active");
    card.style.zIndex = cards.length + 1;
}