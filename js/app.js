$(document).ready((e)=>{ /* function main */
    e.preventDefault;

    console.log(200);
    let content = `jQuery est une bibliothèque JavaScript libre et multiplateforme créée pour 
    faciliter l'écriture de scripts côté client dans le code HTML des pages web. La première version est lancée en janvier 2006 par John Resig`;
    let title = "Hello jQuery";
    let version = 3.5;
    /*let el = document.querySelector("title")*/
    let el = $('title');
    let main_title = $('h1');
    let main = $('main');
    //console.log(el.text())
    main_title.text(title);
    main_title.append(` ${version} `); /* append prepend */
   
   console.log(main.children().children().next());
    main.children().children().next().css({'color':'#333','font-style':'italic'}).text(content);
   

    /* création d'un lien dynamique */
    main.append('<a href="#">').children("a").addClass("warning").html("Wikipedia");
    $("main a").attr({
        'href':'https://fr.wikipedia.org/wiki/JQuery', /* address URL */
        'target':'blank',
        'title' : 'Wikipedia'
    });

    /* bouton ajouter contenu */
    $("section").append('<a href="#">').children("a").addClass("warning").text("More info");
    $("section a").attr({
        'href':'#', /* address URL */
        'title' : 'ajouter'
    });
   
    /* créer un élément html en jQuery */
    $("<img>").prependTo('main figure');
    $("img").attr({
            'src':'./asset/jquery_plain_wordmark_logo_icon_146445.png',
            'alt' : 'jQuery logo'
    });
    $("figure figcaption h2").wrapInner("<em></em>"); /* envelopper les éléments */

    /* choisir l'élément par l'index */
    $("section p").eq(1).text(`Depuis sa création en 2006 et notamment à cause 
    de la complexification croissante des interfaces Web, jQuery a connu un large succès auprès des 
    développeurs Web et son apprentissage est aujourd'hui un des 
    fondamentaux de la formation aux technologies du Web. Il est à l'heure actuelle la bibliothèque 
    front-end la plus utilisée au monde (plus de la moitié des sites Internet en ligne intègrent jQuery). `);

    $("figcaption p").append('<a href="#">');
    $("figcaption p a").text(" Cdn jQuery");
    $("figcaption p a").attr({
                'href' : 'https://code.jquery.com/',
                'title' : 'cdn jQuery',
                'target' : 'blank'
    });

    //add element end block

    $("<footer><p>").insertAfter("main").html("&copy; - MIT - 2021"); //footer

    $("section p").eq(1).hide();

    //gestionnaire d'événement 
    $("section a").on('click',(e)=>{
        console.log(e.target);
        e.stopPropagation();
        $("section p").eq(1).slideDown(400);

    })
    $(document).on('click',()=>{
        $("section p").eq(1).slideUp(400);
    })
    
    //stop propagation js
    $('section p, header h1').on('click',(e)=>{
        e.stopPropagation();
    });




});