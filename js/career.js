const resultNum = $('.bottom_box');

resultNum.each(function(){
    const targetNum = $(this).attr('data-number');
    let number = 0;
    let $this = $(this);
    let numTimer = setInterval(function(){
        number++;
        $this.text(number + '건');
        if(number == targetNum){
            clearInterval(numTimer)
        }
    },20);
});

