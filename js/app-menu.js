$(document).ready(()=>{ /* function main */
    /* DATE OBJECT */
    let msg = $({
            ref_date: $("footer"),
            date : new Date().getFullYear(),
           
    });
    console.log(msg[0].date)
    //add date at element
    $("<p>").prependTo('footer');
    $("p").html("&copy; - MIT - "+msg[0].date);

    //gestion des menus
    $(".inner-header").next(".navigation").hide();
    $(".inner-header").on("mousedown",function(){
        $(this).next(".navigation").slideToggle(400);
        console.log(200)
    });
   //stoper la propagation
   $(".container-main-menu").on("click",(e)=>{
        e.stopPropagation();
   });
   //outSideClick
   $("html").on("click",()=>{
       $(".inner-header").next(".navigation").slideUp(400);
   });


   
});