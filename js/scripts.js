
'use strict';
$(document).ready(function () {
    send();
    search();
    sendEdit();
    removeValue();
    mailValidation();
    phoneValidation();
    cardValidation();
    setCookie();
    setUserName();
})

function send() {
    $('#send').on('click', function () {
        console.log('test')
        $.ajax({
            url: 'php/dbsend.php',
            type: 'POST',
            data: {
                type: $('#type').val(),
                email: $('#email').val(),
                card_number: $('#card_number').val(),
                phone_number: $('#phone_number').val(),
                user: $('#user').val(),
                content: $('#content').val(),
                description: $('#description').val(),
                date: $('#date').val(),

            },
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    })

}
function search() {
    $('#queryButton').on('click', function () {
        $.ajax({
            url: 'php/search.php',
            type: 'POST',
            dataType: 'json',
            data: {
                queryType: $('#query').val()
            },
            success: function (result) {
                let resHTML = '';
                for (var i = 0; i < result.length; i++) {
                    resHTML += '<a href="#" class="member" id=' + i + '>' + result[i].id + '</a>' + ' ' + result[i].date + ' ' + result[i].type + ' ' + result[i].content +' '+result[i].description+'<br>';
                    $('#result').html(resHTML);
                }
                edit(result);
            },
            error: function (error) {
                console.log(error);
            }
        });

    })
}
function edit(result) {
    $('.member').on('click', function () {
        var i = $(this).attr('id');
        $('#idNote').attr('value',result[i].id);
        $('#type').attr('value',result[i].type);
        $('#email').attr('value',result[i].email);
        $('#card_number').attr('value',result[i].card_number);
        $('#phone_number').attr('value',result[i].phone_number);
        $('#user').attr('value',result[i].user);
        $('#content').text(result[i].content);
        $('#description').text(result[i].description);
        $('#date').attr('value',result[i].date);
    })

}
function sendEdit() {
    $('#edit').on('click', function () {
        $.ajax({
            url: 'php/update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: $('#idNote').val(),
                type: $('#type').val(),
                date: $('#date').val(),
                email: $('#email').val(),
                card_number: $('#card_number').val(),
                phone_number: $('#phone_number').val(),
                user: $('#user').val(),
                content: $('#content').val(),
                description: $('#description').val(),
                
            },
            success: function (result) {
                console.log(result)
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
}
function removeValue() {
    $('input').on('click', function () {
        $(this).removeAttr('value');
    })
}
function mailValidation() {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $('input:nth-of-type(1)').on('keyup', function () {
        console.log(regExp.test($('input:nth-of-type(1)').val()));
        if (regExp.test($('input:nth-of-type(1)').val()) == false) {
            $(this).css('border-color', 'red');
        }
        if (regExp.test($('input:nth-of-type(1)').val()) == true) {
            $(this).css('border-color', '#aaa');
        }
    })
}
function phoneValidation() {
    let regExp = /\d/;
    $('input:nth-of-type(2)').on('keyup', function () {
        console.log(regExp.test($('input:nth-of-type(2)').val()));
        if (regExp.test($('input:nth-of-type(2)').val()) == false) {
            $(this).css('border-color', 'red');
        }
        if (regExp.test($('input:nth-of-type(2)').val()) == true) {
            $(this).css('border-color', '#aaa');
        }
    })
}
function cardValidation() {
    let regExp = /\d/;
    $('input:nth-of-type(3)').on('keyup', function () {
        console.log(regExp.test($('input:nth-of-type(3)').val()));
        if (regExp.test($('input:nth-of-type(3)').val()) == false) {
            $(this).css('border-color', 'red');
        }
        if (regExp.test($('input:nth-of-type(3)').val()) == true) {
            $(this).css('border-color', '#aaa');
        }
    })
}
function setCookie() {
    $('input:nth-of-type(4)').on('keyup', function () {
        this._user = $('input:nth-of-type(4)').val()
        document.cookie = 'user' + "=" + this._user;
    })
}
function setUserName() {
    console.log('test')
    let cookie = document.cookie.split('=')
    let user = cookie[1]
    console.log(user);
    $('input:nth-of-type(4)').attr('value', user)

}


