$(document).ready((e)=>{ /* function main */
    e.preventDefault;
    let title_text = $("title");
    let title_event = $("section h2")
    title_text.text("Event jQuery")
    $("header h1").hide();

    title_event.on('mousedown',(e)=>{
        console.log(e.target)
        $(title_event).css({'cursor':'pointer'})
        $("header h1").slideToggle(400)
    })

    
})