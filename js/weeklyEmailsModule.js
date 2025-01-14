// 为了确保这个模块不会影响到您的原博客，我们需要将模块的样式和结构进行隔离。可以通过以下方法实现：
// 	1.	使用 Shadow DOM 将模块封装为独立的组件，防止样式污染全局。
// 	2.	确保所有样式作用域仅限于模块内部。
// 	3.	将模块的 HTML、CSS 和 JavaScript 代码封装到一个独立文件中，便于复用和管理。

// 以下是模块化代码的完整实现：
class WeeklyEmailsModule extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element.
        const shadow = this.attachShadow({ mode: "open" });

        // Define styles.
        const style = document.createElement("style");
        style.textContent = `
            :host {
                font-family: "JetBrains Mono", "Fira Code", monospace;  /* 更适合编码的等宽字体 */
                display: block;
                margin: 2rem auto;
                max-width: 800px;
                background-color: #f5f5f5;  /* 温和的浅灰色背景 */
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* 提升阴影效果，避免视觉疲劳 */
            }

            header {
                text-align: center;
                padding: 1rem;
                background-color: #007acc;  /* 清新的蓝色背景，提升专注感 */
                color: #fff;
                border-radius: 8px 8px 0 0;
            }

            h1 {
                margin: 0;
                font-size: 1.6rem;  /* 增大标题字体大小，便于阅读 */
            }

            .email-list {
                display: flex;
                justify-content: center;
                padding: 1rem;
                background-color: #f8f9fa;
                border-bottom: 1px solid #ddd;
            }

            .email-list button {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 0.6rem 1.2rem;  /* 提升按钮的舒适点击区域 */
                border-radius: 6px;
                cursor: pointer;
                font-size: 1.1rem;  /* 适当增大按钮文字 */
                margin: 0 0.5rem;
                transition: background-color 0.3s ease;  /* 添加平滑过渡效果 */
            }

            .email-list button.active {
                background-color: #0056b3;
            }

            .email-list button:hover {
                background-color: #004a99;  /* 改进 hover 状态，增加色差 */
            }

            .email-entry {
                display: none;
                padding: 1rem;
            }

            .email-entry.active {
                display: block;
            }

            .email-header {
                font-size: 1.3rem;  /* 增大标题字体，提升可读性 */
                font-weight: bold;
                color: #007bff;  /* 使用一致的蓝色调 */
                margin-bottom: 0.5rem;
            }

            .email-date {
                font-size: 0.9rem;
                color: #6c757d;  /* 更柔和的灰色，减少视觉负担 */
                margin-bottom: 1rem;
            }

            .email-body {
                line-height: 1.7;  /* 增加行距，提高阅读体验 */
            }

            h2, h3 {
            text-align: center;
        }

        .table-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .table-container table {
            border-collapse: collapse;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff; /* 默认表格背景 */
            color: #333; /* 默认文字颜色 */
            border: 1px solid #ddd; /* 默认边框颜色 */
        }

        table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        table th {
            background-color: #f4f4f4; /* 默认表头背景 */
        }

        /* 屏幕宽度大于 768px 时并排显示 */
        @media (min-width: 768px) {
            .table-container {
                flex-direction: row;
            }

            .table-container table {
                flex: 1;
            }
        }

            .vocabulary { color: blue; font-weight: bold; } /* 标注词汇 */
        .verb-phrase { color: green; font-style: italic; } /* 标注动词短语 */
        .fixed-expression { color: purple; text-decoration: underline; } /* 标注固定搭配 */

            /* 深色模式样式 */
            @media (prefers-color-scheme: dark) {
                :host {
                    background-color: #2e2e2e;  /* 深色背景，保护眼睛 */
                    color: #f5f5f5;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                }

                header {
                    background-color: #0056b3;  /* 适配深色模式的蓝色 */
                    color: #fff;
                }

                .email-list {
                    background-color: #3c3c3c;
                    border-bottom: 1px solid #555;
                }

                .email-list button {
                    background-color: #0056b3;
                    color: #fff;
                }

                .email-list button.active {
                    background-color: #003f8a;
                }

                .email-list button:hover {
                    background-color: #004a9d;
                }

                .email-header {
                    color: #66b2ff;  /* 更亮眼的蓝色，使重点更加突出 */
                }

                .email-date {
                    color: #aaa;  /* 使用更柔和的灰色日期 */
                }

                .email-body {
                    color: #dcdcdc;  /* 提高内容的可读性，避免深色背景下的视觉疲劳 */
                }
                .vocabulary { color: #66ccff; } /* 浅蓝 */
            .verb-phrase { color: #90ee90; } /* 浅绿 */
            .fixed-expression { color: #dda0dd; } /* 浅紫 */
            
            .table-container table {
                background-color: #1e1e1e; /* 深色模式表格背景 */
                color: #ddd; /* 深色模式文字颜色 */
                border: 1px solid #444; /* 深色模式边框颜色 */
            }

            table th {
                background-color: #333; /* 深色模式表头背景 */
            }

            table th, table td {
                border-color: #444; /* 深色模式表格边框颜色 */
            }
        }
        `;

        // Define HTML structure.
        const container = document.createElement("div");
        container.innerHTML = `
            <header>
                <h1>Weekly Emails</h1>
            </header>
            <div class="email-list" id="email-list"></div>
            <div id="email-container"></div>
        `;

        // Append styles and structure to shadow DOM.
        shadow.appendChild(style);
        shadow.appendChild(container);

        this.renderEmails(shadow);
    }

    renderEmails(shadow) {
        const emails = [
            {
                title: "Subject: Reflection on Reading Practice and Listening Plans",
                date: "January 14, 2025",
                body: `
                    蓝色为重要词汇，绿色为动词短语，紫色为固定搭配
                    <p>Dear [Recipient’s Name],</p>
    <p>
        As part of my <span class="vocabulary">weekly plan</span> to 
        <span class="verb-phrase">focus on</span> different aspects of English learning, Monday is 
        <span class="fixed-expression">dedicated to</span> improving 
        <span class="vocabulary">reading skills</span>. My schedule yesterday included 
        <span class="verb-phrase">reading from</span> my book, exploring 
        <span class="vocabulary">news articles</span>, and 
        <span class="verb-phrase">going through</span> 
        <span class="vocabulary">simplified Wikipedia entries</span>, with the goal of noting 
        <span class="vocabulary">new vocabulary</span> and their 
        <span class="vocabulary">definitions</span>. Additionally, I planned some minor 
        <span class="vocabulary">activities</span> to 
        <span class="fixed-expression">practice speaking</span>, writing, and listening, such as 
        <span class="vocabulary">reading aloud</span>, copying book excerpts, and listening to the 
        <span class="vocabulary">audiobook version</span> of my reading material.
    </p>
    <p>
        However, in practice, I only 
        <span class="verb-phrase">managed to</span> read a few Wikipedia articles and 
        <span class="verb-phrase">note down</span> some 
        <span class="vocabulary">new words</span> with their meanings. While I had intended to work on the other activities as well, 
        <span class="vocabulary">time constraints</span> 
        <span class="verb-phrase">prevented me from</span> completing them. Nonetheless, I feel that even this small effort 
        <span class="verb-phrase">contributed to</span> my 
        <span class="vocabulary">overall goal</span> of enhancing my 
        <span class="vocabulary">reading skills</span>.
    </p>
    <p>
        <span class="verb-phrase">Looking ahead</span>, Wednesday will be focused on 
        <span class="vocabulary">listening practice</span>. I 
        <span class="verb-phrase">plan to</span> watch English TV shows, listen to some of my 
        <span class="vocabulary">favorite songs</span> repeatedly, and explore English videos on YouTube. If available, I will also listen to the 
        <span class="vocabulary">audiobook version</span> of my current reading material. To support 
        <span class="vocabulary">vocabulary building</span>, I will 
        <span class="verb-phrase">add new words to</span> my dictionary. Moreover, I aim to 
        <span class="fixed-expression">enrich my learning experience</span> by 
        <span class="verb-phrase">reflecting on</span> the content through writing and 
        <span class="fixed-expression">practicing speaking</span> by 
        <span class="verb-phrase">mimicking dialogues</span> or 
        <span class="verb-phrase">singing along</span>.
    </p>
    <p>
        I <span class="fixed-expression">look forward to</span> making 
        <span class="vocabulary">steady progress</span> throughout the week and 
        <span class="fixed-expression">appreciate your support</span> in this journey.
    </p>
    <p>Best regards,<br>叶泽伟</p>
                    <h2>词汇/短语积累</h2>
    <div class="table-container">
        <div>
            <h3>词汇</h3>
            <table>
                <tr>
                    <th>Word/Phrase</th>
                    <th>Meaning</th>
                </tr>
                <tr>
                    <td>weekly plan</td>
                    <td>每周计划</td>
                </tr>
                <tr>
                    <td>reading skills</td>
                    <td>阅读技能</td>
                </tr>
                <tr>
                    <td>news articles</td>
                    <td>新闻文章</td>
                </tr>
                <tr>
                    <td>simplified Wikipedia entries</td>
                    <td>简化版维基百科条目</td>
                </tr>
                <tr>
                    <td>new vocabulary</td>
                    <td>新词汇</td>
                </tr>
                <tr>
                    <td>definitions</td>
                    <td>定义</td>
                </tr>
                <tr>
                    <td>activities</td>
                    <td>活动</td>
                </tr>
                <tr>
                    <td>reading aloud</td>
                    <td>大声朗读</td>
                </tr>
                <tr>
                    <td>audiobook version</td>
                    <td>有声书版本</td>
                </tr>
                <tr>
                    <td>time constraints</td>
                    <td>时间限制</td>
                </tr>
                <tr>
                    <td>overall goal</td>
                    <td>总体目标</td>
                </tr>
                <tr>
                    <td>listening practice</td>
                    <td>听力练习</td>
                </tr>
                <tr>
                    <td>favorite songs</td>
                    <td>最喜爱的歌曲</td>
                </tr>
                <tr>
                    <td>mimicking dialogues</td>
                    <td>模仿对话</td>
                </tr>
                <tr>
                    <td>singing along</td>
                    <td>跟着唱</td>
                </tr>
                <tr>
                    <td>steady progress</td>
                    <td>稳定进展</td>
                </tr>
            </table>
        </div>
        <div>
            <h3>动词短语和搭配</h3>
            <table>
                <tr>
                    <th>Phrase</th>
                    <th>Meaning</th>
                </tr>
                <tr>
                    <td>dedicated to</td>
                    <td>专注于</td>
                </tr>
                <tr>
                    <td>included reading from</td>
                    <td>包括阅读……</td>
                </tr>
                <tr>
                    <td>go through</td>
                    <td>浏览</td>
                </tr>
                <tr>
                    <td>note down</td>
                    <td>记录下来</td>
                </tr>
                <tr>
                    <td>managed to</td>
                    <td>设法做某事</td>
                </tr>
                <tr>
                    <td>prevented from</td>
                    <td>阻止</td>
                </tr>
                <tr>
                    <td>contributed to</td>
                    <td>有助于</td>
                </tr>
                <tr>
                    <td>look ahead</td>
                    <td>展望未来</td>
                </tr>
                <tr>
                    <td>plan to</td>
                    <td>计划做……</td>
                </tr>
                <tr>
                    <td>add to</td>
                    <td>加入</td>
                </tr>
                <tr>
                    <td>enrich experience</td>
                    <td>丰富体验</td>
                </tr>
                <tr>
                    <td>reflect on</td>
                    <td>反思</td>
                </tr>
                <tr>
                    <td>support vocabulary building</td>
                    <td>支持词汇积累</td>
                </tr>
                <tr>
                    <td>practice speaking</td>
                    <td>练习口语</td>
                </tr>
                <tr>
                    <td>appreciate support</td>
                    <td>感谢支持</td>
                </tr>
            </table>
        </div>
    </div>
                `
            },
            {
                title: "Week 2: Progress Update",
                date: "January 21, 2025",
                body: `
                    Dear [Recipient’s Name],<br><br>
                    <p></p>
                    <p></p>
                `
            }
        ];

        const emailList = shadow.getElementById("email-list");
        const emailContainer = shadow.getElementById("email-container");

        emails.forEach((email, index) => {
            // Create a button for each email.
            const button = document.createElement("button");
            button.textContent = `Week ${index + 1}`;
            button.onclick = () => this.showEmail(shadow, index);
            if (index === 0) button.classList.add("active");
            emailList.appendChild(button);

            // Create email content.
            const emailEntry = document.createElement("div");
            emailEntry.className = `email-entry ${index === 0 ? "active" : ""}`;
            emailEntry.innerHTML = `
                <div class="email-header">${email.title}</div>
                <div class="email-date">Date: ${email.date}</div>
                <div class="email-body">${email.body}</div>
            `;
            emailContainer.appendChild(emailEntry);
        });
    }

    showEmail(shadow, index) {
        const buttons = shadow.querySelectorAll(".email-list button");
        const entries = shadow.querySelectorAll(".email-entry");

        buttons.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
        entries.forEach((entry, i) => {
            entry.classList.toggle("active", i === index);
        });
    }
}

// Define the custom element.
customElements.define("weekly-emails-module", WeeklyEmailsModule);