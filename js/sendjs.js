'use strict';
$(document).ready(function () {
    validation();
    setCookie();
    setUserName();
})

function validation() {
    var err = true;
    let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regNumbs = /\d/;
    $('#email').on('keyup', function () {
        if (regMail.test($(this).val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
        if (regMail.test($(this).val()) == true) {
            err = false;
            $(this).css('border-color', '#aaa');
        }
    })
    $('#phone_number').on('keyup', function () {
        if (regNumbs.test($('#phone_number').val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
        if (regNumbs.test($('#phone_number').val()) == true) {
            err = false;
            $(this).css('border-color', '#aaa');
        }
    })
    $('#card_number').on('keyup', function () {
        if (regMail.test($(this).val()) == false) {
            err = true;
            $(this).css('border-color', 'red');
        }
        if (regNumbs.test($(this).val()) == true) {
            err = false;
            $(this).css('border-color', '#aaa');
        }
        
        
    })
    messageAlert(err);
}

function setCookie() {
    $('#send').on('click', function () {
        this._user = $('#user').val()
        document.cookie = 'user' + "=" + this._user;
    })
}

function setUserName() {
    console.log('test')
    let cookie = document.cookie.split('=')
    let user = cookie[1]
    console.log(user);
    $('#user').attr('value', user)
}

function messageAlert(err) {
    $('#send').on('click', function () {
        if(err==true)
        alert('wprowadź prawidłowe dane');
        if(err=false)
            send();
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
            location.href('index.html')
        }
        , error: function (error) {
            console.log(error);
        }
    })
}