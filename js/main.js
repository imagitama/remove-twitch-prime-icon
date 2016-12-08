var removeAllIcons = function() {
    var icons = document.querySelectorAll(".twitch-premium-1.badge");

    [].forEach.call(icons, function(icon) {
        icon.parentNode.removeChild(icon);
    });
}


var main = function() {
    console.log("remove-twitch-prime-icon - main.js");

    setInterval(removeAllIcons, 500);
}


main();