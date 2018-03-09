$(".news_wrap>div:first-child").on("mouseenter",'a',function(){
    "use strict";
    $(this).addClass("hover").siblings().removeClass("hover");
    var i=$(this).index()/2;
    var c=i+1;
    var left=c*-500+500;
    $('#section>#news>div>.news_wrap div:nth-child(2)').stop().animate({
        'left':left
    },500);
});
$(".actor_left").click(function(e){
    "use strict";
    e.preventDefault();
    if(!$(".shishen_actor ul:first-child").is(":animated")){
    var left=$(".shishen_actor ul:first-child").css("left");
    //else{$(".actor_left").css("display","none");}
    var left1=parseInt(left)+828;
    $(".shishen_actor ul:first-child").stop().animate({"left":left1},1000,"swing");
    if(left1==0){
        $(".actor_left").css("display","none");
    }else if(left1!=0){ $(".actor_left").css("display","inline-block");}
    if(left1==-4140){
        $(".actor_right").css("display","none");
    }else if(left1!=-4140){ $(".actor_right").css("display","inline-block");}
    }
});
$(".actor_right").click(function(e){
    "use strict";
    e.preventDefault();
    if(!$(".shishen_actor ul:first-child").is(":animated")){
    var left=$(".shishen_actor ul:first-child").css("left");
    var left1=parseInt(left)-828;
    $(".shishen_actor ul:first-child").stop().animate({"left":left1},1000,"swing");
    if(left1==0){
        $(".actor_left").css("display","none");
    }else if(left1!=0){ $(".actor_left").css("display","inline-block");}
    if(left1==-4140){
        $(".actor_right").css("display","none");
    }else if(left1!=-4140){ $(".actor_right").css("display","inline-block");}
    }
});
$('.strategy_right_top').on("mouseenter","a.safe_a",function(){
    "use strict";
    var i=$(this).index()/2;
    console.log(i);
    var left=-790*(i-1);
$("#strategy>.strategy_right>span").stop().animate({'left':left},500);
});
$('.shishen_actor1 ul').on('click','li',function(){
    "use strict";
    var i=$(this).index();
   $(this).parent().siblings(":not(ul)").eq(i).css("display",'flex').siblings(":not(ul)").css("display",'none');
    $(this).children().css('display','block').parent().siblings().children().css("display",'none');
    $(this).addClass('shishen_id_active').siblings().removeClass('shishen_id_active');
});
$('#shishen>#safe a:nth-child(3)').mouseenter(function(e){
    "use strict";
    e.preventDefault();
    $('#shishen_main').css('display','block');
    $('.shishen_actor1').css('display','none');
})
$('#shishen>#safe a:nth-child(5)').mouseenter(function(e){
    "use strict";
    e.preventDefault();
    $('#shishen_main').css('display','none');
    $('.shishen_actor1').css('display','flex');
})
$('.container_top ul').on('mouseenter','li:not(:last-child)',function(){
    "use strict";
    console.log($(this).index());
    var x=$(this).index()*(-1200);
    $('.contribute_bo').stop().animate({left:x},800);
})