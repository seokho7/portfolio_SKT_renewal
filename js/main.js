//main_top_banner_slide
let slideWrapper = $('.top_slide_wrapper')
slideWrapper.slick({
    arrows:false,
    speed: 500,
    adaptiveHeight: false,
    draggable: true,
    infinite: false
});


let controlBox = $('.main_banner .controls'),
    bigPrev = controlBox.find('.big_prev'),
    bigNext = controlBox.find('.big_next'),
    smallPrev = controlBox.find('.small_prev'),
    smallNext = controlBox.find('.small_next'),
    stopBtn = controlBox.find('.stop_btn'),
    playBtn = controlBox.find('.play_btn'),
    mainPagerNum = controlBox.find('.pager'),
    captionBtn = controlBox.find('.video_caption button');



function nextSlide(item) {
    item.click(function () {
        slideWrapper.slick('slickNext');
    });

};
function prevSlide(item) {
    item.click(function () {
        slideWrapper.slick('slickPrev');
    });
};
nextSlide(bigNext);
nextSlide(smallNext);
prevSlide(bigPrev);
prevSlide(smallPrev);


let currentNum = controlBox.find('.current_number'),
    maxNum = controlBox.find('.max_number');

    maxNum.text(slideWrapper.find('li').length);
    
    slideWrapper.on('afterChange', function () {
        let currentSlide = $(this).slick('slickCurrentSlide');
        currentNum.text(currentSlide + 1)
        if (currentSlide == 1) {
            captionBtn.add(playBtn).add(stopBtn).stop().animate({opacity: 0 , visibility: 'hidden'})
        } else {
            captionBtn.add(playBtn).add(stopBtn).stop().animate({opacity: 1 , visibility: 'visible'})
        };
    });


let replayBtn = slideWrapper.find('.replay_btn'),
    videoList = slideWrapper.find('.video_list'),
    listCpation = videoList.find('.list_cpation'),
    videoBg = videoList.find('>span')
    
replayBtn.click(function () {
    $(this).addClass('active');
    listCpation.addClass('active');
    $('#video').get(0).play();
    $('#video').get(0).currentTime = 0;
    videoBg.stop().animate({ opacity: 0 });
    bigNext.add(bigPrev).stop().animate({opacity: 0 , visibility: 'hidden'})
    colorChange()
});


stopBtn.click (function () {
    listCpation.removeClass('active');
    $('#video').get(0).pause();
    videoBg.stop().animate({ opacity: 1 })
    bigNext.add(bigPrev).stop().animate({opacity: 1 , visibility: 'visible'})
    colorChange()
});

playBtn.click(function () {
    replayBtn.addClass('active');
    listCpation.addClass('active');
    $('#video').get(0).play();
    videoBg.stop().animate({ opacity: 0 });
    bigNext.add(bigPrev).stop().animate({opacity: 0 , visibility: 'hidden'})
    colorChange()
});


captionBtn.click(function () {
    $(this).toggleClass('active')
});

function colorChange() {
    if (listCpation.hasClass('active')) {
        smallPrev.add(smallNext).add(playBtn).add(mainPagerNum).add(captionBtn).add(stopBtn).css({ color: 'var(--sub_color_orange)' });
    } else {
        smallPrev.add(smallNext).add(playBtn).add(mainPagerNum).add(captionBtn).add(stopBtn).css({ color: '#fff' });
        
    }    
}

//banner_img-list_resize




$(window).resize(function () {
    slideWrapper.slick('refresh');
    if ($(document).width() < 900) {
        bigNext.add(bigPrev).css({opacity: 0 , visibility: 'hidden'})
    } else {
        bigNext.add(bigPrev).css({opacity: 1 , visibility: 'visible'})
    }
});


//content_slide
let conSlideWrapper = $('.main_content_slide .content_slide_wrapper'),
    conSlideList = conSlideWrapper.find('.content_slide li'),
    conSlide = conSlideWrapper.find('.content_slide')
    conControlBox = $('.main_content_slide .controls'),
    conSlidePager = conControlBox.find('.pager'),
    pagerHtml = '',
    conSlidePrev = conControlBox.find('.prev_btn'),
    conSlideNext = conControlBox.find('.next_btn');

    conSlide.slick({
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false
    
});

// 페이저 자동 생성
conSlideList.each(function (i) {
    pagerHtml +='<a href="">' + (i + 1) + '</a>';
    conSlidePager.html(pagerHtml)
});


//슬라이드 이동

    conSlideNext.click(function (e) {
        e.preventDefault();
        conSlide.slick('slickNext');
    });
    conSlidePrev.click(function (e) {
        e.preventDefault();
        conSlide.slick('slickPrev');
    });

let pagerLink = conSlidePager.find('a')
pagerLink.each(function (i) {
    $(this).click(function (e) {
        e.preventDefault();
        conSlide.slick('slickGoTo', i);
    });
});

conSlide.on('afterChange', function () {
    pagerLink.removeClass('active')
    let currentSlide = $(this).slick('slickCurrentSlide');
    pagerLink.eq(currentSlide).addClass('active')        
});
    
conSlide.trigger('afterChange')


//max width(900) news slide
let newscontainer = $('.main_news ul')
let mySwitch = true
$(window).resize(function () {
    let documentWidth = $(document).width();
    if (documentWidth < 900 && mySwitch) {
        onceSlick(newscontainer)
    } else if(documentWidth > 900 && !mySwitch){
        stopSlick(newscontainer)
    }
        
});

function onceSlick(item) {
    item.slick({
        prevArrow: '<i class="fas fa-caret-square-left"></i>',
        nextArrow: '<i class="fas fa-caret-square-right"></i>',
        infinite: false,
        fade: true
    });
    mySwitch = false
}

function stopSlick(item) {
    item.slick('unslick');
    mySwitch = true
}

$(window).trigger('resize');



//------------------- popup 쿠키 생성 ------------------//

var myPopup = document.querySelector('.modal_box'),
checkbox = document.querySelector('#intro_modal_close'),
popupClose = document.querySelector('.intro_modal_close');

//쿠키 생성
function setCookie(name, value, day){
    var date = new Date(); 
    date.setDate(date.getDate() + day);

    var mycookie = '';
    mycookie += name + '=' + value+';';
    mycookie +='Expires=' + date.toUTCString();

    document.cookie = mycookie;
}


//쿠키 삭제
function delCookie(name){
    var date = new Date();

    date.setDate(date.getDate() - 1);

    var setCookie = '';

    setCookie += name+'= ;';
    setCookie +='Expires=' + date.toUTCString();

    document.cookie = setCookie;          
}

//쿠키 확인
function checkCookie(name){
    var cookies = document.cookie.split(';');
    var visited = false;

    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            visited = true;
            console.log(visited);
        }                
    }

    if(visited){
        //재방문
        myPopup.style.display = 'none';
    }else{
        //신규방문
        myPopup.style.display = 'flex';
    }
   
 }
checkCookie('_visit');

popupClose.addEventListener('click', function(){
    if(checkbox.checked){
        setCookie('_visit','visit',1);
        myPopup.style.display = 'none';
    } else{
        myPopup.style.display = 'none';
        delCookie('_visit');
    }
});



