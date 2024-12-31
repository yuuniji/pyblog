const gridElement = document.getElementById("grid");
    const detailsContent = document.getElementById("details-content");

    const years = 90; // 总共 90 年
    const weeksPerYear = 52; // 每年 52 周
    const gridData = [];

    // 定义事件，支持单独和连续的事件
    const events = [
        {
            yearStart: 1,
            weekStart: 1,
            yearEnd: 1,
            weekEnd: 1,
            color: "#39FF14", // 荧光绿
            event: "2002-05 我诞生了！"
        },
        {
            yearStart: 7,
            weekStart: 18,
            yearEnd: 13,
            weekEnd: 10,
            color: "#90EE90",
            event: "2008-09～2014-07 景宁县第一实验小学 学生"
        },
        {
            yearStart: 13,
            weekStart: 19,
            yearEnd: 16,
            weekEnd: 11,
            color: "#87CEEB",
            event: "2014-09～2017-07 景宁民族中学 班长、数学课代表"
        },
        {
            yearStart: 16,
            weekStart: 19,
            yearEnd: 19,
            weekEnd: 11,
            color: "#696969", 
            event: "2017-9～2020-07 浙江景宁中学 卫生委员"
        },
        {
            yearStart: 19,
            weekStart: 20,
            yearEnd: 23,
            weekEnd: 12,
            color: "#708090",
            event: "2020-09~2024-07 北京城市学院 英语课代表、宣传委员"
        },
        {
            yearStart: 23,
            weekStart: 13,
            yearEnd: 23,
            weekEnd: 15,
            color: "#39FF14", // 荧光绿
            event: "2024-06-15～2024-07-07 骑行西藏"
        },
        {
            yearStart: 22,
            weekStart: 10,
            yearEnd: 22,
            weekEnd: 21,
            color: "#39FF14", // 荧光绿
            event: "2023-09-25～2023-12-19 第一位墨西哥朋友 Andrea，也是第一位外国朋友"
        },
        {
            yearStart: 20,
            weekStart: 19,
            yearEnd: 20,
            weekEnd: 19,
            color: "#39FF14", // 荧光绿
            event: "2021-08-27 我的第二位外甥女诞生了！"
        },
        {
            yearStart: 19,
            weekStart: 38,
            yearEnd: 19,
            weekEnd: 38,
            color: "#39FF14", // 荧光绿
            event: "2020-01-02 我的第一位外甥女诞生了！"
        },
        {
            yearStart: 16,
            weekStart: 18,
            yearEnd: 16,
            weekEnd: 18,
            color: "#39FF14", // 荧光绿
            event: "2017-10 跳高市级第二名（1.72米），对于我这个业余选手来说或许是巅峰了"
        },
        {
            yearStart: 22,
            weekStart: 37,
            yearEnd: 22,
            weekEnd: 37,
            color: "#FF0000", 
            event: "2023-12-23 考研北大失败"
        },
        {
            yearStart: 18,
            weekStart: 4,
            yearEnd: 18,
            weekEnd: 4,
            color: "#FF0000", 
            event: "2019-05-11 职业生涯最后一次跳高...虽然一直都是校第一，但是市级却变成第六（与此同时处于高三自暴自弃的阶段）那天很冷，又下很大的雨，打在只穿着田径服的我身上好冷好冷..."
        },
        {
            yearStart: 22,
            weekStart: 50,
            yearEnd: 23,
            weekEnd: 7,
            color: "#FF0000", 
            event: "2024-03-28～2024-05-27 杭州云尖技术服务有限公司（实习软件开发工程师）"
        },
        {
            yearStart: 23,
            weekStart: 35,
            yearEnd: 23,
            weekEnd: 35,
            color: "#39FF14", // 荧光绿
            event: "2024-21-31 科目一94分一把过，考完后直接去学倒车入库，非常简单，今天也是我开始在我的博客上写我自己的生命格子"
        },
    ];

    // 初始化网格数据
    for (let year = 1; year <= years; year++) {
        for (let week = 1; week <= weeksPerYear; week++) {
            // 默认颜色和事件
            const defaultColor = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "#2c2828" : "#e0e0e0";
            gridData.push({
                year: year,
                week: week,
                color: defaultColor,
                event: `第 ${year} 年里的第 ${week} 周`
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