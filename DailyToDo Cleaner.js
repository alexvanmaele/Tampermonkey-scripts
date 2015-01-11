// ==UserScript==
// @name         DailyToDo Cleaner
// @namespace    DailyToDo.Cleaner
// @description  Daily ToDo cleanup.
// @author       Alex
// @match        *://*.dailytodo.org/*
// @grant        none
// @require    http://code.jquery.com/jquery-latest.pack.js
// ==/UserScript==

$("h1").hide();

//$("#uvTab").hide(); //use browser blocker for this instead