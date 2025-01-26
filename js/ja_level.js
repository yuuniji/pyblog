// JS 优化后的逻辑
function initAccordion() {
  const allHeaders = document.querySelectorAll(".accordion-header");
  const allContents = document.querySelectorAll(".accordion-content");

  // 默认展开所有手风琴项
  allHeaders.forEach((header) => {
    header.classList.add("open");
  });
  allContents.forEach((content) => {
    content.style.display = "block";
  });

  // 添加点击事件监听
  allHeaders.forEach((header) => {
    header.addEventListener("click", () =>
      toggleAccordion(header, allHeaders, allContents)
    );
  });
}

function toggleAccordion(header, allHeaders, allContents) {
  const isOpen = header.classList.contains("open");

  // 关闭所有手风琴
  allHeaders.forEach((h) => h.classList.remove("open"));
  allContents.forEach((c) => (c.style.display = "none"));

  // 如果当前手风琴项是关闭状态，则打开
  if (!isOpen) {
    header.classList.add("open");
    header.nextElementSibling.style.display = "block";
  }
}

function initModal() {
  const links = document.querySelectorAll(".timeline-item a");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  // 显示弹窗
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");

      showModal(modalOverlay, modalBody, url);
    });
  });

  // 关闭弹窗
  modalClose.addEventListener("click", () => {
    closeModal(modalOverlay);
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal(modalOverlay);
    }
  });
}

function showModal(modalOverlay, modalBody, url) {
  modalOverlay.style.display = "flex";
  modalBody.innerHTML = "<p>加载中...</p>";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("网络错误：" + response.status);
      }
      return response.text();
    })
    .then((html) => {
      modalBody.innerHTML = html;
    })
    .catch((error) => {
      modalBody.innerHTML = `<p style='color: red;'>加载失败：${error.message}</p>`;
    });
}

function closeModal(modalOverlay) {
  modalOverlay.style.display = "none";
}

function init() {
  initAccordion();
  initModal();
}

document.addEventListener("DOMContentLoaded", init);
