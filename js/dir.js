$(document).ready(()=>{ /* function main */
    /* DATE OBJECT */
    let msg = $({
            ref_date: $("footer"),
            date : new Date().getFullYear(),
           
    });


    $("<p>").prependTo('footer');
    $("p").html("&copy; - MIT - "+msg[0].date);

    /* éléments de liste */
    let target = $('ul').children('li').eq(2).children('ul').css("display","none");
    let targetMiddle = $('ul').children('li').eq(3).children('ul').css({"display":"none"});
    let lastElement = $('ul').children('li').eq(4).children('ul').hide();
    let optional = targetMiddle.children('li').eq(1).children('ul').hide();

    /* variable pour déplier */
    let first_d, second_d, last_d, option
    first_d = $("ul").children().eq(2)
    second_d = $("ul").children().eq(3)
    last_d = $("ul").children().eq(4)
    option = second_d.children().children().eq(1);
    //option.css("color","red");
    
    /* event php */
    option.on("click",function(e){
        e.stopPropagation();
        optional.slideToggle();
        $(this).toggleClass("folder-open");

    })

    first_d.on("click",function(){
        console.log($(this));
        target.slideToggle();
        $(this).toggleClass("folder-open");
    })

    second_d.on("click",function(){
        console.log($(this));
        targetMiddle.slideToggle();
        $(this).toggleClass("folder-open");
    })

    last_d.on("click",function(){
        console.log($(this));
       lastElement.slideToggle();
        $(this).toggleClass("folder-open");
    })


});