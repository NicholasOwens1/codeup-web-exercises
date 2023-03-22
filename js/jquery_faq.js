'use strict';

$(`#button`).click(function() {
    // alert("clicked")
    $(`dd`).toggleClass(`invisible`);
});

$(`dt`).click(function() {
    $(this).addClass(`teehee`)
})

$(`.turn`).click(function() {
    $('li').each(function(index) {
        if (index === 3 || index === 7 || index === 11) {
            $(this).css('background-color', 'yellow');
        }})})

$(`h3`).on(`click`, function() {
    let $nextUL = $(this).next();
    $nextUL.find(`li`).css(`font-weight`, `bold`)
})
// $(`#IDunes`).click(function() {
//     // alert(`clicked`)
//     $(`#IDunes`).children().css(`font-weight`,`bold`)
// })
//
// $(`#MamoCave`).click(function() {
//     // alert(`clicked`)
//     $(`#MamoCave`).children().css(`font-weight`,`bold`)
// })
//
// $(`#YellowStones`).click(function() {
//     // alert(`clicked`)
//     $(`#YellowStones`).children().css(`font-weight`,`bold`)
// })

// $(`.turn`).click(function() {
//         $(`li`).last().css(`background-color`, `yellow`)
// })
