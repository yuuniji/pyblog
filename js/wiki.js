// 获取 DOM 元素
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

// 定义格式化的提示内容
const messages = {
  'text-0': `
    <p><strong>步骤一：快速浏览</strong><br />
    <strong>目标：</strong> 抓住主题和结构。</p>
    <p>1. <strong>快速阅读全文：</strong> 先不查单词，尝试理解文章的大意和主旨。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong> 这篇文章主要讲述的是 1910 年古巴飓风及其对古巴和美国的影响。</p>
    <p>2. <strong>识别关键词：</strong> 如 <em>hurricane</em>（飓风）、<em>damage</em>（破坏）、<em>Cuba</em>（古巴）。</p>
  <p><strong>步骤二：精读与注解</strong><br />
    <strong>目标：</strong> 逐句深入理解文章内容。</p>
    <p>1. <strong>逐句精读：</strong> 找出句子主干（主语+谓语+宾语），结合上下文理解新单词。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原文：<em>The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba.</em><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主干：<em>The 1910 Cuba hurricane was one of the worst tropical cyclones.</em><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;理解：描述这次飓风是古巴最严重的热带气旋之一。</p>
    <p>2. <strong>段落划分与标记：</strong> 将文章分段，标记核心信息。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第一段：飓风的形成和路径。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二段：飓风的影响（古巴和佛罗里达的损失）。</p>
  <p><strong>步骤三：总结与复述</strong><br />
    <strong>目标：</strong> 用自己的语言整理和表达文章内容。</p>
    <p>1. <strong>写简短总结：</strong> 用自己的语言概括主要内容。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<em>The 1910 Cuba hurricane caused serious damage in Cuba and Florida. Many homes were destroyed, and over 100 people died in Cuba.</em></p>
    <p>2. <strong>尝试复述：</strong> 用自己的语言复述文章内容，巩固记忆并提升语言表达能力。</p>
  <p><strong>步骤四：词汇扩展</strong><br />
    <strong>目标：</strong> 积累和灵活运用高频词汇。</p>
    <p>1. <strong>记录高频词汇：</strong> 标记和整理常见单词。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>hurricane</em>（飓风）<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>damage</em>（破坏）<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>flooding</em>（洪水）<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>disaster</em>（灾难）</p>
    <p>2. <strong>新词造句：</strong> 用关键单词造句，强化记忆。<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<strong>示例：</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;<em>	The hurricane caused severe damage to the city.</em></p>
    &nbsp;&nbsp;&nbsp;&nbsp;<em>	After the storm made landfall, it caused heavy flooding.</em></p>
    <p><strong>步骤五：结合听力与跟读</strong><br />
    <strong>目标：</strong> 通过听和说强化语感和发音。</p>
    <p>1. <strong>寻找音频：</strong> 尽量找到文章朗读音频或类似主题的新闻音频，练习听力。<br />
    <p>2. <strong>模仿发音：</strong> 跟随音频朗读，注意连读、重音和语调，提升发音准确性和语感。</p>
    <p><strong>每日练习建议</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;每天坚持阅读一篇简短新闻，按照以上步骤操作，逐步提高单词量、阅读理解、听力和口语表达能力。坚持一段时间后，进步将会显而易见！</p>
    `,
  'text-1': `
    <p><strong>原文：</strong><br />
    The 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba.</p>
    <p><strong>1. 句子主干：</strong><br />
    • <strong>The 1910 Cuba hurricane</strong> was <strong>one of the worst tropical cyclones.</strong><br />
    • <strong>was said to be：</strong> 被认为是（被动语态）。</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>hurricane：</strong> 飓风，关键词。<br />
    • <strong>one of the worst：</strong> 最严重的之一，表强调。<br />
    • <strong>tropical cyclones：</strong> 热带气旋，科学术语，hurricane 的同义词。<br />
    • <strong>has ever hit Cuba：</strong> 现在完成时，说明事件影响至今仍被提及。</p>
    <p><strong>3. 翻译：</strong><br />
    1910年的古巴飓风被认为是袭击古巴最严重的热带气旋之一。</p>
  `,
  'text-2': `
        <p><strong>原文：</strong><br />
        The storm formed in the southern Caribbean Sea on October 9, 1910.</p>
        <p><strong>1. 句子主干：</strong><br />
        • The storm <strong>formed</strong> in the southern Caribbean Sea.<br />
        <p><strong>2. 注解：</strong><br />
        • <strong>formed：</strong> 动词，形成。<br />
        • <strong>southern Caribbean Sea：</strong> 地理位置，“加勒比海南部”。<br />
        • <strong>on October 9, 1910：</strong> 具体时间，表示事件起点。<br />
        <p><strong>3. 翻译：</strong><br />
        这场风暴于1910年10月9日在加勒比海南部形成。</p>
    `,
  'text-3': `
        <p><strong>原文：</strong><br />
        It grew stronger as it moved northwest.</p>
        <p><strong>1. 句子主干：</strong><br />
        • It <strong>grew stronger</strong> as it <strong>moved northwest</strong>.<br />
        <p><strong>2. 注解：</strong><br />
        • <strong>grew stronger：</strong> 变得更强（比较级，表程度变化）。<br />
        • <strong>as it moved northwest：</strong> 从句，表时间和过程，说明飓风路径和强度变化。<br />
        <p><strong>3. 翻译：</strong><br />
        它在向西北移动的过程中变得更加强烈。</p>
    `,
  'text-4': `
        <p><strong>原文：</strong><br />
        It then made landfall on the western end of Cuba.</p>
        <p><strong>1. 句子主干：</strong><br />
        • It <strong>made landfall</strong> on the western end of Cuba.<br />
        <p><strong>2. 注解：</strong><br />
        • <strong>made landfall：</strong> 动词短语，意为“登陆”。<br />
        • <strong>western end of Cuba：</strong> 古巴的西端，表地理位置。<br />
        <p><strong>3. 翻译：</strong><br />
        随后，它在古巴的西端登陆。</p>
    `,

  'text-5': `
          <p><strong>原文：</strong><br />
          The storm made a loop over open water, and then began moving towards the United States.</p>
          <p><strong>1. 句子主干：</strong><br />
          • The storm <strong>made a loop</strong>, and then <strong>began moving</strong> towards the United States.</p>
          <p><strong>2. 注解：</strong><br />
          • <strong>made a loop：</strong> 动词短语，“形成一个环状路径”，强调飓风轨迹的特殊性。<br />
          • <strong>open water：</strong> 意为“开阔水域”，指海洋区域。<br />
          • <strong>began moving：</strong> 开始移动，表动作的开始。</p>
          <p><strong>3. 翻译：</strong><br />
          风暴在开阔水域形成了环状路径，然后开始向美国移动。</p>
        `,
  'text-6': `
          <p><strong>原文：</strong><br />
          After crossing Florida, the storm moved near the rest of the southeastern United States and passed out to sea.</p>
          <p><strong>1. 句子主干：</strong><br />
          • The storm <strong>moved near</strong> the southeastern United States and <strong>passed out to sea</strong>.</p>
          <p><strong>2. 注解：</strong><br />
          • <strong>crossing Florida：</strong> 现在分词短语，作时间状语，表示“穿过佛罗里达州”后。<br />
          • <strong>passed out to sea：</strong> 动词短语，指“进入大海”。</p>
          <p><strong>3. 翻译：</strong><br />
          穿过佛罗里达州后，这场风暴接近了美国东南部的其他地区，然后进入了海洋。</p>
        `,
  'text-7': `
    <p><strong>原文：</strong><br />
    Because of the storm's loop, some reports said it was actually two hurricanes.</p>
    <p><strong>1. 句子主干：</strong><br />
    • Some reports <strong>said</strong> it <strong>was</strong> two hurricanes.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>Because of：</strong> 表原因。<br />
    • <strong>the storm's loop：</strong> 飓风的环形路径，表特征。<br />
    • <strong>actually：</strong> 副词，“实际上”，表强调。</p>
    <p><strong>3. 翻译：</strong><br />
    由于飓风的环形路径，有些报道称它实际上是两场飓风。</p>
  `,
  'text-8': `
    <p><strong>原文：</strong><br />
    In Cuba, the storm was one of the worst disasters in the island's history.</p>
    <p><strong>1. 句子主干：</strong><br />
    • The storm <strong>was</strong> one of the worst disasters.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>in the island's history：</strong> 表范围，指古巴历史中。</p>
    <p><strong>3. 翻译：</strong><br />
    在古巴，这场飓风是该岛历史上最严重的灾难之一。</p>
  `,
  'text-9': `
    <p><strong>原文：</strong><br />
    There was bad damage and thousands of people lost their homes.</p>
    <p><strong>1. 句子主干：</strong><br />
    • There <strong>was</strong> bad damage.<br />
    • Thousands of people <strong>lost</strong> their homes.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>bad damage：</strong> 严重破坏，表影响程度。<br />
    • <strong>lost their homes：</strong> 失去家园，描述灾后影响。</p>
    <p><strong>3. 翻译：</strong><br />
    造成了严重的破坏，数千人失去了家园。</p>
  `,
  'text-10': `
    <p><strong>原文：</strong><br />
    In Florida, the storm also caused damage and caused flooding in some areas.</p>
    <p><strong>1. 句子主干：</strong><br />
    • The storm <strong>caused damage</strong> and <strong>caused flooding</strong>.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>also：</strong> 表示“也”，说明影响范围。<br />
    • <strong>flooding in some areas：</strong> 部分地区的洪水，具体描述灾害类型。</p>
    <p><strong>3. 翻译：</strong><br />
    在佛罗里达州，这场飓风也造成了破坏，并引发了一些地区的洪水。</p>
  `,
  'text-11': `
    <p><strong>原文：</strong><br />
    It is not known exactly how much damage the storm caused.</p>
    <p><strong>1. 句子主干：</strong><br />
    • It <strong>is not known</strong> how much damage <strong>the storm caused</strong>.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>It is not known：</strong> 表被动，意为“目前尚不清楚”。<br />
    • <strong>how much damage：</strong> 提问从句，表示破坏程度不明确。</p>
    <p><strong>3. 翻译：</strong><br />
    目前尚不清楚这场风暴究竟造成了多大的破坏。</p>
  `,
  'text-12': `
    <p><strong>原文：</strong><br />
    However, losses in Havana, Cuba were over $1 million.</p>
    <p><strong>1. 句子主干：</strong><br />
    • Losses <strong>were</strong> over $1 million.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>losses：</strong> 损失，表经济影响。<br />
    • <strong>Havana, Cuba：</strong> 地名，指古巴的哈瓦那。</p>
    <p><strong>3. 翻译：</strong><br />
    然而，古巴哈瓦那的损失超过了100万美元。</p>
  `,
  'text-13': `
    <p><strong>原文：</strong><br />
    At least 100 people died in Cuba alone.</p>
    <p><strong>1. 句子主干：</strong><br />
    • At least 100 people <strong>died</strong>.</p>
    <p><strong>2. 注解：</strong><br />
    • <strong>at least：</strong> 至少，表最低估计。<br />
    • <strong>in Cuba alone：</strong> 仅在古巴，表范围。</p>
    <p><strong>3. 翻译：</strong><br />
    仅在古巴，就有至少100人死亡。</p>
  `,

};

// 显示提示框
const showPopup = (textId, targetElement) => {
  popup.innerHTML = messages[textId];
  popup.style.display = 'block';
  overlay.style.display = 'block';

  // 获取点击元素的位置
  const rect = targetElement.getBoundingClientRect();

  // 动态设置提示框位置和宽度
  popup.style.top = `${rect.bottom + window.scrollY + 10}px`; // 距离点击元素下方 10px
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.width = 'auto'; // 自动宽度
  popup.style.maxWidth = '300px'; // 最大宽度限制
};

// 隐藏提示框
const hidePopup = () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};

// 绑定事件到每个可点击的文本
document.querySelectorAll('.clickable-text').forEach((textElement) => {
  textElement.addEventListener('click', (event) =>
    showPopup(textElement.id, event.target)
  );
});

// 点击遮罩层隐藏提示框
overlay.addEventListener('click', hidePopup);