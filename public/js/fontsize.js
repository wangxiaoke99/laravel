 //orientationchange方向改变事件
  (function (doc, win) {
        var docEl = doc.documentElement,//根元素html
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            //判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                //把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。
                if(clientWidth > 1024){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        recalc();
        win.addEventListener(resizeEvt, recalc, false);//addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值
        doc.addEventListener('DOMContentLoaded', recalc, false);//绑定浏览器缩放与加载时间
    })(document, window);