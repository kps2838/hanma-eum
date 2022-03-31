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

    $('#gallery .slide-btn .prev').click(function(){
        if(slideNum > 0){
            position += 1200;
            $('.slide-container .images').css('transform', `translateX(${position}px)`)
            slideNum = slideNum-1;
        };

        if (slideNum == slideNum){
            $('#gallery .pagination > div').removeClass('on');
            $('#gallery .pagination > div').eq(slideNum).addClass('on');
        };

        if (slideNum == 0){
            $('.slide-container .images').css('transform', `0`);
        }
    });

    $('#gallery .slide-btn .next').click(function(){
        if(slideNum < 2){
            position -= 1200;
            $('.slide-container .images').css('transform', `translateX(${position}px)`)
            slideNum = slideNum+1;
        } 

        if (slideNum == slideNum){
            $('#gallery .pagination > div').removeClass('on');
            $('#gallery .pagination > div').eq(slideNum).addClass('on');
        }

        if (slideNum == 2){
            $('.slide-container .images').css('transform', `2400px`);
            
        }
    })
    $('#gallery .pagination > div').eq(0).click(function(){
        $('.slide-container .images').css('transform', `translateX(0)`)
        $('#gallery .pagination > div').removeClass('on');
        $(this).addClass('on');
    })

    $('#gallery .pagination > div').eq(1).click(function(){
        $('.slide-container .images').css('transform', `translateX(-1200px)`);
        $('#gallery .pagination > div').removeClass('on');
        $(this).addClass('on');
    })

    $('#gallery .pagination > div').eq(2).click(function(){
        $('.slide-container .images').css('transform', `translateX(-2400px)`);
        $('#gallery .pagination > div').removeClass('on');
        $(this).addClass('on');
    })



})