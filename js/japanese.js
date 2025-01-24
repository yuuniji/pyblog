// PDF 数据
const pdfData = [
    {
      title: "Document 1",
      images: ["/docs/01-1.png", "/docs/01-2.png", "/docs/01-3.png"],
      audio: "/docs/audio_lesson_01.mp3",
    },
    {
      title: "Document 2",
      images: ["/docs/02-1.png", "/docs/02-2.png", "/docs/02-3.png"],
      audio: "/docs/audio_lesson_02.mp3",
    },
    {
      title: "Document 3",
      images: ["/docs/03-1.png", "/docs/03-2.png", "/docs/03-3.png"],
      audio: "/docs/audio_lesson_03.mp3",
    },
  ];
  
  // 初始化目录和内容
  function initializePDFViewer(data) {
    const menu = document.querySelector("#pdf-menu ul");
    const content = document.getElementById("pdf-content");
  
    // 创建目录
    data.forEach((pdf, index) => {
      const menuItem = document.createElement("li");
      menuItem.textContent = pdf.title;
      menuItem.dataset.index = index;
  
      // 点击事件，切换 PDF 内容
      menuItem.addEventListener("click", () => {
        // 更新选中状态
        document.querySelectorAll("#pdf-menu li").forEach((li) => {
          li.classList.remove("active");
        });
        menuItem.classList.add("active");
  
        // 渲染 PDF 内容
        renderPDFContent(data[index]);
      });
  
      menu.appendChild(menuItem);
    });
  
    // 默认加载第一个 PDF
    if (data.length > 0) {
      renderPDFContent(data[0]);
      menu.firstChild.classList.add("active");
    }
  }
  
  
  // 渲染 PDF 内容
  function renderPDFContent(pdf) {
    const content = document.getElementById("pdf-content");
    content.innerHTML = "";
  
    // 添加图片
    const imagesContainer = document.createElement("div");
    imagesContainer.className = "pdf-images";
  
    pdf.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = pdf.title;
      imagesContainer.appendChild(img);
    });
  
    // 添加音频
    const audioContainer = document.createElement("audio");
    audioContainer.controls = true;
    audioContainer.src = pdf.audio;
  
    content.appendChild(audioContainer);
    content.appendChild(imagesContainer);
  }
  
  // 初始化
  initializePDFViewer(pdfData);
  