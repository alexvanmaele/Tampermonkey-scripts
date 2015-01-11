// ==UserScript==
// @name       Youtube Comments Toggle
// @namespace  youtube.comments.toggle
// @version    0.1
// @description  Adds button for toggling comments visibility. Auto-hides comments and expands description automatically.
// @match      *://*.youtube.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant   none
// ==/UserScript==


$("#watch-discussion").hide(); //hide comments
$("#action-panel-details").removeClass("yt-uix-expander-collapsed"); //expands description

var toggleButton = "<button id='btnToggleComments' class='yt-uix-button yt-uix-button-size-default yt-uix-button-text toggle-button'>Toggle comments</button>";
$(toggleButton).insertBefore("#watch-discussion");
$("#btnToggleComments").click(toggleComments);

var commentsVisible = false;
function toggleComments()
{
    if(commentsVisible)
    {
        $("#watch-discussion").hide();
        commentsVisible = false;
    }
    else
    {
        $("#watch-discussion").show();
        commentsVisible = true;
    }
}