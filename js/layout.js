(function(win) {
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid;

    function refreshRem() {
        // 获取当前窗口的宽度
        var width = docEl.getBoundingClientRect().width;
        // 大于640px 按640算
        if (width > 640) { width = 640 }
        // 把窗口的宽度固定分为10份 也就是10rem 
        // 按视觉稿640算  640/10=64px  那么1rem = 64px
        // 640视觉中 80px*80px的按钮 转换为rem  80/64 = 1.25rem
        // 按钮的宽高固定为  1.25rem * 1.25rem
        // 当窗口宽度缩放为 320px的时候
        // 那么 1rem = 32px 
        // 原来 80px*80px的按钮现在变为 1.25rem * 32px = 40px
        // 按钮变为 40px * 40px
        // 其他宽度也类似
        // 
        // cms做法也类似
        // 只是我们把窗口宽度固定分为 6.4份，即6.4rem
        // 所以 1rem = 100px
        // 640视觉中 80px*80px的按钮 转换为rem  80/100 = 0.8rem
        // ....其他也差不多
        // 
        // 
        // 对比
        // 其实也就是计算rem的问题 视觉稿量出来的值  除64 或 100的问题
        // 除100 总比 除64 好口算
        // 就算用sass写个 @function px2rem代替口算
        // .8rem 总比输入 px2rem(80)少几个字符
        // 
        // 
        var rem = width / 10;  // cms 只要把这行改成  var rem = width /640 * 100 
        docEl.style.fontSize = rem + "px";
        remCalc.rem = rem;
        //误差、兼容性处理
        var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
        if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
            var remScaled = rem * rem / actualSize;
            docEl.style.fontSize = remScaled + "px"
        }
    }

    //函数节流，避免频繁更新
    function dbcRefresh() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100)
    }

    //窗口更新动态改变font-size
    win.addEventListener("resize", function() { dbcRefresh() }, false);

    //页面显示的时候再计算一次   难道切换窗口之后再切换来窗口大小会变?....
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) { dbcRefresh() }
    }, false);
    refreshRem();
    remCalc.refreshRem = refreshRem;
    remCalc.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === "string" && d.match(/rem$/)) { val += "px" }
        return val
    };
    remCalc.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === "string" && d.match(/px$/)) { val += "rem" }
        return val
    };
    win.remCalc = remCalc
})(window);

// 考拉移动端全站使用rem的不是很多
// 主要用100%布局 比如width、height、padding 
// 也有直接用px  字体大小使用px固定不变
// 还有使用em的  基于font-size 定line-height
// 全站元素使用 box-sizing: border-box
// 多行省略号 text-overflow: ellipsis; -webkit-line-clamp: 2;
// 非主要页面很多都是图片 影响seo 看得出很缺前端
// 使用rem 最好文字都指定字体大小  不然会继承html的font-size