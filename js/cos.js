$(window).scroll(function(){
    var a=document.body.scrollTop;
    if(a>=620){
        $('#cos_main_top>a').css("display","block");
    }
    else{$('#cos_main_top>a').css("display","none");}
});
$('#header>.container>div>ul>li').click(function(e){
    "use strict";
    e.preventDefault();
    $(this).addClass("hover").siblings().removeClass("hover");
});

function waterfall(){
    "use strict";
    var dls=$('.cos_pic dl');
    var hArr=[];
    var w=340;//每个元素的宽度
    dls.each(function (index,value){
        var h=dls.eq(index).outerHeight();
        //每一个dl元素的高,
        if (index<3) {
            //3是列数
            hArr[index]=h;
            //确定第一行元素的高度;
            $(value).css({
                //$(value):将DOM对象转换成jQuery对象,才能继续使用jQuery方法;
                "top":0+"px",
                "left":(index)*w+"px"
            });
        }else{
            var minH=Math.min.apply(null,hArr);
            //得出列高数组中的最小高度;
            var minHIndex=$.inArray(minH,hArr);
            //$.inArray()方法得出元素(minH)在数组(hArr)中的index值;
            $(value).css({
                //$(value):将DOM对象转换成jQuery对象,才能继续使用jQuery方法;
                "top":minH+20+"px",
                "left":minHIndex*w+"px"
            });
            hArr[minHIndex]+=dls.eq(index).outerHeight()+20;
        }
    })
}
$(window).on("load",function () {
    "use strict";
    waterfall();
    var dataInt = [{"src":"(15)"},{"src":"(001)"},{"src":"(2)"},{"src":"(3)"},{"src":"(4)"}
        ,{"src":"(5)"},{"src":"(6)"},{"src":"(7)"},{"src":"(8)"},{"src":"(9)"},{"src":"(10)"},{"src":"(11)"},{"src":"(12)"},{"src":"(13)"},{"src":"(14)"},{"src":"(18)"},{"src":"(19)"}
    ];
    $(window).on("scroll",function () {
        var html='';
        $.each(dataInt,function (key,value) {
            html+=`
                <dl>
                <dt>
                    <img src=yys_cos/${value.src}>
                </dt>
                <dd>上传者:宁夏</dd>
                <dd>妖狐:西迟XY</dd>
                <dd>
                    <span>8</span>
                    <b>321</b>
                </dd>
            </dl>
                `;
        });
        $('.cos_pic').html(html);
        waterfall();
    })
})