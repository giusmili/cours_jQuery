$(document).ready(()=>{ /* function main */
    /* DATE OBJECT */
    let msg = $({
            ref_date: $("footer"),
            date : new Date().getFullYear(),
           
    });
    $("<p>").prependTo('footer');
    $("p").html("&copy; - MIT - "+msg[0].date);

    /* events */
    $(".inner-header").next(".navigation").hide();
    $(".inner-header").on("mousedown",function(){
        //condition
        
    })


});