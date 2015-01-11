// ==UserScript==
// @name       Hide Facebook content
// @namespace  http://fuckfacebook.lololol
// @version    0.1
// @description  Hides Facebook content to prevent distraction
// @match      *://*.facebook.com/*
// ==/UserScript==

var contentArea = document.getElementById('contentArea');
contentArea.style.display = 'none';

var rightCol = document.getElementById('rightCol');
rightCol.style.display = 'none';

var sidebar = document.getElementById('pagelet_sidebar');
sidebar.style.display = 'none';