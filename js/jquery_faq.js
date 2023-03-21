'use strict';

$(`#button`).click(function() {
    // alert("clicked")
    $(`dd`).toggleClass(`invisible`);
});

$(`dt`).click(function() {
    $(this).addClass(`teehee`)
})
