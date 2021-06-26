windowAddMouseWheel();

function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        var nav = document.getElementById('nav');
        var clientHeight = document.documentElement.clientHeight;
        e = e || window.event;
        if (e.wheelDelta) {  //判斷瀏覽器IE，谷歌滑輪事件
            if (e.wheelDelta > 0) { //當滑輪向上滾動時
                // alert("滑輪向上滾動");
               console.log(document.documentElement.scrollTop);
            }
            if (e.wheelDelta < 0) { //當滑輪向下滾動時
                // alert("滑輪向下滾動");
                nav.style.background='#D0D0D0';
                console.log(document.documentElement.scrollTop);
            }
        } else if (e.detail) {  //Firefox滑輪事件
            if (e.detail> 0) { //當滑輪向上滾動時
                // alert("滑輪向上滾動");
            }
            if (e.detail< 0) { //當滑輪向下滾動時
                // alert("滑輪向下滾動");
                nav.style.background='#D0D0D0';
            }
        }
        if($(document).scrollTop()==0){
            // console.log('hey');
            nav.style.background='#d0d0d000';
        }
        
    };
    //給頁面繫結滑輪滾動事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
//滾動滑輪觸發scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc;
}
