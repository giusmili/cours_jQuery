$(document).ready((e)=>{ /* function main */
    e.preventDefault;
    /* event btn */
    $(".header-btn-warning").on("mousedown",function(e){
        //console.log(e.target)
       $(this).next().delay(500).slideToggle();
        //console.log("dessus");
        $(".cible").text("je suis sur le bouton");
        $(this).toggleClass("header-btn-warning-titre");
        $(".head-title").addClass("speed-title");
        $(".notice").animate({
                            'width' : '400',
                            'opacity' : 'toggle'
                        });

    });
    /* comportement des gestionnaire */


    
});