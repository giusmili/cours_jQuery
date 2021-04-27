$(document).ready(()=>{ /* function main */
    /* DATE OBJECT */
    let msg = $({
            ref_date: $("footer"),
            date : new Date().getFullYear(),
           
    });
    let header = $("header"); /* for toggleClass */
    header.on("click",function(){
        $(this).toggleClass("bg-header-add");
        

    })

    $("<p>").prependTo('footer');
    $("p").html("&copy; - MIT - "+msg[0].date);

    /* events */
    //console.log($(".inner-header").next(".navigation:nth-of-type(1)"));
    $(".inner-header:first-child").addClass("bg-color") /* si on veut un menu ouvert par défaut */
    $(".inner-header").next(".navigation").hide();
    $(".inner-header").next(".navigation:nth-of-type(1)").css({'display':'block'});
    
    $(".inner-header").on("mousedown",function(){
        //condition
        if($(this).next(".navigation").is(":hidden")){
            $(this).addClass("bg-color");
            $('.inner-header').next(".navigation:visible").slideUp(400).prev().removeClass("bg-color");
            $(this).next(".navigation").slideDown(400);
        }
        
    });
     //stoper la propagation
    $(".container-main-menu").on("click",(e)=>{
    e.stopPropagation();
    });
    //outSideClick
        $("html").on("click",()=>{
        $(".inner-header").next(".navigation").slideUp(400).slideUp(400).prev().removeClass("bg-color");
    });


});