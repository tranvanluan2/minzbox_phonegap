/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    $("#login-button").bind("click", function() {
        $(this).attr("disabled","disabled");
        var username = $("#username").val();
        var password = $("#password").val();
        var remember = $("#remember-me").is(":checked");
        $.mobile.loading("show");
        
        $.post('http://ideamining.zapto.org:8080/firstapp/login_process_app.php',
        {username:username, password:password}).done( function(data) {
            var result= jQuery.parseJSON(data);
            $.mobile.loading("hide");
            if(parseInt(result['id']) > 0)
                {
                    $.mobile.changePage("#main-page");
                }
            $("#login-button").removeAttr("disabled");  
        });

    });
    $("#register-button").bind("click",function(){ 
       $.mobile.changePage("#register-page"); 
    });
    $("#register-submit").bind("click", function(){
       $(this).attr("disabled","disabled");
       var username = $("#username_register").val();
        var password = $("#password_register").val();
        var email = $("#email_register").val();
        var fullname = $("#fullname_register").val();
    });
    $("#show-image").bind("click", function(){
//        $.mobile.changePage("#register-page");
        $.post('http://ideamining.zapto.org:8080/firstapp/getImage.php',
        {}).done(function(data){
            var result = jQuery.parseJSON(data);
            var id = result['id'];
            var link = result['link'];
            var pubdate = result['pubdate'];
            $("#main-page").append(
                "<div class='imageBox' id='"+id+"'><span class='imageContent'><img class='image' src='"+link+"'/></span></div>"
            );
        });
        $.mobile.changePage("#main-page"); 
        
    });
});


