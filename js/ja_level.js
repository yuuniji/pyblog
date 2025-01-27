// 获取元素的方法
function getElement(selector, context = document) {
    return context.querySelector(selector);
}

function getElements(selector, context = document) {
    return context.querySelectorAll(selector);
}

// 切换 Accordion 折叠状态
function toggleAccordion(headerElement) {
    const accordionItem = headerElement.parentElement;
    const content = getElement('.accordion-content', accordionItem);

    // 判断当前是否打开
    const isOpen = headerElement.classList.contains('open');

    // 关闭所有其他打开的 Accordion
    getElements('.accordion-header').forEach(header => {
        if (header !== headerElement) {
            header.classList.remove('open');
            const siblingContent = getElement('.accordion-content', header.parentElement);
            if (siblingContent) siblingContent.style.display = 'none';
        }
    });

    // 切换当前 Accordion
    if (isOpen) {
        headerElement.classList.remove('open');
        content.style.display = 'none';
    } else {
        headerElement.classList.add('open');
        content.style.display = 'block';
    }
}

// 显示弹窗
function showModal(contentUrl) {
    const modalOverlay = getElement('#modal-overlay');
    const modalBody = getElement('#modal-body');

    // 加载外部内容
    fetch(contentUrl)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('内容加载失败');
            }
        })
        .then(html => {
            modalBody.innerHTML = html; // 将内容插入到弹窗中
            modalOverlay.style.display = 'flex'; // 显示弹窗
        })
        .catch(error => {
            modalBody.innerHTML = `<p>加载失败: ${error.message}</p>`;
            modalOverlay.style.display = 'flex';
        });
}

// 关闭弹窗
function closeModal() {
    const modalOverlay = getElement('#modal-overlay');
    const modalBody = getElement('#modal-body');

    modalOverlay.style.display = 'none';
    modalBody.innerHTML = ''; // 清空内容
}

// 初始化事件绑定
function initializeModalEvents() {
    const modalLinks = getElements('.modal-link');
    modalLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // 阻止默认跳转
            const url = link.getAttribute('href');
            showModal(url);
        });
    });

    // 绑定关闭按钮事件
    const closeButton = getElement('#modal-close');
    closeButton.addEventListener('click', closeModal);

    // 点击遮罩层关闭弹窗
    const modalOverlay = getElement('#modal-overlay');
    modalOverlay.addEventListener('click', event => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
}

// DOM 加载后初始化
function onDOMLoaded(callback) {
    document.addEventListener('DOMContentLoaded', callback);
}

// 主入口
onDOMLoaded(() => {
    initializeModalEvents();
});