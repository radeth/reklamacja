'use strict';
$(document).ready(function(){
    
    console.log('test');
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    removeValue();
    
})

function mailValidation(){
    $('input').on('click',function(){
        console.log('test');
        $(this).removeAttr('value');
    })
       
}
function phoneValidation(){
    
}
function cardValidation(){
    
}
                  