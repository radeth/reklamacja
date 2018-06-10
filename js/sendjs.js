'use strict';
$(document).ready(function () {
    setCookie();
    setUserName();
})

function validation() {
    let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regNumbs = /\d/;
    console.log($('#email').val());
        if (regMail.test($('#email').val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
        else{
            err = false;
            $(this).css('border-color', '#aaa');
        }
        if (regNumbs.test($('#phone_number').val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
        else{
            err = false;
            $(this).css('border-color', '#aaa');
        }
        if (regMail.test($('#card_nubmer').val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
       else{
            err = false;
            $(this).css('border-color', '#aaa');
        }  
        return err;
}
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

function messageAlert() {
    var err = true;
    $('#send').on('click', function () {
        if(validation()==true)
        alert('wprowadz prawidlowe dane')
        else{
            send();
        }
    })
}

function send() {
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