
function openMenu() {
    console.log('-- Opening the menu');    
    $('nav').addClass(`open`);
}

$('main header .fa-bars').click(openMenu);



function closeMenu() {
    console.log('-- Closing the menu');    
    $('nav').removeClass(`open`);
}

//$('nav .fa-times').click(closeMenu);
$('[action=closeMenu]').click(closeMenu);


