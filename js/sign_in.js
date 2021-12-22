// ------------------------- sign_in ------------------------- //


const inputBox = $('main .login_left .required'),
    input = inputBox.find('input'),
    idBox = $('#user_id')
    checkBtn = $('label[for="checkbox"]'),
    submitBtn = $('section .logIn_btn');
let userIdVal;

    //id cookie
// $('#user_id').blur(function () {
//     userIdVal = $(this).val()
// });
// checkCookie('SKT_id_remember')
// function checkCookie(name) {
//     let cookies = document.cookie.split(';');
//     let visited = false;
    
    
//     let userIdarr = document.cookie.substr(name.length*2).split(';');
//     let userId = userIdarr[0];
//     for (ck of cookies) {
//         if (ck.indexOf(name) > -1) {
//             visited = true;
//         }
//     }
//     if (visited) {
//         $("input:checkbox[id='checkbox']").prop("checked", true);
//         idBox.val(userId)
//         checkBtn.click(function () {
//             deleteCookie('SKT_id_remember', userIdVal);
//         })
//     } else {
//         checkBtn.click(function () {
//             setcookie('SKT_id_remember', userIdVal, 30);
//         })
//     }
// }
// function setcookie(name, value, day){
//     let date = new Date();
//     date.setDate(date.getDate()+day);
    
//     let myCookie = '';
//     myCookie = `${name}=${value};Expires=${date.toUTCString()}`;   
    
//     document.cookie = myCookie;
// }

// function deleteCookie(name,value){
//     let date = new Date(); 
//     date.setDate(date.getDate()-1);

//     let myCookie = '';
//     myCookie = `${name}=${value};Expires=${date.toUTCString()}`; 

//     document.cookie = myCookie;
// }   데이터베이스 연동으로 구현!

// left form submit
submitBtn.click(function (e) {
    e.preventDefault();
    input.each(function () {
        let value = $(this).val();
        if (value == "") {
            $(this).addClass("error");
        } else {
            $(this).removeClass('error');
        }
    });
    if(input.hasClass('error')){
        $('#error_text').css({display: 'block'});
        submitBtn.prop('disabled', true).text('다시 작성해주세요!');
    };
    
});

input.each(function () {
    $(this).focus(function () {
        $(this).parent('p').addClass('focus')
        $(this).attr('placeholder','')
        $('#error_text').css({display: 'none'})
        submitBtn.prop('disabled', false).text('로그인')   
    });
    $(this).blur(function () {
        $(this).parent('p').removeClass('focus')
        $(this).attr('placeholder',$(this).attr('data-text'))
        let value = $(this).val();
            if(value.length > 0){
                $(this).siblings('.check_val').css({ color: 'var(--highlight_color_red)' })
            }
    });
});


// right
const qrNumber = $('#random_number');

//randomNumber
function randomNumber(min, max){
     let myNum = Math.floor(Math.random()*(max-min)) + min;
     return myNum; 
    }

    let newNumber = `${randomNumber(10, 99)} - ${randomNumber(101, 999)} - ${randomNumber(10, 99)}`
    qrNumber.text(newNumber)

//timer bar animation
let hideBar = $('.login_right .less_animation_bar #hide_bar')
let barMoveAmt = 0;
setInterval(function () {
    barMoveAmt += 160/20
    hideBar.stop().animate({right: barMoveAmt + 'px'});
    return barMoveAmt
}, 1000);

//timer(momentJS)
var duration = moment.duration({
    'minutes': 0,
    'seconds': 22
  });
  
  var timestamp = new Date(0, 0, 0, 2, 10, 30);
  var interval = 1;
  var timer = setInterval(function() {
    timestamp = new Date(timestamp.getTime() + interval * 1000);
  
    duration = moment.duration(duration.asSeconds() - interval, 'seconds');
    var min = duration.minutes();
    var sec = duration.seconds();
  
    sec -= 1;
    if (min < 0) return clearInterval(timer);
    if (min < 10 && min.length != 2) min = '0' + min;
    if (sec < 0 && min != 0) {
      min -= 1;
      sec = 59;
    } else if (sec < 10 && length.sec != 2) sec = '0' + sec;
  
    $('#timer').text('남은 시간 : ' + min + ':' + sec);
    if (min == 0 && sec == 0)
          clearInterval(timer);
  
  }, 1000);
//남은 시간 종료 후 새로고침
setTimeout(function () {
    location.reload();
  },21000)

// 로그인 페이지 토글 (max-width:1100px)

  const logInBox = $('main > section'),
        boxToggleBtn = $('main > aside button');
        
            boxToggleBtn.each(function(){
                $(this).click(function(){
                    let currentIdx = $(this).index();
                    boxToggleBtn.removeClass('active');
                    $(this).addClass('active');
                    logInBox.css({display: 'none',opacity: 0, visibility: 'hidden'});
                    logInBox.eq(currentIdx).css({ display: 'block', opacity: 1, visibility: 'visible' });    
                });
                
            });

let reload = true
$(window).resize(() => {
    if ($( document ).width() < 1100) {
        boxToggleBtn.eq(0).click();
        reload = false
    } else {
        if ($(document).width() > 1100 && reload == false) {
            reload = true
            location.reload();
        }
    }
});

$(window).trigger('resize')

