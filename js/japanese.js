// PDF 数据
const pdfData = [
  {
    title: "平假名、片假名表",
    images: ["/docs/003-1.png", "/docs/00-1.png", "/docs/00-2.png", "/docs/Nihongo_ichiran_01-converted.svg", "/docs/001-1.png", "/docs/001-2.png", "/docs/002-1.png", "/docs/002-2.png"],
    // audio: "/docs/japanese hiragana syllable song.mp3",
    audios: [
      "/docs/japanese hiragana syllable song.mp3", 
      "/docs/Japanese Alphabet Song.mp3",
      "/docs/learn japanese alphabet katakana.mp3",
      "/docs/あいうえおのうた.mp3"
    ],
  },
  {
    title: "1 问路",
    images: ["/docs/01-1.png", "/docs/01-2.png", "/docs/01-3.png"],
    audios: [
      "/docs/audio_lesson_01.mp3",
      "/docs/audio_lesson_01-1.mp3",
      "/docs/audio_lesson_01-2.mp3",
      "/docs/audio_lesson_01-3.mp3",
      "/docs/audio_lesson_01-4.mp3"
    ],
  },
  {
    title: "2 自我介绍 告诉别人你的名字和职业",
    images: ["/docs/02-1.png", "/docs/02-2.png", "/docs/02-3.png"],
    audios: [
      "/docs/audio_lesson_02.mp3",
      "/docs/audio_lesson_02-1.mp3"
    ],
  },
  {
    title: "3 说明自己来自哪里",
    images: ["/docs/03-1.png", "/docs/03-2.png", "/docs/03-3.png"],
    audios: [
      "/docs/audio_lesson_03.mp3",
      "/docs/audio_lesson_03-1.mp3"
    ],
  },
  {
    title: "4 说明你将要做什么",
    images: ["/docs/04-1.png", "/docs/04-2.png", "/docs/04-3.png"],
    audios: [
      "/docs/audio_lesson_04.mp3",
      "/docs/audio_lesson_04-1.mp3"
    ],
  },
  {
    title: "5 说明自己是怎样学习日语",
    images: ["/docs/05-1.png", "/docs/05-2.png", "/docs/05-3.png"],
    audios: [
      "/docs/audio_lesson_05.mp3",
      "/docs/audio_lesson_05-1.mp3"
    ],
  },
  {
    title: "6 确认公共交通工具开往何处",
    images: ["/docs/06-1.png", "/docs/06-2.png", "/docs/06-3.png"],
    audios: [
      "/docs/audio_lesson_06.mp3",
      "/docs/audio_lesson_06-1.mp3"
    ],
  },
  {
    title: "7 请对方说得慢一些",
    images: ["/docs/07-1.png", "/docs/07-2.png", "/docs/07-3.png"],
    audios: [
      "/docs/audio_lesson_07.mp3",
      "/docs/audio_lesson_07-1.mp3"
    ],
  },
  {
    title: "8 引荐朋友等",
    images: ["/docs/08-1.png", "/docs/08-2.png", "/docs/08-3.png"],
    audios: [
      "/docs/audio_lesson_08.mp3",
      "/docs/audio_lesson_08-1.mp3"
    ],
  },
  {
    title: "9 询问东西的名称",
    images: ["/docs/09-1.png", "/docs/09-2.png", "/docs/09-3.png"],
    audios: [
      "/docs/audio_lesson_09.mp3",
      "/docs/audio_lesson_09-1.mp3"
    ],
  },
  {
    title: "10 询问价格",
    images: ["/docs/10-1.png", "/docs/10-2.png", "/docs/10-3.png"],
    audios: [
      "/docs/audio_lesson_10.mp3",
      "/docs/audio_lesson_10-1.mp3"
    ],
  },
  {
    title: "11 询问是否有你想要的东西",
    images: ["/docs/11-1.png", "/docs/11-2.png", "/docs/11-3.png"],
    audios: [
      "/docs/audio_lesson_11.mp3",
      "/docs/audio_lesson_11-1.mp3"
    ],
  },
  {
    title: "12 表达感想或做出说明 1",
    images: ["/docs/12-1.png", "/docs/12-2.png", "/docs/12-3.png"],
    audios: [
      "/docs/audio_lesson_12.mp3",
      "/docs/audio_lesson_12-1.mp3"
    ],
  },
  {
    title: "13 告诉别人你想做什么",
    images: ["/docs/13-1.png", "/docs/13-2.png", "/docs/13-3.png"],
    audios: [
      "/docs/audio_lesson_13.mp3",
      "/docs/audio_lesson_13-1.mp3"
    ],
  },
  {
    title: "14 表达自己的愿望",
    images: ["/docs/14-1.png", "/docs/14-2.png", "/docs/14-3.png"],
    audios: [
      "/docs/audio_lesson_14.mp3",
      "/docs/audio_lesson_14-1.mp3"
    ],
  },
  {
    title: "15 把你的目的地告诉出租车司机",
    images: ["/docs/15-1.png", "/docs/15-2.png", "/docs/15-3.png"],
    audios: [
      "/docs/audio_lesson_15.mp3",
      "/docs/audio_lesson_15-1.mp3"
    ],
  },
  {
    title: "16 表达感想或做出说明 2",
    images: ["/docs/16-1.png", "/docs/16-2.png", "/docs/16-3.png"],
    audios: [
      "/docs/audio_lesson_16.mp3",
      "/docs/audio_lesson_16-1.mp3"
    ],
  },
  {
    title: "17 告诉别人你现在正在做什么",
    images: ["/docs/17-1.png", "/docs/17-2.png", "/docs/17-3.png"],
    audios: ["/docs/audio_lesson_17.mp3",
      "/docs/audio_lesson_17-1.mp3"
    ],
  },
  {
    title: "18 就你所经历的事情表达你的感想",
    images: ["/docs/18-1.png", "/docs/18-2.png", "/docs/18-3.png"],
    audios: ["/docs/audio_lesson_18.mp3",
      "/docs/audio_lesson_18-1.mp3"
    ],
  },
  {
    title: "19 告诉店员你要买什么",
    images: ["/docs/19-1.png", "/docs/19-2.png", "/docs/19-3.png"],
    audios: ["/docs/audio_lesson_19.mp3",
      "/docs/audio_lesson_19-1.mp3"
    ],
  },
  {
    title: "20 请对方不要在你的菜里放某样东西",
    images: ["/docs/20-1.png", "/docs/20-2.png", "/docs/20-3.png"],
    audios: ["/docs/audio_lesson_20.mp3",
      "/docs/audio_lesson_20-1.mp3"
    ],
  },
  {
    title: "21 告诉对方你在哪儿",
    images: ["/docs/21-1.png", "/docs/21-2.png", "/docs/21-3.png"],
    audios: ["/docs/audio_lesson_21.mp3",
      "/docs/audio_lesson_21-1.mp3"
    ],
  },
  {
    title: "22 向对方发出邀请的说法 1",
    images: ["/docs/22-1.png", "/docs/22-2.png", "/docs/22-3.png"],
    audios: ["/docs/audio_lesson_22.mp3",
      "/docs/audio_lesson_22-1.mp3"
    ],
  },
  {
    title: "23 告诉别人你喜欢什么",
    images: ["/docs/23-1.png", "/docs/23-2.png", "/docs/23-3.png"],
    audios: ["/docs/audio_lesson_23.mp3",
      "/docs/audio_lesson_23-1.mp3"
    ],
  },
  {
    title: "24 告诉对方你不喜欢或不能吃什么",
    images: ["/docs/24-1.png", "/docs/24-2.png", "/docs/24-3.png"],
    audios: ["/docs/audio_lesson_24.mp3",
      "/docs/audio_lesson_24-1.mp3"
    ],
  },
  {
    title: "25 身体不适的表达方法",
    images: ["/docs/25-1.png", "/docs/25-2.png", "/docs/25-3.png"],
    audios: ["/docs/audio_lesson_25.mp3",
      "/docs/audio_lesson_25-1.mp3"
    ],
  },
  {
    title: "26 表达多重感想 1",
    images: ["/docs/26-1.png", "/docs/26-2.png", "/docs/26-3.png"],
    audios: ["/docs/audio_lesson_26.mp3",
      "/docs/audio_lesson_26-1.mp3"
    ],
  },
  {
    title: "27 问对方选哪个好",
    images: ["/docs/27-1.png", "/docs/27-2.png", "/docs/27-3.png"],
    audios: ["/docs/audio_lesson_27.mp3",
      "/docs/audio_lesson_27-1.mp3"
    ],
  },
  {
    title: "28 寻求许可",
    images: ["/docs/28-1.png", "/docs/28-2.png", "/docs/28-3.png"],
    audios: ["/docs/audio_lesson_28.mp3",
      "/docs/audio_lesson_28-1.mp3"
    ],
  },
  {
    title: "29 表达你做了什么",
    images: ["/docs/29-1.png", "/docs/29-2.png", "/docs/29-3.png"],
    audios: ["/docs/audio_lesson_29.mp3",
      "/docs/audio_lesson_29-1.mp3"
    ],
  },
  {
    title: "30 叙述做过的或将要做的各种事",
    images: ["/docs/30-1.png", "/docs/30-2.png", "/docs/30-3.png"],
    audios: ["/docs/audio_lesson_30.mp3",
      "/docs/audio_lesson_30-1.mp3"
    ],
  },
  {
    title: "31 向对方发出邀请的说法 2",
    images: ["/docs/31-1.png", "/docs/31-2.png", "/docs/31-3.png"],
    audios: ["/docs/audio_lesson_31.mp3",
      "/docs/audio_lesson_31-1.mp3"
    ],
  },
  {
    title: "32 询问如何前往目的地",
    images: ["/docs/32-1.png", "/docs/32-2.png", "/docs/32-3.png"],
    audios: ["/docs/audio_lesson_32.mp3",
      "/docs/audio_lesson_32-1.mp3"
    ],
  },
  {
    title: "33 询问所需时间",
    images: ["/docs/33-1.png", "/docs/33-2.png", "/docs/33-3.png"],
    audios: ["/docs/audio_lesson_33.mp3",
      "/docs/audio_lesson_33-1.mp3"
    ],
  },
  {
    title: "34 表示经验的说法",
    images: ["/docs/34-1.png", "/docs/34-2.png", "/docs/34-3.png"],
    audios: ["/docs/audio_lesson_34.mp3",
      "/docs/audio_lesson_34-1.mp3"
    ],
  },
  {
    title: "35 依次说明你将要做或已经做的事",
    images: ["/docs/35-1.png", "/docs/35-2.png", "/docs/35-3.png"],
    audios: ["/docs/audio_lesson_35.mp3",
      "/docs/audio_lesson_35-1.mp3"
    ],
  },
  {
    title: "36 询问时间",
    images: ["/docs/36-1.png", "/docs/36-2.png", "/docs/36-3.png"],
    audios: ["/docs/audio_lesson_36.mp3",
      "/docs/audio_lesson_36-1.mp3"
    ],
  },
  {
    title: "37 说明不正常情况",
    images: ["/docs/37-1.png", "/docs/37-2.png", "/docs/37-3.png"],
    audios: ["/docs/audio_lesson_37.mp3",
      "/docs/audio_lesson_37-1.mp3"
    ],
  },
  {
    title: "38 对两个东西进行对比",
    images: ["/docs/38-1.png", "/docs/38-2.png", "/docs/38-3.png"],
    audios: ["/docs/audio_lesson_38.mp3",
      "/docs/audio_lesson_38-1.mp3"
    ],
  },
  {
    title: "39 说明自己的失误",
    images: ["/docs/39-1.png", "/docs/39-2.png", "/docs/39-3.png"],
    audios: ["/docs/audio_lesson_39.mp3",
      "/docs/audio_lesson_39-1.mp3"
    ],
  },
  {
    title: "40 说明理由",
    images: ["/docs/40-1.png", "/docs/40-2.png", "/docs/40-3.png"],
    audios: ["/docs/audio_lesson_40.mp3",
      "/docs/audio_lesson_40-1.mp3"
    ],
  },
  {
    title: "41 确认你想做的事能否实现",
    images: ["/docs/41-1.png", "/docs/41-2.png", "/docs/41-3.png"],
    audios: ["/docs/audio_lesson_41.mp3",
      "/docs/audio_lesson_41-1.mp3"
    ],
  },
  {
    title: "42 说明你的意愿或计划",
    images: ["/docs/42-1.png", "/docs/42-2.png", "/docs/42-3.png"],
    audios: ["/docs/audio_lesson_42.mp3",
      "/docs/audio_lesson_42-1.mp3"
    ],
  },
  {
    title: "43 表达你的视觉印象",
    images: ["/docs/43-1.png", "/docs/43-2.png", "/docs/43-3.png"],
    audios: ["/docs/audio_lesson_43.mp3",
      "/docs/audio_lesson_43-1.mp3"
    ],
  },
  {
    title: "44 把你所听到的事情告诉别人",
    images: ["/docs/44-1.png", "/docs/44-2.png", "/docs/44-3.png"],
    audios: ["/docs/audio_lesson_44.mp3",
      "/docs/audio_lesson_44-1.mp3"
    ],
  },
  {
    title: "45 较为郑重地提出请求",
    images: ["/docs/45-1.png", "/docs/45-2.png", "/docs/45-3.png"],
    audios: ["/docs/audio_lesson_45.mp3",
      "/docs/audio_lesson_45-1.mp3"
    ],
  },
  {
    title: "46 表达多重感想 2",
    images: ["/docs/46-1.png", "/docs/46-2.png", "/docs/46-3.png"],
    audios: ["/docs/audio_lesson_46.mp3",
      "/docs/audio_lesson_46-1.mp3"
    ],
  },
  {
    title: "47 询问做某事的方法",
    images: ["/docs/47-1.png", "/docs/47-2.png", "/docs/47-3.png"],
    audios: ["/docs/audio_lesson_47.mp3",
      "/docs/audio_lesson_47-1.mp3"
    ],
  },
  {
    title: "48 叙述你今后想做的事",
    images: ["/docs/48-1.png", "/docs/48-2.png", "/docs/48-3.png"],
    audios: ["/docs/audio_lesson_48.mp3",
      "/docs/audio_lesson_48-1.mp3"
    ],
  },
  {
    title: "附录",
    images: ["/docs/appendix-1.png", "/docs/appendix-2.png", "/docs/appendix-3.png"],
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
  content.innerHTML = ""; // 清空现有内容

  // 添加图片容器
  const imagesContainer = document.createElement("div");
  imagesContainer.className = "pdf-images";

  // 检查并加载图片
  if (pdf.images && pdf.images.length > 0) {
    pdf.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image; // 设置图片地址
      img.alt = pdf.title || "PDF Image"; // 设置备用文字
      imagesContainer.appendChild(img);
    });
  } else {
    const noImagesMessage = document.createElement("p");
    noImagesMessage.textContent = "No images available.";
    imagesContainer.appendChild(noImagesMessage);
  }

  // 添加音频容器
  const audiosContainer = document.createElement("div");
  audiosContainer.className = "pdf-audios";

  // 检查并加载音频
  if (pdf.audios && pdf.audios.length > 0) {
    pdf.audios.forEach((audioSrc) => {
      const audio = document.createElement("audio");
      audio.controls = true; // 显示音频控件
      audio.src = audioSrc; // 设置音频地址
      audiosContainer.appendChild(audio);
    });
  } else {
    const noAudioMessage = document.createElement("p");
    noAudioMessage.textContent = "No audio files available.";
    audiosContainer.appendChild(noAudioMessage);
  }

  // 将图片和音频容器添加到主内容容器
  content.appendChild(imagesContainer);
  content.appendChild(audiosContainer);
}

// 初始化
initializePDFViewer(pdfData);
