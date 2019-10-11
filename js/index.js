//背景图片遍历
$(function () {
    var num = 2;
    $(".bg_img li").eq(num-1).addClass("show");
    setInterval(function(){
        if(num>3){
            num=0;
        };
        $(".bg_img li").eq(num).addClass("show").siblings().removeClass("show");
        num++;
    },5000);
    
})


$(function () {
    // section1文字样式
    $("h1.fade").addClass("fadesin1");
    $("h3.fade").toggleClass("fadesin2");
    $("span.fade").toggleClass("fadesin3");


});