// ==UserScript==
// @name       KenRockwell.com Cleanup
// @namespace  kenrockwellcleanup
// @version    0.1
// @description  Cleans up the site
// @match      *://*.kenrockwell.com/*
// @require    http://code.jquery.com/jquery-latest.pack.js
// ==/UserScript==

$("b:contains('PLUG')").parent().parent().nextAll().hide();
$("b:contains('PLUG')").hide();
$('img[alt="adorama"]').parent().parent().parent().parent().parent().parent().hide()
$("p:contains('It helps me keep adding to this site')").hide()

console.log("Cleaned up site!");