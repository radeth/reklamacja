'use strict';
$(document).ready(function () {
    send();
    setCookie();
    setUserName();
})
function setCookie() {
    $('#send').on('click', function () {
        this._user = $('#user').val()
        document.cookie = 'user' + "=" + this._user;
    })
}
function setUserName() {
    let cookie = document.cookie.split('=')
    let user = cookie[1]
    console.log(user);
    $('#user').attr('value', user)
}
function validation(err){
    let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regNumbs = /\d/;
        if (regMail.test($('#email').val()) == false) {
            err = true;
            $('#email').css('border-color', 'red');
        }
        else{
            err = false;
            $('#email').css('border-color', '#aaa');
        }
        if (regNumbs.test($('#card_number').val()) == false) {
            err = true;
            $('#card_number').css('border-color', 'red');
        }
        else{
            err = false;
            $('#card_number').css('border-color', '#aaa');
        }  
        if (regNumbs.test($('#phone_number').val()) == false) {
            err = true;
            $('#phone_number').css('border-color', 'red');
        }
        else{
            err = false;
            $('#phone_number').css('border-color', '#aaa');
        }
        return err;
}
function send(){
    $('#send').on('click',function(){
        var err = true;
        if(validation(err)==false){
            sendAjax()
        }else{
            alert('wprowadz prawidłowe dane');
        }
    })
}
function sendAjax(){
        console.log('test')
        $.ajax({
            url: 'php/dbsend.php'
            , type: 'POST'
            , data: {
                type: $('#type').val()
                , email: $('#email').val()
                , card_number: $('#card_number').val()
                , phone_number: $('#phone_number').val()
                , user: $('#user').val()
                , content: $('#content').val()
                , description: $('#description').val()
                , date: $('#date').val()
            , }
            , success: function (result) {
                alert(result)
                location.href = './index.html'
            }
            , error: function (error) {
                console.log(error);
            }
        })
    }
    