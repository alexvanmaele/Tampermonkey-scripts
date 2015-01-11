// ==UserScript==
// @name       Youtube Image URL
// @namespace  youtube.image.url
// @version    0.1
// @description  Adds a direct link to a video's image
// @match      *://*.youtube.com/*
// @require http://code.jquery.com/jquery-latest.js
// @grant	none
// ==/UserScript==



var imageURL = $("meta[property='og:image']").attr("content");

var btnImageURL = "<a target='_blank' style='font-size: 11px; margin-right: 10px' href='" + imageURL + "'>Image URL</a>";

$(btnImageURL).insertBefore("#watch-like-dislike-buttons");