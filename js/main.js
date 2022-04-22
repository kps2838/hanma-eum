$(function(){
    $('#contents .btn > button').click(function(){
        $('#contents .btn > button').removeClass('on');
        $(this).addClass('on');
    });

    $('#contents .btn > button').eq(0).click(function(){
        $('#contents .news .text-box').removeClass('on');
        $('#contents .news .notice').addClass('on');
    });

    $('#contents .btn > button').eq(1).click(function(){
        $('#contents .news .text-box').removeClass('on');
        $('#contents .news .community').addClass('on');
    });


    let slideNum = 0;
    let position = 0;

    $('#center .slide-btn .prev').click(function(){
        if(slideNum > 0){
            position += 895;
            $('#center .slide-container > div').css('transform', `translateX(${position}px)`)
            slideNum = slideNum-1;
        };

        if (slideNum == slideNum){
            $('#center .slide-btn > div').removeClass('on');
            $('#center .slide-btn > div').eq(slideNum).addClass('on');
        };

        if (slideNum <= 0){
            $('#center .slide-container > div').css('transform', `0`);
        }
    });

    $('#center .slide-btn .next').click(function(){
        if(slideNum < 2){
            position -= 895;
            $('#center .slide-container > div').css('transform', `translateX(${position}px)`)
            slideNum = slideNum+1;
        } 

        if (slideNum == slideNum){
            $('#center .slide-btn > div').removeClass('on');
            $('#center .slide-btn > div').eq(slideNum).addClass('on');
        }
    })

    $('#center .slide-btn > div').eq(0).click(function(){
        $('#center .slide-container > div').css('transform', `translateX(0)`)
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    })

    $('#center .slide-btn > div').eq(1).click(function(){
        $('#center .slide-container > div').css('transform', `translateX(-895px)`);
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    })

    $('#center .slide-btn > div').eq(2).click(function(){
        $('#center .slide-container > div').css('transform', `translateX(-1790px)`);
        $('#center .slide-btn > div').removeClass('on');
        $(this).addClass('on');
    })

    $('#center .slide .images > div').hover(function(){
        $(this).find('.hover-box').addClass('on')
    }, function(){
        $(this).find('.hover-box').removeClass('on')
    })

    $('#adoption .container .info-box > div').hover(function(){
        $(this).css('transform',`translateY(-60px)`)
    }, function(){
        $(this).css('transform',`translateY(0)`)
    })

})