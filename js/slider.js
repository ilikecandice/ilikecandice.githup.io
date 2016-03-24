/**
 * Created by CC on 2015/12/13.
 */
/**
 * Created by CC on 2015/12/13.
 */
window.onload = function() {
    var box = document.getElementById("productSlider");
    var slider = document.getElementById("sliderImg");
    var Lis = slider.children;
    var point = document.getElementById("sliderPiont");
    var points = point.children;
    var arrow =document.getElementById('arrow');
    var prev = document.getElementById("pre");
    var next = document.getElementById("next");
    var json = {zIndex: 50, opacity: 100}


    //鼠标移上，小箭头变化

    //自动获取小圆点
    // for (var i = 0; i < Lis.length; i++) {
    //     var span = document.createElement("span");
    //     circle.appendChild(span);
    //     circle.children[i].innerHTML = i + 1;
    // }
    // circle.children[0].className = "current";
    // animate(Lis[0],{zIndex: 50, opacity: 100});
    //点击左右箭头事件;
    // var a_s = arrow.children;
    // console.log(a_s.length);
    var iNow = 0;
    //Change();
        next.onclick = function () {
               // Change(true);
                animate(Lis[iNow],{zIndex: 1, opacity:0})
                iNow--;
                if (iNow < 0) {
                    iNow = Lis.length - 1;
                }
                animate(Lis[iNow],{zIndex: 0, opacity: 100})
                square();
            }
        prev.onclick=function() {
                //Change(false);
                animate(Lis[iNow],{zIndex: 1, opacity: 0})
                iNow++;
                if (iNow > Lis.length - 1) {
                    iNow = 0;
                }
                animate(Lis[iNow],{zIndex: 0, opacity: 100})
                square();
            }

    //小圆点点击事件
    for (var i = 0; i < points.length; i++) {
        points[i].index = i;
        points[i].onclick = function () {
            for (var i = 0; i < points.length; i++) {
                points[i].className = "";
                animate(Lis[iNow],{zIndex: 1, opacity: 0});
            }
            this.className = "current";
            animate(Lis[this.index],{zIndex: 0, opacity: 100});
            iNow=this.index;
            }
        }

    function square() {
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        points[iNow].className = "current";
    }

    var timer = null;
    clearInterval(timer);
    timer = setInterval(autoplay,3000);
    function autoplay(){
        animate(Lis[iNow],{zIndex: 1, opacity: 0})
        iNow++;
        if (iNow > Lis.length - 1) {
            iNow = 0;
        }
        animate(Lis[iNow],{zIndex: 0, opacity: 100})
        square();
    }
    box.onmouseover = function(){
        clearInterval(timer);
    }
    box.onmouseout = function(){
        timer = setInterval(autoplay,2000);
    }
}
