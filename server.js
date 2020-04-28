/*jshint -W033 */
var express=require('express')
var moment=require('moment')
var app =express()

function onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("dispaly","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
}


app.use(express.static(__dirname+'/public'));






var port=3000
app.listen(port)
console.log('Server listening on'+port)