let nav = $('header .container > .main_nav'),
    navHeight = nav.outerHeight();
    headerMobile = $('.header_toolbox .tool_mobile'),
    loginBtn = headerMobile.find('.login_btn'),
    duration = 300;
    
    //header shadow
    $(window).scroll(function(){
        $('header').css({borderBottom: 'none',boxShadow: '5px 0px 5px rgba(0,0,0,.9)'});
        if($(window).scrollTop() < $('header').outerHeight()){
            $('header').css({borderBottom: '1px solid rgba(0,0,0,.9)',boxShadow: 'none'});
        }
        
    });
    
    //nav dropdown
    nav.hover(
        function(){
                let ulHeight = nav.find('> ul').outerHeight();
                $(this).stop().animate({height: ulHeight +50},duration)
            },
            function(){
                $(this).stop().animate({height: navHeight},100)
            }
    );
    
    //navTT hover animation
let navTT = $('.main_nav > ul li .nav_title'),
    navHighlight = navTT.find('.nav_highlight'),
    navTTWidth = navTT.outerWidth(),
    navMainLi = $('header .main_nav > ul > li');

        navTT.add(navMainLi).mouseover(function () {
            let left = $(this).position().left;
             navHighlight.stop().animate({ left: left + 'px'},duration);
         })
         navTT.add(navMainLi).mouseout(function () {
             navHighlight.stop().animate({ left: '-100%'},duration);
         })

//mobile dropdown

    headerMobile.hover(
        function(){
            loginBtn.stop().animate({height :'44px'},duration);
        },
        function(){
            loginBtn.stop().animate({height :'0px'},duration);
        }
    );
    

    //search dropdown
    let searchBtn = $('header .tool_right .go_search');
    let searchBox = $('header .header_search');
    let searchInputBox = $('#search');
    let searchPlaceholder = searchInputBox.attr('placeholder');

    searchBtn.click(function(){
        $(this).toggleClass('active');
        menuOpenBtn.add(sideMenu).add(slideMenuBg).removeClass('active')
        $('.header_search span').toggleClass('active');
        if($(this).hasClass('active')){
            searchBox.css({top : 'calc(100% + 60px)'});
        }else{
            searchBox.css({top : ''});
        }
    });
    searchInputBox.focus(function(){
        $(this).attr('placeholder','')
    });
    searchInputBox.blur(function(){
        $(this).attr('placeholder',searchPlaceholder)
    });



    //language dropdown
    let changeLang = $('.header_toolbox .tool_right .language'),
        english = changeLang.find('.english');
            changeLang.hover(
                function(){
                    english.stop().animate({top:'100%', opacity:1},duration)
                },
                function(){
                    english.stop().animate({top:'0%', opacity:0},duration)
                }
            );

    //side_menu nav accordion
    
let slideList = $('.header_side_menu nav .side_li'),
    slideTT = slideList.find('.nav_title '),
    sideUl = slideList.find('.side_ul'),
    slideListHeight = slideList.outerHeight();
    
slideTT.each(function (i) {
    let currentIdx = $(this).index();
    let sideUlHeight = sideUl.eq(i).outerHeight(true);
    $(this).eq(currentIdx).click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            slideTT.removeClass('active')
            $(this).addClass('active') 
            let idx = $(this).parents('li').index()
            slideList.stop().animate({ height: slideListHeight })
            slideList.eq(idx).stop().animate({ height: slideListHeight + sideUlHeight })
        } else {
            slideTT.removeClass('active')
            slideList.stop().animate({ height: slideListHeight })
        }
        });
    });
    
    //side_menu open animation
let menuOpenBtn = $('.header_toolbox .side_open_btn'),
    sideMenu = $('.header_side_menu'),
    slideMenuBg = $('header + span')


menuOpenBtn.click(function () {
    if (searchBtn.hasClass('active') && !$(this).hasClass('active')) {
        searchBtn.click();
    }
    $(this).toggleClass('active')
    sideMenu.toggleClass('active');
    slideMenuBg.toggleClass('active');
});
    
//wow js
let wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       300,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
});
wow.init();

//go top btn

let goTopBtn = $('#go_top_btn');

$(window).scroll(function () {
    let scrollAmt = $(this).scrollTop()
    if (scrollAmt > 1000) {
        goTopBtn.fadeIn()
        
    } else {
        goTopBtn.fadeOut()
    }
});

goTopBtn.click(function () {
    $('html,body').animate({scrollTop: 0},1500,'easeInOutQuint')
});

//change aniamte function
let changeAni = 'animate__fadeInUp';

let aniTarget = $('.animate__fadeInLeft');
let aniTarget2 = $('.animate__fadeInRight');
let aniTarget3 = $('.animate__fadeInBottomLeft');
let aniTarget4 = $('.animate__fadeInTopLeft');

let targetArr = new Array(aniTarget,aniTarget2,aniTarget3,aniTarget4)

let item = '';
function autoItem(i){
    item += i
}
autoItem('animate__fadeInLeft animate__fadeInRight animate__fadeInBottomLeft animate__fadeInTopLeft')


function classDelete(arr, del, add){
    arr.forEach(function(item){
        item.removeClass(del).addClass(add);     
    });
}

    if($(document).width() < 768){
        classDelete(targetArr,item,changeAni)
    }
