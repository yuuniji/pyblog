function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function fn() {
    var w = document.getElementById('main');
    var ta = document.getElementById('part1');
    var tb = document.getElementById('part2');
    var t1 = document.getElementById('partmax');
    var t2 = document.getElementById('partmin');
    if (ta.style.display === 'none') {
        w.style.width = '67%';
        ta.style.display = 'block'; // 以块级元素显示
        tb.style.display = 'block'; // 以块级元素显示
        t1.style.display = 'block';
        t2.style.display = 'none';
    } else {
        w.style.width = '100%';
        ta.style.display = 'none'; // 隐藏
        tb.style.display = 'none'; // 隐藏
        t1.style.display = 'none';
        t2.style.display = 'block';
    }
}

// quotes.js
var a = Math.random() + "";
var rand1 = Math.floor(Math.random() * 101); // 生成一个范围在 0 到 100 的随机整数
quotes = new Array;
quotes[0] = '活着，如同生命最后一天般活着；<br>学习，如同永远活着般学习！<br>——圣雄甘地 （印度国父）';
quotes[1] = '这些（监狱的）围墙很有趣——起初你痛恨它；然后你逐渐习惯它；足够长时间后，你开始依赖它...<br>这就是体制化！<br>——电影《肖申克的救赎》';
quotes[2] = '做奴隶虽然不幸，但并不可怕，因为知道挣扎，毕竟还有挣脱的希望；<br>若是从奴隶生活中寻出美来，赞叹，陶醉，就是万劫不复的奴才了！<br>——鲁迅';
quotes[3] = '优秀的设计在不断地演化<br>糟糕的设计在不断地打补丁';
quotes[4] = '以铜为镜 可以正衣冠<br>以史为镜 可以知兴替<br>以人为镜 可以明得失<br>——李世民 （唐太宗）';
quotes[5] = '我从来不把安逸和享乐当作生活目的；<br>对这种伦理基础，我称之为【猪栏的理想】<br>——爱因斯坦';
quotes[6] = '一年之计 莫如树谷<br>十年之计 莫如树木<br>终身之计 莫如树人<br>——《管子》';
quotes[7] = '最纯粹、最抽象的设计难题就是设计桥梁——你面对的问题是：如何用最少的材料，跨越给定的距离。<br>——保罗.格雷汉姆 （顶级黑客 硅谷创业教父）';
quotes[8] = '一个人的价值，在于他贡献了什么，而不在于他获得了什么！<br>——爱因斯坦';
quotes[9] = '更好的工具未必能做出更好的设计';
quotes[10] = '我也会有恐惧和贪婪，只不过是——在大众贪婪时恐惧，在大众恐惧时贪婪！<br>——巴菲特';
quotes[11] = '雪崩时，没有一片雪花觉得自己有责任<br>——伏尔泰 （启蒙思想家）';
quotes[12] = '若批评不自由<br>则赞美无意义<br>——法国《费加罗报》的宗旨';
quotes[13] = '自由人不会去问：＂他的国家能为他做些什么？＂<br>也不会去问：＂他能为他的国家做些什么？＂<br>他们问的是：＂我和我的同胞们能通过政府做些什么？＂<br>——米尔顿.弗里德曼 （诺贝尔经济学奖得主）';
quotes[14] = '人生中最大的两个财富是：你的【才华】和你的【时间】。<br>才华越来越多而时间越来越少。我们的一生就是用时间来换取才华。';
quotes[15] = '当法律失去公正 则反抗成为义务<br>When injustice becomes law，resistance becomes duty.';
quotes[16] = '如果建筑工人像程序员写软件那样盖房子，那第一只飞来的啄木鸟就能毁掉人类文明 ☺<br>——Gerald Weinberg （软件工程大牛）';
quotes[17] = '读书是在别人思想的帮助下建立自己的思想<br>——尼古拉.鲁巴金 （作家）';
quotes[18] = '世上只有一种英雄主义——就是在认清生活的真相之后依然热爱生活<br>——罗曼.罗兰 （作家 诺贝尔奖得主）';
quotes[19] = '宁鸣而死<br>不默而生<br>——范仲淹';
quotes[20] = '财产不应公有，权力不应私有——否则将会坠入地狱！<br>——约翰.洛克 （哲学家 思想家）';
quotes[21] = '短期而言，股票市场是个投票机<br>长期而言，股票市场是个称重器<br>——本杰明.格雷厄姆';
quotes[22] = '真的猛士敢于在一个不正常的国家做一个正常的人';
quotes[23] = '好的程序代码本身就是最好的文档<br>——《代码大全》Steve McConnell';
quotes[24] = '尝试创建人间天堂，最终只会创造出地狱！<br>The attempt to make heaven on earth invariably produces hell.<br>——波普尔 （哲学家 思想家）';
quotes[25] = '好的程序员是那种过单行道马路都要往两边看的人<br>——Doug Linder';
quotes[26] = '退潮时便可知道谁在裸泳<br>——巴菲特';
quotes[27] = '要以世界的眼光看中国<br>不要以中国的眼光看世界<br>——周有光 （语言学家 经济学家）';
quotes[28] = '没有财产权就没有正义<br>——哈耶克 （诺贝尔经济学奖得主 政治思想家）';
quotes[29] = '花自己的钱 办自己的事——既讲节约 又讲效果<br>花自己的钱 办别人的事——只讲节约 不讲效果<br>花别人的钱 办自己的事——不讲节约 只讲效果<br>花别人的钱 办别人的事——不讲节约 不讲效果<br>——米尔顿.弗里德曼 （诺贝尔经济学奖得主）';
quotes[30] = '在软件【可重用】之前先得【可用】<br>——Ralph Johnson （设计模式四人帮之一）';
quotes[31] = '最多人走的路肯定最安全<br>但别指望会在这样的路上碰到很多猎物<br>——纪德 （作家 诺贝尔奖得主）';
quotes[32] = '你若不想做，总能找到借口<br>你若想做，总会找到方法<br>——阿拉伯谚语';
quotes[33] = '你可以暂时地蒙骗所有人，也可以永久地蒙骗部分人；<br>但你不可能永久地蒙骗所有人！<br>You can fool all the people some of the time，some of the people all the time，but you can NOT fool all the people all the time.<br>——林肯 （美国前总统）';
quotes[34] = '每当有事情发生，懦夫会问：＂这么做安全吗？＂<br>患得患失者会问：＂这么做明智吗？＂<br>虚荣者会问：＂这么做受欢迎吗？＂<br>但是良知只会问：＂这么做正确吗？＂<br>——马丁.路德.金 （美国人权领袖）';
quotes[35] = '如果说调试（debug）是去除 bug 的过程，那么编程就是制造 bug 的过程。<br>——Edsger Dijkstra （图灵奖得主）';
quotes[36] = '学习不是填满水桶，而是点燃火焰！<br>Education is not the filling of a pail but the lighting of a fire.<br>——叶芝 （爱尔兰诗人）';
quotes[37] = '总是使一个国家变成人间地狱的东西，恰恰是人们试图将其变成天堂！<br>What has always made the state a hell on earth has been precisely that man has tried to make it heaven.<br>——荷尔德林 （哈耶克《通往奴役之路》第2章把此句作为引言）';
quotes[38] = '道德在书本里，榜样在电视里，国土在肺里，爱情在房产证里，幸福感在梦里...<br>这就是某某特色';
quotes[39] = '对知识分子而言，成为思维的精英比成为道德的精英更重要！<br>——王小波 （作家）';
quotes[40] = '人生最大的痛苦不是失败<br>而是没有经历自己想要经历的一切';
quotes[41] = '用代码行数测算软件开发进度 如同 按重量测算飞机的制造进度<br>——比尔.盖茨';
quotes[42] = '简单即是美<br>Simple is beautiful';
quotes[43] = '人类从历史中学到的唯一教训就是——人类没有从历史中学到任何教训！<br>——汤因比 （历史学家）';
quotes[44] = '任何专制国家的教育，其目的都是在极力降低国民的心智。<br>——孟德斯鸠 （启蒙思想家）';
quotes[45] = '先帝爷留下一个烂摊子；<br>第二代治理者的办法是头疼医头，脚疼医脚，虽然去不了病根儿，但起码减轻症状，让你以为治好了；<br>第三代是头疼医脸，脚疼也医脸——对他们来说，能否治好无所谓，面子最重要；<br>这一代更邪乎了，头疼堵嘴，脚疼也堵嘴——只要喊不出疼，就算没病！';
quotes[46] = '无限的宽容必将导致宽容的消失<br>Unlimited tolerance must lead to the disappearance of tolerance.<br>——波普尔 （哲学家 思想家）';
quotes[47] = '简单是可靠的先决条件<br>Simplicity is prerequisite for reliability.<br>——Edsger Dijkstra （图灵奖得主）';
quotes[48] = '授人以鱼不如授人以渔！<br>授人以鱼只救一时之急，授人以渔则可解一生之需！<br>（注：这也是俺博客的宗旨）';
quotes[49] = '知人者智 自知者明<br>胜人者有力 自胜者强<br>——《道德经》';
quotes[50] = '未经反思自省的人生不值得去过<br>The unexamined life is not worth living.<br>——苏格拉底 （哲学之父）';
quotes[51] = '你写下的任何代码，六个月后再去看，都像是别人写的 ☺<br>——Tom Cargill （贝尔实验室科学家）';
quotes[52] = '预测未来最好的方法就是去创造未来<br>——林肯 （美国前总统）';
quotes[53] = '若批评不自由<br>则赞美无意义<br>——法国《费加罗报》的宗旨';
quotes[54] = '如果你来到一个陌生的国家，看到报纸上全是好消息；<br>我敢打赌，这个国家的好人都在监狱里！<br>——帕特.莫尼汉（美国参议员 社会学家）';
quotes[55] = '世界上只有两种编程语言——要么充满了抱怨；要么没人使用 ☺<br>——Bjarne Stroustrup （C++ 之父）';
quotes[56] = '编程的艺术就是处理复杂性的艺术<br>——Edsger Dijkstra （图灵奖得主）';
quotes[57] = '我从事投资时会观察一家公司的【全貌】<br>而大多数投资人只盯着它的【股价】<br>——巴菲特';
quotes[58] = '当法律失去公正 则反抗成为义务<br>When injustice becomes law，resistance becomes duty.';
quotes[59] = '我从来不把安逸和享乐当作生活目的；<br>对这种伦理基础，我称之为【猪栏的理想】<br>——爱因斯坦';
quotes[60] = '谎言重复千遍就是真理！<br>——戈培尔 （纳粹德国宣传部长）';
quotes[61] = '百战百胜，非善之善者也；不战而屈人之兵，善之善者也。<br>故上兵伐谋，其次伐交，其次伐兵，其下攻城。<br>——《孙子兵法》孙武';
quotes[62] = '不必为自己的独特看法而害怕<br>因为我们现在所接受的常识都曾是独特看法<br>——《自由思想的十诫》罗素 （哲学家 数学家 思想家）';
quotes[63] = '只有两样东西可能是无限的——宇宙的大小和人类的愚蠢<br>不过，对于前者我不太确定 ☺<br>——爱因斯坦';
quotes[64] = '价值投资不能保证一定盈利<br>但价值投资提供了通向成功的【唯一】机会<br>——巴菲特';
quotes[65] = 'Tape is Dead，Disk is Tape，Flash is Disk，RAM Locality is King！<br>——Jim Gray （图灵奖得主 数据库大牛）';
quotes[66] = '将愚人从他们所敬拜的锁链下解放出来是非常困难的<br>——伏尔泰 （启蒙思想家）';
quotes[67] = '一旦你习惯了戴面具的生活<br>你的脸将变得跟面具一样<br>——电影《V怪客／V字仇杀队》';
quotes[68] = '围在城里的人想逃出来，城外的人想冲进去；<br>对婚姻也罢，职业也罢，人生的愿望大都如此！<br>——《围城》钱钟书';
quotes[69] = '投资成功与否并非取决于你了解的东西，而在于你能否老老实实地承认你所不知道的东西！<br>投资人并不需要做对很多事情，重要的是不要犯重大的错误！<br>——巴菲特';
quotes[70] = '人们总以为自己生活的时代糟糕透顶，总是向往过去的黄金时代；<br>但在我们如今认为是身处黄金年代的那些人看来，他们当时所处的世界同样是苍白无力的！<br>——伍迪.艾伦 （作家 编剧 导演）';
quotes[71] = '优秀软件的作用是让复杂的东西看起来简单<br>——Grady Booch （UML 创始人之一）';
quotes[72] = '谁控制过去，谁就控制未来；<br>谁控制现在，谁就控制过去！<br>Who controls the past controls the future. Who controls the present controls the past.<br>——《1984》乔治.奥威尔';
quotes[73] = '软件就像【性】——免费的时候更好 ☺<br>Software is like sex，it`s better when it`s free.<br>——Linus Torvalds （Linux 之父）';
quotes[74] = '你的时间有限，所以不要浪费时间去重复别人的生活！<br>Your time is limited，so don`t waste it living someone else`s life.<br>——乔布斯';
quotes[75] = '时间会刺破青春的华丽精致<br>会把平行线刻上美人的额角<br>会吃掉稀世之珍和天生丽质<br>什么都逃不过它横扫的镰刀<br>——莎士比亚';
quotes[76] = '父母们最根本的缺点，在于想要自己的孩子为自己争光。<br>The fundamental defect of fathers is that they want their children to be a credit to them.<br>——罗素 （哲学家 数学家 思想家）';
quotes[77] = '没有银弹（万能药）<br>NO silver bullet<br>——《人月神话》Fred Brooks （图灵奖得主）';
quotes[78] = '艺术家用谎言揭露真相<br>政治家用谎言掩盖真相<br>Artists use lies to tell the truth，while politicians use them to cover the truth up.<br>——电影《V怪客／V字仇杀队》';
quotes[79] = '兵无常势，水无常形；<br>能因敌变化而取胜者，谓之神！<br>——《孙子兵法》孙武';
quotes[80] = '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情心，这三种纯洁而无比强烈的激情支配着我的一生。<br>Three passions，simple but overwhelmingly strong，have governed my life：the longing for love，the search for knowledge，and unbearable pity for the suffering of mankind.<br>——《我为什么而活着》罗素 （哲学家 数学家 思想家）';
quotes[81] = '从不同的层次审视你的设计';
quotes[82] = '牺牲【基本自由】来换取暂时的安全，最后既得不到安全也得不到自由！<br>——富兰克林 （美国开国元勋 物理学家 作家）';
quotes[83] = '拜金不可怕，可怕的是：在一个不吃不喝也要几百年才能买房的社会却不许拜金；<br>低俗不可怕，可怕的是：在一个几千万男生找不到女友，同龄少女都被老男人包养的国度却不准低俗！';
quotes[84] = 'Java 与 JavaScript 的关系，如同雷锋与雷峰塔的关系 ☺';
quotes[85] = '在理论上，理论和实践是没有差异的；但在实践中，是有差异的！<br>In theory，there is no difference between theory and practice. But in practice，there is.<br>——Snepscheut';
quotes[86] = '程序必须首先让人类可以理解 然后顺便让机器能执行<br>——《SICP》';
quotes[87] = '民主并非只是选举投票；<br>它是生活方式，是思维方式，是你每天呼吸的空气，举手投足的修养，个人回转的空间...<br>——龙应台 （台湾作家）';
quotes[88] = '兴趣是最好的老师<br>——爱因斯坦';
quotes[89] = '成功的教学所需要的不是强制<br>而是激发学生的欲望<br>——托尔斯泰 （作家）';
quotes[90] = '投资是预测资产收益的活动<br>投机是预测市场心理的活动<br>——凯恩斯 （经济学家）';
quotes[91] = '你要按你所想的去生活<br>否则你迟早会按你所生活的去想';
quotes[92] = '你若失去了财产，你只失去了一点儿；<br>你若失去了荣誉，你就失去了许多；<br>你若失去了勇气，你就把一切都失去了！<br>——歌德';
quotes[93] = '想得到你从未拥有过的东西<br>就必须做你从未做过的事情';
quotes[94] = '在进度落后的项目中增加人手只会导致进度更加落后<br>——《人月神话》Fred Brooks （图灵奖得主）';
quotes[95] = '知己知彼 百战不殆<br>不知彼而知己 一胜一负<br>不知彼不知己 每战必殆<br>——《孙子兵法》孙武';
quotes[96] = '想象力比知识更重要！<br>因为知识是有限的，而想象力概括着世界的一切，推动着进步，并且是知识进化的源泉<br>——爱因斯坦';
quotes[97] = '每个人出生的时候都是原创<br>可悲的是很多人渐渐都成了盗版';
quotes[98] = '大多数人宁愿死去也不愿思考<br>事实上他们也确实到死都没有思考<br>——罗素 （哲学家 数学家 思想家）';
quotes[99] = '没有人可以回到过去，重新开始；<br>但谁都可以从现在开始，书写一个全然不同的结局！';
quotes[100] = '真正的无知【不是】知识的贫乏<br>而是拒绝获取知识<br>——波普尔 （哲学家 思想家）';
var quote = quotes[rand1];



//tip

window.onload = function() {
    //绑定事件的函数
    function addEvent(obj, event, fn) { //要绑定的元素对象，要绑定的事件，触发的回调函数
        if (obj.addEventListener) { //非IE，支持冒泡和捕获
            obj.addEventListener(event, fn, false);
        } else if (obj.attachEvent) { //IE，只支持冒泡
            obj.attachEvent('on' + event, fn);
        }
    }
    //通过用户代理的方式判断是否是IE的方法，不能判断出IE11
    var isIE = navigator.userAgent.indexOf("MSIE") > -1;

    var $ = function(id) {
        return document.getElementById(id);
    }
    // var demo = $("demo");
    //obj    -  ToolTip超链接元素
    //id     -  ToolTip提示框id
    //html   -  ToolTip提示框HTML内容
    //width  -  ToolTip提示框宽度（可选）
    //height - ToolTip提示框高度（可选）
    function showTooltip(obj, id, html, width, height) {
        if ($(id) == null) {
            //创建 <div class="tooltip-box" id="xx">xxxxxxxx</div>
            var toolTipBox;
            toolTipBox = document.createElement('div');
            toolTipBox.className = "tooltip-box";
            toolTipBox.id = id;
            toolTipBox.innerHTML = html;
            obj.appendChild(toolTipBox);
            // toolTipBox.style.width = width ? width + 'px' : "auto";
            toolTipBox.style.height = height ? height + 'px' : "auto";
            if (!width && isIE) {
                toolTipBox.style.width = toolTipBox.offsetWidth; //因为IE不支持auto属性
            }
            toolTipBox.style.position = 'absolute';
            toolTipBox.style.display = 'block';
            var left = obj.offsetLeft;
            var top = obj.offsetTop + 20;
            //当浏览器窗口缩小时不让提示框超出浏览器
            if (left + toolTipBox.offsetWidth > document.body.clientWidth) {
                var demoLeft = demo.offsetLeft;
                left = document.body.clientWidth - toolTipBox.offsetWidth - demoLeft;
                if (left < 0)
                    left = 0;
            }
            toolTipBox.style.left = left + 'px';
            toolTipBox.style.top = top + 'px';
            addEvent(obj, "mouseleave", function() {
                setTimeout(function() {
                    $(id).style.display = 'none';
                }, 300);
            });
        } else {
            //显示
            $(id).style.display = 'block';
        }
    }
    var t1 = $("tooltip1");
    var t2 = $("tooltip2");
    var t3 = $("tooltip3");
    var t4 = $("tooltip4");
    var t5 = $("tooltip5");
    var t6 = $("tooltip6");
    var t7 = $("tooltip7");
    var t8 = $("tooltip8");
    var t9 = $("tooltip9");
    var t10 = $("tooltip10");
    var t11 = $("tooltip11");
    var t12 = $("tooltip12");
    var t13 = $("tooltip13");
    var t14 = $("tooltip14");
    var t15 = $("tooltip15");
    t1.onmouseenter = function() {
        showTooltip(this, "t1", '进入全屏模式', 88);
    };
    t2.onmouseenter = function() {
        showTooltip(this, "t2", '退出全屏模式', 88);
    };
    t3.onmouseenter = function() {
        showTooltip(this, "t3", 'RSS 订阅', 88);
    };
    t4.onmouseenter = function() {
        showTooltip(this, "t4", '研究来源1', 88);
    };
    t5.onmouseenter = function() {
        showTooltip(this, "t5", '研究来源2', 88);
    };
    t6.onmouseenter = function() {
        showTooltip(this, "t6", '研究来源3', 88);
    };
    t7.onmouseenter = function() {
        showTooltip(this, "t7", '研究来源4', 88);
    };
    t8.onmouseenter = function() {
        showTooltip(this, "t8", '研究来源5', 88);
    };
    t9.onmouseenter = function() {
        showTooltip(this, "t9", '研究来源6', 88);
    };
    t10.onmouseenter = function() {
        showTooltip(this, "t10", '研究来源7', 88);
    };
    t11.onmouseenter = function() {
        showTooltip(this, "t11", '研究来源8', 88);
    };
    t12.onmouseenter = function() {
        showTooltip(this, "t12", '研究来源8', 88);
    };
    t13.onmouseenter = function() {
        showTooltip(this, "t13", '研究来源10', 88);
    };
    t14.onmouseenter = function() {
        showTooltip(this, "t14", '研究来源11', 88);
    };
    t15.onmouseenter = function() {
        showTooltip(this, "t15", '研究来源12', 88);
    };
}

// music


let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [{
        name: "7 rings",
        artist: "Ariana Grande",
        image: "https://yzwbeast.github.io/comfort-zone/7-rings.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        // image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/7-rings.mp3"
    },
    {
        name: "7 Years",
        artist: "Lukas Graham",
        image: "https://yzwbeast.github.io/comfort-zone/7-Years.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/7-Years.mp3"
    },
    {
        name: "2002",
        artist: "Anne-Marie",
        image: "https://yzwbeast.github.io/comfort-zone/2002.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/2002.mp3"
    },
    {
        name: "A Thousand Miles",
        artist: "Vanessa Carlton",
        image: "https://yzwbeast.github.io/comfort-zone/A-Thousand-Miles.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/A Thousand Miles.mp3"
    },
    {
        name: "Adore You",
        artist: "Harry Styles",
        image: "https://yzwbeast.github.io/comfort-zone/Adore-You.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Adore You.mp3"
    },
    {
        name: "All of Me",
        artist: "John Legend",
        image: "https://yzwbeast.github.io/comfort-zone/All-of-Me.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/All of Me.mp3"
    },
    {
        name: "Another Love",
        artist: "Tom Odell",
        image: "https://yzwbeast.github.io/comfort-zone/Another-Love.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Another Love.mp3"
    },
    {
        name: "Arcade",
        artist: "Duncan Laurence",
        image: "https://yzwbeast.github.io/comfort-zone/Arcade.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Arcade.mp3"
    },
    {
        name: "Attention",
        artist: "Charlie Puth",
        image: "https://yzwbeast.github.io/comfort-zone/Attention.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Attention.mp3"
    },
    {
        name: "august",
        artist: "Taylor Swift",
        image: "https://yzwbeast.github.io/comfort-zone/august.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/august.mp3"
    },
    {
        name: "Be Alright",
        artist: "Dean Lewis",
        image: "https://yzwbeast.github.io/comfort-zone/Be-Alright.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Be Alright.mp3"
    },
    {
        name: "Beautiful Mistakes (feat. Megan Thee Stallion)",
        artist: "Maroon 5/Megan Thee Stallion",
        image: "https://yzwbeast.github.io/comfort-zone/Beautiful-Mistakes.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Beautiful Mistakes (feat. Megan Thee Stallion).mp3"
    },
    {
        name: "Bruises",
        artist: "Lewis Capaldi",
        image: "https://yzwbeast.github.io/comfort-zone/Bruises.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Bruises.mp3"
    },
    {
        name: "Budapest",
        artist: "George Ezra",
        image: "https://yzwbeast.github.io/comfort-zone/Budapest.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Budapest.mp3"
    },
    {
        name: "Chasing Cars",
        artist: "Snow Patrol",
        image: "https://yzwbeast.github.io/comfort-zone/Chasing-Cars.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Chasing Cars.mp3"
    },
    {
        name: "Circles",
        artist: "Post Malone",
        image: "https://yzwbeast.github.io/comfort-zone/Circles.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Circles.mp3"
    },
    {
        name: "Closer",
        artist: "Ane",
        image: "https://yzwbeast.github.io/comfort-zone/Closer.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Closer.mp3"
    },
    {
        name: "Dancing On My Own",
        artist: "Calum Scott",
        image: "https://yzwbeast.github.io/comfort-zone/Dancing-On-My-Own.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Dancing On My Own.mp3"
    },
    {
        name: "Die For You (with Ariana Grande) - Remix",
        artist: "The Weeknd/Ariana Grande",
        image: "https://yzwbeast.github.io/comfort-zone/Die-For-You.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Die For You (with Ariana Grande) - Remix.mp3"
    },
    {
        name: "drivers license",
        artist: "Olivia Rodrigo",
        image: "https://yzwbeast.github.io/comfort-zone/drivers-license.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/drivers license.mp3"
    },
    {
        name: "Drops of Jupiter (Tell Me)",
        artist: "Train",
        image: "https://yzwbeast.github.io/comfort-zone/Drops-of-Jupiter.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Drops of Jupiter (Tell Me).mp3"
    },
    {
        name: "Eastside (with Halsey & Khalid)",
        artist: "benny blanco/Halsey/Khalid",
        image: "https://yzwbeast.github.io/comfort-zone/Eastside.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Eastside (with Halsey & Khalid).mp3"
    },
    {
        name: "everything i wanted",
        artist: "Billie Eilish",
        image: "https://yzwbeast.github.io/comfort-zone/everything-i-wanted.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/everything i wanted.mp3"
    },
    {
        name: "Faded",
        artist: "Alan Walker",
        image: "https://yzwbeast.github.io/comfort-zone/Faded.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Faded.mp3"
    },
    {
        name: "Falling",
        artist: "Harry Styles",
        image: "https://yzwbeast.github.io/comfort-zone/Falling.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Falling.mp3"
    },
    {
        name: "Fireflies",
        artist: "Owl City",
        image: "https://yzwbeast.github.io/comfort-zone/Fireflies.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Fireflies.mp3"
    },
    {
        name: "Firestone",
        artist: "Kygo/Conrad Sewell",
        image: "https://yzwbeast.github.io/comfort-zone/Firestone.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Firestone.mp3"
    },
    {
        name: "Flowers",
        artist: "Miley Cyrus",
        image: "https://yzwbeast.github.io/comfort-zone/Flowers.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Flowers.mp3"
    },
    {
        name: "FourFiveSeconds",
        artist: "Rihanna/Kanye West/Paul McCartney",
        image: "https://yzwbeast.github.io/comfort-zone/FourFiveSeconds.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/FourFiveSeconds.mp3"
    },
    {
        name: "Grenade",
        artist: "Bruno Mars",
        image: "https://yzwbeast.github.io/comfort-zone/Grenade.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Grenade.mp3"
    },
    {
        name: "Happier",
        artist: "Ed Sheeran",
        image: "https://yzwbeast.github.io/comfort-zone/Happier.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Happier.mp3"
    },
    {
        name: "Havana (feat. Young Thug)",
        artist: "Camila Cabello/Young Thug",
        image: "https://yzwbeast.github.io/comfort-zone/Havana.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Havana (feat. Young Thug).mp3"
    },
    {
        name: "Hey There Delilah",
        artist: "Plain White T's",
        image: "https://yzwbeast.github.io/comfort-zone/Hey-There-Delilah.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Hey There Delilah.mp3"
    },
    {
        name: "Hey, Soul Sister",
        artist: "Train",
        image: "https://yzwbeast.github.io/comfort-zone/Hey-Soul-Sister.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Hey, Soul Sister.mp3"
    },
    {
        name: "Ho Hey",
        artist: "The Lumineers",
        image: "https://yzwbeast.github.io/comfort-zone/Ho-Hey.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Ho Hey.mp3"
    },
    {
        name: "Hold Me While You Wait",
        artist: "Lewis Capaldi",
        image: "https://yzwbeast.github.io/comfort-zone/Hold-Me-While-You-Wait.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Hold Me While You Wait.mp3"
    },
    {
        name: "How to Save a Life",
        artist: "The Fray",
        image: "https://yzwbeast.github.io/comfort-zone/How-to-Save-a-Life.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/How to Save a Life.mp3"
    },
    {
        name: "Human",
        artist: "Rag'n'Bone Man",
        image: "https://yzwbeast.github.io/comfort-zone/Human.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Human.mp3"
    },
    {
        name: "I Don’t Wanna Live Forever (Fifty Shades Darker)",
        artist: "ZAYN/Taylor Swift",
        image: "https://yzwbeast.github.io/comfort-zone/I-Dont-Wanna-Live-Forever.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I Don’t Wanna Live Forever (Fifty Shades Darker).mp3"
    },
    {
        name: "I Feel It Coming",
        artist: "The Weeknd/Daft Punk",
        image: "https://yzwbeast.github.io/comfort-zone/I-Feel-It-Coming.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I Feel It Coming.mp3"
    },
    {
        name: "i hate u, i love u (feat. olivia o'brien)",
        artist: "gnash/Olivia O'Brien",
        image: "https://yzwbeast.github.io/comfort-zone/i-hate-u-i-love-u.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/i hate u, i love u (feat. olivia o'brien).mp3"
    },
    {
        name: "I Like Me Better",
        artist: "Lauv",
        image: "https://yzwbeast.github.io/comfort-zone/I-Like-Me-Better.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I Like Me Better.mp3"
    },
    {
        name: "I Want It That Way",
        artist: "Backstreet Boys",
        image: "https://yzwbeast.github.io/comfort-zone/I-Want-It-That-Way.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I Want It That Way.mp3"
    },
    {
        name: "I'm Not The Only One",
        artist: "Sam Smith",
        image: "https://yzwbeast.github.io/comfort-zone/I-m-Not-The-Only-One.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I'm Not The Only One.mp3"
    },
    {
        name: "I'm Yours",
        artist: "Jason Mraz",
        image: "https://yzwbeast.github.io/comfort-zone/I-m-Yours.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/I'm Yours.mp3"
    },
    {
        name: "IDGAF",
        artist: "Dua Lipa",
        image: "https://yzwbeast.github.io/comfort-zone/IDGAF.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/IDGAF.mp3"
    },
    {
        name: "If I Ain't Got You",
        artist: "Alicia Keys",
        image: "https://yzwbeast.github.io/comfort-zone/If-I-Ain-t-Got-You.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/If I Ain't Got You.mp3"
    },
    {
        name: "It Must Have Been Love - From the Film 'Pretty Woman'",
        artist: "Roxette",
        image: "https://yzwbeast.github.io/comfort-zone/It-Must-Have-Been-Love.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/It Must Have Been Love - From the Film 'Pretty Woman'.mp3"
    },
    {
        name: "Just Give Me a Reason",
        artist: "P!nk/Nate Ruess",
        image: "https://yzwbeast.github.io/comfort-zone/Just-Give-Me-a-Reason.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Just Give Me a Reason.mp3"
    },
    {
        name: "Just the Way You Are",
        artist: "Bruno Mars",
        image: "https://yzwbeast.github.io/comfort-zone/Just-the-Way-You-Are.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Just the Way You Are.mp3"
    },
    {
        name: "Lavender Haze",
        artist: "Taylor Swift",
        image: "https://yzwbeast.github.io/comfort-zone/Lavender-Haze.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Lavender Haze.mp3"
    },
    {
        name: "Let Me Down Slowly",
        artist: "Alec Benjamin",
        image: "https://yzwbeast.github.io/comfort-zone/Let-Me-Down-Slowly.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Let Me Down Slowly.mp3"
    },
    {
        name: "Let Me Love You",
        artist: "DJ Snake/Justin Bieber",
        image: "https://yzwbeast.github.io/comfort-zone/Let-Me-Love-You.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Let Me Love You.mp3"
    },
    {
        name: "Let You Down",
        artist: "NF",
        image: "https://yzwbeast.github.io/comfort-zone/Let-You-Down.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Let You Down.mp3"
    },
    {
        name: "Lose You To Love Me",
        artist: "Selena Gomez",
        image: "https://yzwbeast.github.io/comfort-zone/Lose-You-To-Love-Me.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Lose You To Love Me.mp3"
    },
    {
        name: "Love Me Like You Do - From ‘Fifty Shades Of Grey’",
        artist: "Ellie Goulding",
        image: "https://yzwbeast.github.io/comfort-zone/Love-Me-Like-You-Do---From--Fifty-Shades-Of-Grey-.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Love Me Like You Do - From ‘Fifty Shades Of Grey’.mp3"
    },
    {
        name: "Love On The Brain",
        artist: "Rihanna",
        image: "https://yzwbeast.github.io/comfort-zone/Love-On-The-Brain.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Love On The Brain.mp3"
    },
    {
        name: "Love Yourself",
        artist: "Justin Bieber",
        image: "https://yzwbeast.github.io/comfort-zone/Love-Yourself.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Love Yourself.mp3"
    },
    {
        name: "lovely (with Khalid)",
        artist: "Billie Eilish/Khalid",
        image: "https://yzwbeast.github.io/comfort-zone/lovely-with-Khalid.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/lovely (with Khalid).mp3"
    },
    {
        name: "Lover",
        artist: "Taylor Swift",
        image: "https://yzwbeast.github.io/comfort-zone/Lover.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Lover.mp3"
    },
    {
        name: "Memories",
        artist: "Maroon 5",
        image: "https://yzwbeast.github.io/comfort-zone/Memories.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Memories.mp3"
    },
    {
        name: "Night Changes",
        artist: "One Direction",
        image: "https://yzwbeast.github.io/comfort-zone/Night-Changes.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Night Changes.mp3"
    },
    {
        name: "Paradise",
        artist: "Coldplay",
        image: "https://yzwbeast.github.io/comfort-zone/Paradise.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Paradise.mp3"
    },
    {
        name: "Perfect",
        artist: "Ed Sheeran",
        image: "https://yzwbeast.github.io/comfort-zone/Perfect.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Perfect.mp3"
    },
    {
        name: "Photograph",
        artist: "Ed Sheeran",
        image: "https://yzwbeast.github.io/comfort-zone/Photograph.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Photograph.mp3"
    },
    {
        name: "PILLOWTALK",
        artist: "ZAYN",
        image: "https://yzwbeast.github.io/comfort-zone/PILLOWTALK.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/PILLOWTALK.mp3"
    },
    {
        name: "Rewrite The Stars (with James Arthur & Anne-Marie)",
        artist: "James Arthur/Anne-Marie",
        image: "https://yzwbeast.github.io/comfort-zone/Rewrite-The-Stars-with-James-Arthur-Anne-Marie.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Rewrite The Stars (with James Arthur & Anne-Marie).mp3"
    },
    {
        name: "Riptide",
        artist: "Vance Joy",
        image: "https://yzwbeast.github.io/comfort-zone/Riptide.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Riptide.mp3"
    },
    {
        name: "Royals",
        artist: "Lorde",
        image: "https://yzwbeast.github.io/comfort-zone/Royals.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Royals.mp3"
    },
    {
        name: "Rude",
        artist: "MAGIC!",
        image: "https://yzwbeast.github.io/comfort-zone/Rude.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Rude.mp3"
    },
    {
        name: "Say You Won't Let Go",
        artist: "James Arthur",
        image: "https://yzwbeast.github.io/comfort-zone/Say-You-Won-t-Let-Go.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Say You Won't Let Go.mp3"
    },
    {
        name: "Scared to Be Lonely",
        artist: "Martin Garrix/Dua Lipa",
        image: "https://yzwbeast.github.io/comfort-zone/Scared-to-Be-Lonely.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Scared to Be Lonely.mp3"
    },
    {
        name: "See You Again (feat. Charlie Puth)",
        artist: "Wiz Khalifa/Charlie Puth",
        image: "https://yzwbeast.github.io/comfort-zone/See-You-Again-feat-Charlie-Puth.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/See You Again (feat. Charlie Puth).mp3"
    },
    {
        name: "Señorita",
        artist: "Shawn Mendes/Camila Cabello",
        image: "https://yzwbeast.github.io/comfort-zone/Señorita.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Señorita.mp3"
    },
    {
        name: "Sign of the Times",
        artist: "Harry Styles",
        image: "https://yzwbeast.github.io/comfort-zone/Sign-of-the-Times.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Sign of the Times.mp3"
    },
    {
        name: "Silence",
        artist: "Marshmello/Khalid",
        image: "https://yzwbeast.github.io/comfort-zone/Silence.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Silence.mp3"
    },
    {
        name: "Slow Hands",
        artist: "Niall Horan",
        image: "https://yzwbeast.github.io/comfort-zone/Slow-Hands.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Slow Hands.mp3"
    },
    {
        name: "Someone Like You",
        artist: "Adele",
        image: "https://yzwbeast.github.io/comfort-zone/Someone-Like-You.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Someone Like You.mp3"
    },
    {
        name: "Someone You Loved",
        artist: "Lewis Capaldi",
        image: "https://yzwbeast.github.io/comfort-zone/Someone-You-Loved.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Someone You Loved.mp3"
    },
    {
        name: "Stay With Me",
        artist: "Sam Smith",
        image: "https://yzwbeast.github.io/comfort-zone/Stay-With-Me.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Stay With Me.mp3"
    },
    {
        name: "Story of My Life",
        artist: "One Direction",
        image: "https://yzwbeast.github.io/comfort-zone/Story-of-My-Life.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Story of My Life.mp3"
    },
    {
        name: "Stuck with U (with Justin Bieber)",
        artist: "Ariana Grande/Justin Bieber",
        image: "https://yzwbeast.github.io/comfort-zone/Stuck-with-U-with-Justin-Bieber.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Stuck with U (with Justin Bieber).mp3"
    },
    {
        name: "Sugar",
        artist: "Maroon 5",
        image: "https://yzwbeast.github.io/comfort-zone/Sugar.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Sugar.mp3"
    },
    {
        name: "Sunflower - Spider-Man: Into the Spider-Verse",
        artist: "Post Malone/Swae Lee",
        image: "https://yzwbeast.github.io/comfort-zone/Sunflower---Spider-Man--Into-the-Spider-Verse.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Sunflower - Spider-Man: Into the Spider-Verse.mp3"
    },
    {
        name: "The Scientist",
        artist: "Coldplay",
        image: "https://yzwbeast.github.io/comfort-zone/The-Scientist.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/The Scientist.mp3"
    },
    {
        name: "Thinking out Loud",
        artist: "Ed Sheeran",
        image: "https://yzwbeast.github.io/comfort-zone/Thinking-out-Loud.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Thinking out Loud.mp3"
    },
    {
        name: "Too Good At Goodbyes",
        artist: "Sam Smith",
        image: "https://yzwbeast.github.io/comfort-zone/Too-Good-At-Goodbyes.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Too Good At Goodbyes.mp3"
    },
    {
        name: "Until I Found You (with Em Beihold) - Em Beihold Version",
        artist: "Stephen Sanchez/Em Beihold",
        image: "https://yzwbeast.github.io/comfort-zone/Until-I-Found-You-with-Em-Beihold-Em-Beihold-Version.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Until I Found You (with Em Beihold) - Em Beihold Version.mp3"
    },
    {
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        image: "https://yzwbeast.github.io/comfort-zone/Watermelon-Sugar.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Watermelon Sugar.mp3"
    },
    {
        name: "What A Time (feat. Niall Horan)",
        artist: "Julia Michaels/Niall Horan",
        image: "https://yzwbeast.github.io/comfort-zone/What-A-Time-feat-Niall-Horan.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/What A Time (feat. Niall Horan).mp3"
    },
    {
        name: "When I Was Your Man",
        artist: "Bruno Mars",
        image: "https://yzwbeast.github.io/comfort-zone/When-I-Was-Your-Man.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/When I Was Your Man.mp3"
    },
    {
        name: "when the party's over",
        artist: "Billie Eilish",
        image: "https://yzwbeast.github.io/comfort-zone/when-the-party-s-over.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/when the party's over.mp3"
    },
    {
        name: "Where Is The Love?",
        artist: "Black Eyed Peas",
        image: "https://yzwbeast.github.io/comfort-zone/Where-Is-The-Love.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Where Is The Love?.mp3"
    },
    {
        name: "willow",
        artist: "Taylor Swift",
        image: "https://yzwbeast.github.io/comfort-zone/willow.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/willow.mp3"
    },
    {
        name: "Wish You The Best",
        artist: "Lewis Capaldi",
        image: "https://yzwbeast.github.io/comfort-zone/Wish-You-The-Best.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Wish You The Best.mp3"
    },
    {
        name: "Wolves",
        artist: "Selena Gomez/Marshmello",
        image: "https://yzwbeast.github.io/comfort-zone/Wolves.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Wolves.mp3"
    },
    {
        name: "Wrecking Ball",
        artist: "Miley Cyrus",
        image: "https://yzwbeast.github.io/comfort-zone/Wrecking-Ball.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Wrecking Ball.mp3"
    },
    {
        name: "Yellow",
        artist: "Coldplay",
        image: "https://yzwbeast.github.io/comfort-zone/Yellow.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Yellow.mp3"
    },
    {
        name: "you broke me first",
        artist: "Tate McRae",
        image: "https://yzwbeast.github.io/comfort-zone/you-broke-me-first.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/you broke me first.mp3"
    },
    {
        name: "Young Dumb & Broke",
        artist: "Khalid",
        image: "https://yzwbeast.github.io/comfort-zone/Young-Dumb-&-Broke.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://yzwbeast.github.io/comfort-zone/Young Dumb & Broke.mp3"
    },
    // {
    //   name: "2002",
    //   artist: "2002",
    //   image: "https://yzwbeast.github.io/comfort-zone/2002.jpg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    //   path: "https://yzwbeast.github.io/comfort-zone/2002.mp3"
    // },


];

function random_bg_color() {

    // Get a number between 64 to 256 (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    // Construct a color withe the given values
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

    // Set the background to that color
    document.body.style.background = bgColor;
}

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "正在播放 " + track_list.length + " 首歌中的第 " + (track_index + 1) + " 首 ";

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
    random_bg_color();
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);

        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}