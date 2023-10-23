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
        t1.onmouseenter = function() {
            showTooltip(this, "t1", '进入全屏模式', 88);
        };
        t2.onmouseenter = function() {
            showTooltip(this, "t2", '退出全屏模式', 88);
        };
    }