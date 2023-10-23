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