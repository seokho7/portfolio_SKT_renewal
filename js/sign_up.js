// ------------------------- sign_up ------------------------- //

//select style
$("#sign_male").change(function () {
    $(this).css({border: '1px solid var(--sub_color_orange)'});
});


const reqInputBox = $('.required input'),
    submitBtn = $('.sign_up_btn'),
    inputBox = $('form input');

let passwordBox = $('.password_box input'),
    signPassword = $('#sign_password'),
    checkPassword =$('#sign_check_password');

//submit animation
    submitBtn.click(function (e) {
          e.preventDefault();
        reqInputBox.each(function(){
              let value = $(this).val();
              if (value == '') {
                  $(this).addClass("error");
              }
              $(this).click(function () {
                  $(this).removeClass('error')
              });
            });

            if(signPassword.val() != checkPassword.val()){
                checkPassword.addClass('error')
            }
            if(reqInputBox.hasClass('error')){
                submitBtn.prop('disabled', true).text('다시 작성해주세요!');
            }
            
        });

        reqInputBox.focus(function () {
        let errorLength = $('.error').length;
        if (errorLength == 1) {
            submitBtn.prop('disabled', false).text('가입하기')   
        }
     
});
    
//input border
inputBox.each(function () {
    
    $(this).focus(function () {
        $(this).css({border: '1px solid var(--sub_color_orange)'});
    });

    $(this).blur(function () {
        $(this).css({ border: '1px solid #c2c2c2' });
        
        if ($(this).val().length >= 1) {
            $(this).css({border: '1px solid var(--sub_color_orange)'});
        } 
        
        if(signPassword.val() != checkPassword.val()){
            checkPassword.css({ border: '1px solid #c2c2c2' });
        }
        
    });
});

//password animation
passwordBox.each(function () {
    $(this).blur(function () {
        value = $(this).val().length;

        if (value >= 1) {
            let newIcon = $(this).siblings('.lock_icon').html('<i class="fas fa-lock-open"></i>')
            newIcon.css({color: 'var(--sub_color_orange)'})

            if(signPassword.val() == checkPassword.val()){
                checkPassword.siblings('.lock_icon').css({color: 'var(--sub_color_orange)'}).html('<i class="fas fa-lock-open"></i>').removeClass('error')
                
            }else{
                checkPassword.siblings('.lock_icon').css({color: 'var(--text-color)'}).html('<i class="fas fa-lock"></i>');
            }
        } else {
            newIcon = $(this).siblings('.lock_icon').html('<i class="fas fa-lock"></i>')
            newIcon.css({color: 'var(--text-color)'})
         }
    });
});

//email animation
$('.email_box input').focus(function () {
    $(this).attr('placeholder', '')
})
$('.email_box input').blur(function () {
    $(this).attr('placeholder', 'example@example.com')
})

    