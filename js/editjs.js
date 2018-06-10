'use strict';
$(document).ready(function () {
    search();
    sendEdit();
})

function search() {
    $('#queryButton').on('click', function () {
        $.ajax({
            url: 'php/search.php',
            type: 'POST',
            dataType: 'json',
            data: {
                queryType: $('#queryType').val(),
                queryInq: $('#query').val()
            },
            success: function (result) {
                let resHTML = '';
                for (var i = 0; i < result.length; i++) {
                    resHTML += '<a href="#" class="member" id=' + i + '>' + result[i].id + '</a>'+result[i].description+'<br>';
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
                alert();
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
}
function alert(){
    console.log('test')
    alert('dokonano edycji')
}
