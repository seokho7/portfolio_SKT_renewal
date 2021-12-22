// ceo tab menu1
let tabBtn = $('.ceo_intro .tab_controls button'),
    tabMenu = $('.tab_menu > div'),
    tabCurrentIdx,
    duration = 300;

    function clickTrigger(target) {
        target.eq(0).trigger('click');
}
    
tabBtn.each(function () {
    $(this).click(function () {
        $(this).addClass('active')
        tabCurrentIdx = $(this).index();
        tabMenu.css({opacity: '0', visibility:'hidden'});
        tabMenu.eq(tabCurrentIdx).css({opacity: '1', visibility:'visible'});
        if ($(this).siblings().hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active')
        }
    });
});
clickTrigger(tabBtn)


// ceo tab menu2
let skmsTabBtn = $('.skms_box .tab_controls button'),
    skmsTabMenu = $('.skms_box .tab_content > div'),
    skmsTabCurrentIdx;

skmsTabBtn.each(function () {
    $(this).click(function () {
        $(this).addClass('active')
        skmsTabCurrentIdx = $(this).index();
        skmsTabMenu.css({opacity: '0', visibility:'hidden'});
        skmsTabMenu.eq(skmsTabCurrentIdx).css({opacity: '1',visibility:'visible'});
        if ($(this).siblings().hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active')
        }
    });
});
clickTrigger(skmsTabBtn)

