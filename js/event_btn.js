$(document).ready((e)=>{ /* function main */
    e.preventDefault;
    console.log(200)
    /* button */
    let btn_event = $("button");
    let help_me = $("section p");
    let image_bottom = $("aside");
    $("section").on("click",btn_event,(e)=>{
        console.log(e.target);
        $(btn_event).toggleClass("on_arrow");
        $(help_me).delay(750).slideToggle();
        $(image_bottom).delay(900).toggleClass("speed-img");

    });
    image_bottom.on("click",function(){
        $(this).toggleClass("rotate_image");
    })
});