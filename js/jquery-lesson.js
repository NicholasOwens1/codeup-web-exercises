"use strict";

// let message = $('#codeup').html();
// alert(message)

// $('#paragraph').css('background-color', 'yellow')

// let message1 = $('#s-list').html()
// alert(message1)
// $(function snitch() {
//     alert( 'The DOM has finished loading!' );
// });

// $('.codeup').css('border','1px solid #F00')

// $('h1, p, li').css('font-size', '30px');
//
// let message = $('hq').html();
// alert(message);


$('h1').click(
    function() {
    $(this).css(`background-color`, `#FF0`);
})

$(`p`).dblclick(
    function() {
        $(this).css(`font-size`, `18px`)
    });

$(`li`).hover(
    function() {
        $(this).css(`background-color`, `#FF0000`);
    },
    function() {
        $(this).css(`background-color`, `#000`);
    }
);