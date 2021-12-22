const filterTT = $('.sr_bottom .sr_filter_tt li a');
const showList = $('.filter_content > li')
const pager = $('.sr_pager a')
    console.log(filterTT)
filterTT.each(function(){
    $(this).click(function(e){
        e.preventDefault();
        filterTT.removeClass('active')
        $(this).addClass('active')

        let dataName = $(this).attr('data-name');

        showList.css({display:'none'});
        $('.sr_pager').css({display:'flex'});
        if(dataName == 'menu'){
            showList.filter('.menu_list').css({display:'block'});
            $('.sr_pager').css({display:'none'});
        }else if(dataName == 'content'){
            showList.filter('.sr_content_list').css({display:'block'});
        }else{
            showList.css({display:'block'});
        }
    });
});
$(filterTT).eq(0).trigger('click')

pager.click(function (e) {
    e.preventDefault();
    pager.removeClass('active');
    $(this).addClass('active')
});

$(pager).eq(0).trigger('click')