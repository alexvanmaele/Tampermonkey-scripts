// ==UserScript==
// @name       Colorizer Cleanup
// @namespace  alex.colorizer.cleanup
// @version    0.1
// @description  Cleans up Colorizer to only include the actual picker
// @match      *://*.colorizer.org/*
// ==/UserScript==


function fixPage()
{
    $(".topbox").hide();
    moveColorbox();
}

function moveColorbox()
{
    var colorbox = $(".colorbox").detach();
    $("table").prepend(colorbox);
    $(".colorbox").css({"padding":"5px"});
    $(".colorbox div").css({"margin":"auto", "width":"300px"});
}


setTimeout(fixPage, 500);