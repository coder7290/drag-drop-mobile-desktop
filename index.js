$(document).ready(function() {
    var players = $('.player__item');
    var playersArray = [];
    Object.keys(players).map((key) => {
        if (key < (players.length)) {
            playersArray.push(players[key])
        }
    });

    playersArray.forEach(function droppable(player) {
        // var dragItem = document.querySelector(`#player${index}`);
        var dragItem = player;
        var container = document.querySelector("#playground");

        var active = false;
        var currentX;
        var currentY;
        var initialX;
        var initialY;
        var xOffset = 0;
        var yOffset = 0;

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);

        function dragStart(e) {
            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }

            if (e.target === dragItem) {
                active = true;
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;

            active = false;
        }

        function drag(e) {
            if (active) {

                e.preventDefault();

                if (e.type === "touchmove") {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, dragItem);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }
    })
});

//When mouseover the player, show card and change box-shadow color
$(".player__item").on("mouseover", function() {
    $(this).find(".player__item--card").css("display", "flex");
    //$(this).(".player__item").css("box-shadow", "0 0 30px blue");
});

//When mouseout the player, hidden card and change box-shadow color
$(".player__item").on("mouseout", function() {
    $(this).find(".player__item--card").css("display", "none");
});