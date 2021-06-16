$(document).ready(function() {
    $(".player__item").draggable({
        containment: ".field__box",
        cursor: "grabbing"
    })
});

//When mouseover the player, show card and change box-shadow color
$(".player__item").on('mouseover', function() {
    $(this).find(".player__item--card").css("display", "flex");
    //$(this).(".player__item").css("box-shadow", "0 0 30px blue");
});

//When mouseout the player, hidden card and change box-shadow color
$(".player__item").on('mouseout', function() {
    $(this).find(".player__item--card").css("display", "none");
});