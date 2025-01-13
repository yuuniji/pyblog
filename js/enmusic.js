const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('lyrics');
let lyrics = [];
let currentLineIndex = -1;

// 加载歌曲和歌词
function loadSong(songName) {
    audio.src = `/audio/song/${songName}.mp3`; // 音频路径
    fetch(`/audio/song/${songName}.lrc`) // 歌词文件路径
        .then(response => {
            if (!response.ok) {
                throw new Error(`歌词文件加载失败：${songName}.lrc`);
            }
            return response.text();
        })
        .then(data => {
            lyrics = parseLyrics(data);
            displayLyrics(lyrics);
            audio.play();
            currentLineIndex = -1; // 重置歌词行
        })
        .catch(err => {
            console.error('错误:', err.message);
            lyricsContainer.innerHTML = `<p style="color: red;">${err.message}</p>`;
        });
}

// 解析 LRC 歌词
function parseLyrics(lrc) {
    return lrc.split('\n').map(line => {
        const match = line.match(/\[(\d{2}):(\d{2}\.\d{2})\](.*)/);
        if (match && match[3].trim()) {
            const time = parseInt(match[1], 10) * 60 + parseFloat(match[2]);
            const [english, chinese] = match[3].split(' // ');
            return { time, english, chinese };
        }
        return null;
    }).filter(Boolean);
}

// 显示歌词
function displayLyrics(lyrics) {
    lyricsContainer.innerHTML = lyrics.map(item => `
                <p class="lyric-line">
                    <span class="english">${item.english}</span><br>
                    <span class="chinese">${item.chinese}</span>
                </p>
            `).join('');
}

// 更新歌词
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

        // 调整滚动位置，居中显示当前歌词
        const scrollPosition =
            activeLine.offsetTop - containerHeight / 1 + lineHeight / 2;

        lyricsContainer.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }
}

// 在音频播放时更新歌词
audio.addEventListener('timeupdate', updateLyrics);