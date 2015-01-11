// ==UserScript==
// @name       Remove Tumblr Controls iFrame
// @namespace  remove.tumblr.controls.iframe
// @version    0.1
// @description  No more Tumblr Controls
// @match     *://*.tumblr.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant 	none
// ==/UserScript==


var elements = [	"iframe#tumblr_controls",
                	"iframe#iframe_controls",
               		"iframe#tumblr_teaser_follow",
               		"iframe#teaser_iframe" ];


function removeControls()
{
    for(var i = 0; i < elements.length; i++)
	{
    	$(elements[i]).remove();
	}
}


removeControls();
console.log("Tumblr Controls removed!");
