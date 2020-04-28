/*jshint -W033 */
var express=require('express')
var moment=require('moment')
var app =express()

function onSignIn(googleUser)
{
    var profile=googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
}

function signOut()
{
var auth2= gapi.auth2.getAuthInstance();
auth2.signOut().then(function()
{
    alert("You have been successfully signed out")
    $(".g-signin2").css("display","block");
    $(".data").css("display","none");
})
}

app.use(express.static(__dirname+'/public'));
var port=3000
app.listen(port)
console.log('Server listening on'+port)