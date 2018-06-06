
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

function send(d) {
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
    $('#button').on('click', function () {
        $.ajax({
            url: 'search.php',
            type: 'POST',
            dataType: 'json',
            data: {
                zapytanie: $('#zapytanie').val()
            },
            success: function (result) {
                let resHTML = '';
                for (var i = 0; i < result.length; i++) {
                    resHTML += '<a href="#" class="member" id=' + i + '>' + result[i].id + '</a>' + ' ' + result[i].date + ' ' + result[i].type + ' ' + result[i].text + '<br>';
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
        var id = $(this).attr('id')
        console.log(id);
        $('#id').attr('value', result[id].id);
        $('#date').attr('value', result[id].date);
        $('#type').attr('value', result[id].type);
        $('#text').attr('value', result[id].text);
    })

}
function sendEdit() {
    $('#edytuj').on('click', function () {
        $.ajax({
            url: 'update.php',
            type: 'POST',
            dataType: 'json',
            data: {
                id: $('#id').val(),
                text: $('#text').val()
            },
            success: function (result) {
                $('#editInfo').html('dokonano edycji');
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


