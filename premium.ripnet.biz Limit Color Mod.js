// ==UserScript==
// @name       premium.rpnet.biz Limit Color Mod
// @namespace  premium.rpnet.biz.limit.color.mod
// @version    0.1
// @description  Colors the limits for better readability
// @match      *://premium.rpnet.biz/usercp/showmylimits.html
// ==/UserScript==

function colorColumns()
{
	$("table#limits tr td:nth-child(4):contains('∞')").css({"background-color":"#52B252"}); //green
    
	$("table#limits tr td:nth-child(4):not(:contains('∞'))").css({"background-color":"#FFCC00"}); //yellow
    $("table#limits tr td:nth-child(4):not(:contains('∞'))").parent().find("td:first-child").css({"background-color":"#FFCC00"});
    
	$("table#limits tr td:nth-child(5):not(:contains('-'))").css({"background-color":"#FF9933"}); //orange    
}

function convertMBToGB()
{
    $("table#limits tr td:nth-child(4):not(:contains('∞'))").each(function()
    {
        $(this).text($(this).text().replace(",",""))
        var limitInMB = parseFloat($(this).text());
        var limitInGB = limitInMB / 1000;
        limitInGB = limitInGB.toFixed(2);
        var limitInGBPre = "<span style='color:#0066FF; font-size:14px; font-style:bold'>" + limitInGB.substring(0, limitInGB.indexOf('.')) + "</span>";
        var limitInGBPost = "<span style='font-weight:bold; color: #CCA300'>" + limitInGB.substring(limitInGB.indexOf('.')) + "</span>";
        var GBsuffix = "<span style='font-weight:bold; color: #AC8E19'> GB</span>";
        $(this).html(limitInGBPre + limitInGBPost + GBsuffix);
    });
}

colorColumns();
convertMBToGB();