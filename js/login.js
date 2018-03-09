//验证码
$(function() {
    $('.login_main ul').on('focusout','input',function(e){
        "use strict";
        var i=$(this).parent().index();
        var uname=[/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,17}$/,/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,17}$/,/\*/,/\*/,/^1[34578]\d{9}$/];
        if(i==0||i==1||i==4){
        var bool=uname[i].test($(this).val());
            if(bool){
                $(`.yzm${i} b`).css({'display':'block','background-position':'-30px -102px'});
                $(`.yzm${i} a`).css('display','none');
            }
            else{ $(`.yzm${i} b`).css({'display':'block','background-position':'-65px -102px'});
                $(`.yzm${i} a`).css('display','block');
            }
        }
        if(i==2){
           if($(this).val()!=$("#upwd").val()){
               $(`.yzm2 b`).css({'display':'block','background-position':'-65px -102px'});
               $(`.yzm2 a`).css('display','block');
           }
            else{
               $(`.yzm2 b`).css('display','none');
               $(`.yzm2 a`).css('display','none');
           }
        }
});
    var code = 0;

    function codes(){
        var ranColor = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6); //随机生成颜色
        // alert(ranColor)
        var ranColor2 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        var num1 = Math.floor(Math.random() * 100);
        var num2 = Math.floor(Math.random() * 100);
        code = num1 + num2;
        $("#code").html(num1 + "+" + num2 + "=?");
        if ($("#code").hasClass("nocode")) {
            $("#code").removeClass("nocode");
            $("#code").addClass("code");
        }
        $("#code").css('background',ranColor);
        $("#code").css('color',ranColor2);
    }
    codes()
    $("#code").on('click',codes);
    $('#testcode').focusout(function(){
        if ($('#code').prev().val() == code) {
            $(`.yzm5 b`).css('display','none');
            $(`.yzm5 a`).css('display','none');
        } else {
            $(`.yzm5 b`).css({'display':'block','background-position':'-65px -102px'});
            $(`.yzm5 a`).css('display','block');
        }})

    $(".btn").click(function(){
        //连接数据库
        var n=$("#uname").val();
        var p=$("#upwd").val();
        var i=$("#phone").val();
        console.log($('ul li').find('input'))
        if($('.cb').is(':checked')&&$('.yzm a').css('display')=='none'&&$('ul input').val()!=''){
        $.ajax({
            type:'POST',
            url:'/register',
            data:{uname:n,upwd:p,phone:i},
            success:function(result){
                if(result==1){
                    console.log('成功');}
                else{console.log('失败');}
            }
        })}else{
            alert('请正确输入信息');
        }
    });
});

