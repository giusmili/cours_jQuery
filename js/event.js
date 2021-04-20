$(document).ready((e)=>{ /* function main */
    e.preventDefault;
    /* event btn */
    $(".header-btn-warning").on("mousedown",function(e){
        //console.log(e.target)
       $(this).next().delay(800).slideToggle();
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
    /*let btn = document.querySelector(".header-btn-warning")
    btn.addEventListener("click",(e)=>{
        console.log(e.target)
    })*/
    let btn = $(".header-btn-warning");
    btn.on("mouseup",(e)=>{
        console.log(e.target.childNodes[0].nodeValue);
      console.log(btn.parent().prev()) 
      btn.parent().prev().text("Bouton relaché");
    })
    btn.on("mouseover",(e)=>{
        console.log(e.target.childNodes[0].nodeValue);
      console.log(btn.parent().prev()) 
      btn.parent().prev().text("Bouton survol");
    })
    btn.on("mouseout",(e)=>{
        console.log(e.target.childNodes[0].nodeValue);
      console.log(btn.parent().prev()) 
      btn.parent().prev().text("Bouton en dehors");
    })
    let bigparent=$("body")
    console.log(bigparent.children())
    console.log(bigparent.children("header").children().parent())

    //test objet
    let user = $({
            nom : "jQuery",
            date : 2006
    });

    //console.log(user[0].nom)
    for(let i = 0; i<user.length; i++){
        console.log(` ${user[i].nom} : ${user[i].date}`)
    }
    console.table(user)
    /* new event */
    


    
});
