const gridElement = document.getElementById("grid");
    const detailsContent = document.getElementById("details-content");

    const years = 90; // 总共 90 年
    const weeksPerYear = 52; // 每年 52 周
    const gridData = [];

    // 定义事件，支持单独和连续的事件
    const events = [
        {
            yearStart: 6,
            weekStart: 1,
            yearEnd: 11,
            weekEnd: 52,
            color: "#ADD8E6", // 浅蓝色
            event: "Attended elementary school"
        },
        {
            yearStart: 18,
            weekStart: 1,
            yearEnd: 18,
            weekEnd: 1,
            color: "#FFD700", // 金色
            event: "18th Birthday!"
        },
        {
            yearStart: 25,
            weekStart: 30,
            yearEnd: 25,
            weekEnd: 30,
            color: "#FF4500", // 橙红色
            event: "Started first job!"
        },
        {
            yearStart: 60,
            weekStart: 1,
            yearEnd: 60,
            weekEnd: 10,
            color: "#32CD32", // 青绿色
            event: "Retirement party!"
        }
    ];

    // 初始化网格数据
    for (let year = 1; year <= years; year++) {
        for (let week = 1; week <= weeksPerYear; week++) {
            // 默认颜色和事件
            gridData.push({
                year: year,
                week: week,
                color: "#f0f0f0",
                event: `Year ${year}, Week ${week}`
            });
        }
    }

    // 应用事件到对应的格子上
    events.forEach(({ yearStart, weekStart, yearEnd, weekEnd, color, event }) => {
        for (let year = yearStart; year <= yearEnd; year++) {
            const weekFrom = year === yearStart ? weekStart : 1;
            const weekTo = year === yearEnd ? weekEnd : weeksPerYear;

            for (let week = weekFrom; week <= weekTo; week++) {
                const cellIndex = (year - 1) * weeksPerYear + (week - 1);
                gridData[cellIndex].color = color;
                gridData[cellIndex].event = event;
            }
        }
    });

    // 创建格子
    function createCell(data) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        const cellInner = document.createElement("div");
        cellInner.classList.add("cell-inner");
        cellInner.style.backgroundColor = data.color;
        cellInner.dataset.event = data.event; // 将事件存储到自定义属性中

        cellInner.addEventListener("click", () => {
            document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));
            cellInner.classList.add("highlight");

            // 显示事件内容
            detailsContent.textContent = `${data.event}`;
        });

        cell.appendChild(cellInner);
        return cell;
    }

    // 渲染所有格子
    gridData.forEach(data => {
        const cell = createCell(data);
        gridElement.appendChild(cell);
    });