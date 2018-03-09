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
$('#foot_article').mouseenter(function(e){
    "use strict";
    $(this).animate({height:50},500);
    $('#foot_article div:nth-child(2) a').css('top','40%');
});
$('#foot_article').mouseleave(function(e){
    "use strict";
    $(this).animate({height:15},500);
    $('#foot_article div:nth-child(2) a').css('top','100%');
});

$(window).scroll(function(){
    "use strict";
    var a=document.body.scrollTop;
    var h=4788;
    //console.log(a);
    var b=a/h*100;
    //console.log(b.toFixed(2));
    $('#foot_article div:nth-child(2) div').css('width',`${b}%`);

});