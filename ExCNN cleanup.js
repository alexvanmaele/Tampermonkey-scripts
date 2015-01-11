// ==UserScript==
// @name       ExCCN cleanup
// @namespace  alex.exccn.cleanup
// @version    0.1
// @description  Cleans ExCCN to only provide search and article display
// @match      *://*.excnn.com/*
// ==/UserScript==

var elements =
[
    "div.bhello",
    "div.btopnews",
    "div.bforum",
    "div.bhelp",
    "div.bonline",
    "div.sexy-bookmarks",
    "div.brelated",
    "div.ftr",
    "div.mhd",
    "div.thead",
    "div.ftir" 
];

function hideControls()
{
    for(var i = 0; i < elements.length; i++)
	{
    	$(elements[i]).hide();
	}
    
    $("div.ttpr").css({"background":"none"});
}

function addOpacity()
{
	$("div.tmnl").css({"opacity":"0.3"});
}


hideControls();
addOpacity();