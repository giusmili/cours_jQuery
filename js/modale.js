$(document).ready((e)=>{ /* function main */
    e.preventDefault;
    console.log(200)
    let header = $("header");
    let image = $("img");
    header.on("click","h1",()=>{ /* ouverture */
        $("main").children().fadeIn(400);
    });
    /*fermeture*/
    $(".success").on("click",()=>{
        $(".warning").parent().fadeOut(400);
    })
    $(".light-box").on('click',function(){
        $(this).fadeOut(400);
    });
    /*click out side */
    /* stoper la poropagation de l'évenemment */
    $(".light-box, header, .warning").on("click",(e)=>{
        e.stopPropagation();

    });
    /* changer l'image */
    image.on("click", function(){
        let img = image.attr("src");
        //condition ternaire
        (img=="./asset/dessinee.jpg") ? $(this).attr("src","./asset/dessinee-02.jpg") : $(this).attr("src","./asset/dessinee.jpg");
    })
    
});