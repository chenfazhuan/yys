function jinru(){
    "use strict";
    if($(".article_scan i").hasClass('animated rotateIn')){
        $(".article_scan i").removeClass('animated rotateIn');
    }else{
        $(".article_scan i").addClass('animated rotateIn');
    }
};
var timer;
$(".article_scan i").mouseenter(function(){
    "use strict";
    jinru();
    timer=setInterval(jinru, 1000);
});
$(".article_scan i").mouseout(function(){
    "use strict";
    clearInterval(timer);
});
$(".article_scan a").click(function(e){
    "use strict";
    e.preventDefault();
    $("#article").css("display","none");
});
//$('.section_nav li').click(function(e){
//    "use strict";
//    e.preventDefault();
//    $(this).addClass('hover').siblings().removeClass('hover');
//});
$('.section_nav ul').on('click','li',function(e){
    "use strict";
    e.preventDefault();
    $(this).addClass('hover').siblings().removeClass('hover');
    console.log($(this).index());
    var i=$(this).index()+1;
    $(`.section_main${i}`).css('display','block');
    $(`.ss>div:not(.section_main${i})`).css('display','none');
})