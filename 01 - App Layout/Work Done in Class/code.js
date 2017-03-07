
function openMenu() {
    console.log('-- Opening the menu');
    
    $('nav').addClass(`open`);
}

$('main header .fa-bars').click(openMenu);


