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