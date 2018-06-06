'use strict';
$(document).ready(function(){ 
  console.log('test');
  var d = new Date();
  
  removeValue();
  mailValidation();
  phoneValidation();
  cardValidation();	
  setCookie();
  setUserName();    
    

  

})

function removeValue() {
  $('input').on('click', function() {
    $(this).removeAttr('value');
  })

}

function mailValidation() {
  let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $('input:nth-of-type(1)').on('keyup', function() {
    console.log(regExp.test($('input:nth-of-type(1)').val()));
    if (regExp.test($('input:nth-of-type(1)').val()) == false) {
      $(this).css('border-color', 'red');
    }
    if (regExp.test($('input:nth-of-type(1)').val()) == true) {
      $(this).css('border-color', '#aaa');
    }
  })
}
function phoneValidation(){
    let regExp =/\d/;
	$('input:nth-of-type(2)').on('keyup', function() {
    console.log(regExp.test($('input:nth-of-type(2)').val()));
    if (regExp.test($('input:nth-of-type(2)').val()) == false) {
      $(this).css('border-color', 'red');
    }
    if (regExp.test($('input:nth-of-type(2)').val()) == true) {
      $(this).css('border-color', '#aaa');
    }
  })
}
function cardValidation(){
    let regExp =/\d/;
	$('input:nth-of-type(3)').on('keyup', function() {
    console.log(regExp.test($('input:nth-of-type(3)').val()));
    if (regExp.test($('input:nth-of-type(3)').val()) == false) {
      $(this).css('border-color', 'red');
    }
    if (regExp.test($('input:nth-of-type(3)').val()) == true) {
      $(this).css('border-color', '#aaa');
    }
  })
}
function setCookie(){
    $('input:nth-of-type(4)').on('keyup',function(){
        this._user = $('input:nth-of-type(4)').val()
        document.cookie = 'user' + "=" + this._user;
    })
}
function setUserName(){
    console.log('test')
    let cookie = document.cookie.split('=')
    let user = cookie[1]
    console.log(user);
    $('input:nth-of-type(4)').attr('value', user)
    
}