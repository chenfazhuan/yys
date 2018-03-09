$('#header>.container>div>ul>li').click(function(e){
    "use strict";
    e.preventDefault();
    $(this).addClass("hover").siblings().removeClass("hover");
});
$('#nav>.pic_list>ul>li').mouseenter(function(){
    "use strict";
    $(this).addClass("hover").siblings().removeClass("hover");
});