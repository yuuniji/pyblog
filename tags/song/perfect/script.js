// 获取音频和歌词容器
const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('lyrics');
const toggleModeButton = document.getElementById('toggleMode');

// 定义歌词数据
let lyrics = [];

// 加载 LRC 文件
fetch('lyrics.lrc')
    .then(response => response.text())
    .then(data => {
        lyrics = parseLyrics(data);
        displayLyrics(lyrics);
    })
    .catch(err => console.error('无法加载歌词文件:', err));

// 解析 LRC 歌词
function parseLyrics(lrc) {
    const lines = lrc.split('\n');
    return lines.map(line => {
        const match = line.match(/\[(\d{2}):(\d{2}\.\d{3})\](.*)/); // 解析时间戳
        if (match && match[3].trim()) {
            const minute = parseInt(match[1], 10);
            const second = parseFloat(match[2]);
            const text = match[3].trim();

            // 假设英文歌词和中文翻译按行配对
            const [englishText, chineseText] = text.split(' // '); // 分割英文和中文部分
            return {
                time: minute * 60 + second,
                english: englishText || '',
                chinese: chineseText || ''
            };
        }
        return null;
    }).filter(item => item !== null);
}

// 显示歌词
function displayLyrics(lyrics) {
    lyricsContainer.innerHTML = lyrics
        .map(item => `
            <p class="lyric-line">
                <span class="english">${item.english}</span><br>
                <span class="chinese">${item.chinese}</span>
            </p>
        `)
        .join('');
}

function updateLyrics() {
    const currentTime = audio.currentTime;
    let activeLyricIndex = -1;

    // 查找当前歌词索引
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            activeLyricIndex = i;
        } else {
            break;
        }
    }

    if (activeLyricIndex !== -1) {
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');

        // 移除所有歌词的激活样式
        lyricLines.forEach((line, index) => {
            line.classList.toggle('active', index === activeLyricIndex);
        });

        // 滚动歌词容器内容
        const activeLine = lyricLines[activeLyricIndex];
        const containerHeight = lyricsContainer.clientHeight;
        const lineHeight = activeLine.offsetHeight;

        // 调整滚动位置，偏移 70% 的容器高度
        const scrollPosition =
            activeLine.offsetTop - containerHeight * 1.4 + lineHeight / 2;

        lyricsContainer.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }
}

// 在音频播放时更新歌词
audio.addEventListener('timeupdate', updateLyrics);

// 时间单位常量
const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

// 获取下一次至日的时间
function getNextSolstice() {
    const now = new Date();
    const year = now.getFullYear();
    const winterSolstice = new Date(year, 11, 21); // 12月21日
    const summerSolstice = new Date(year, 5, 21);  // 6月21日

    if (now < summerSolstice) {
        return summerSolstice;
    } else if (now < winterSolstice) {
        return winterSolstice;
    } else {
        return new Date(year + 1, 5, 21); // 下一年的夏至
    }
}

// 计算剩余时间
function calculateTimeDiff(targetDate) {
    const diff = targetDate - Date.now();
    const days = Math.floor(diff / MS_PER_DAY);
    const hours = Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR);
    const minutes = Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((diff % MS_PER_MINUTE) / MS_PER_SECOND);
    return { days, hours, minutes, seconds };
}

// 更新倒计时显示
function updateCountdown() {
    const countdownContainer = document.getElementById('countdown');
    const nextSolstice = getNextSolstice();
    const { days, hours, minutes, seconds } = calculateTimeDiff(nextSolstice);
    countdownContainer.textContent = `Next solstice in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 立即更新并启动倒计时
updateCountdown();
setInterval(updateCountdown, 1000);

// // 打印当前时间和下一次至日
// function debugSolsticeCountdown() {
//     const now = new Date();
//     const nextSolstice = getNextSolstice();
//     const diff = calculateTimeDiff(nextSolstice);
//     console.log("Current time:", now.toISOString());
//     console.log("Next solstice:", nextSolstice.toISOString());
//     console.log(`Countdown: ${diff.days}d ${diff.hours}h ${diff.minutes}m ${diff.seconds}s`);
// }

// debugSolsticeCountdown();

// // 切换模式
// function toggleMode() {
//     const isDarkMode = document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode', !isDarkMode);
//     toggleModeButton.setAttribute('aria-pressed', isDarkMode);
//     localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
// }

// toggleModeButton.addEventListener('click', toggleMode);

// // 加载用户偏好
// const savedMode = localStorage.getItem('mode');
// if (savedMode) {
//     document.body.classList.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
//     toggleModeButton.setAttribute('aria-pressed', savedMode === 'dark');
// } else {
//     document.body.classList.add('light-mode');
// }