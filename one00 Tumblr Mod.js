// ==UserScript==
// @name       one00 Tumblr Mod
// @namespace  one00tumblrMod
// @version    0.1
// @description  Mod for one00 for better viewing experience
// @match      http://one00.tumblr.com/
// ==/UserScript==




/* XMLHttpRequest overrides */

var send = window.XMLHttpRequest.prototype.send,
  onReadyStateChange;

function sendReplacement(data)
{
  runPreFunctions();

  console.warn('Sending request...' + getCurrentTime(), data);

  if (this.onreadystatechange)
  {
    this._onreadystatechange = this.onreadystatechange;
  }
  this.onreadystatechange = onReadyStateChangeReplacement;

  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement()
{
  if (this.readyState == 4)
  {
    console.warn('Request finished! ' + getCurrentTime());
    waitAndRunPeristantPostFunctions();
  }

  if (this._onreadystatechange)
  {
    return this._onreadystatechange.apply(this, arguments);
  }
}

window.XMLHttpRequest.prototype.send = sendReplacement;





/* AJAX Request toggling */

var reqSendingEnabled = true;

function toggleReqSending()
{
    if(reqSendingEnabled)
    {
		window.XMLHttpRequest.prototype.send = "";
        console.log("AJAX Requests disabled");
    }
    else
    {  
        window.XMLHttpRequest.prototype.send = sendReplacement;
        console.log("AJAX Requests enabled");
    }
    
    reqSendingEnabled = !reqSendingEnabled;
}

$(document).keyup(function(e)
{
  if (e.keyCode == 27) // esc key
  {
  	toggleReqSending();	
  }   
});





/* Time */

function addZero(x, n)
{
  if (x.toString().length < n) x = "0" + x;

  return x;
}

function getCurrentTime()
{
  var d = new Date();
  var h = addZero(d.getHours(), 2);
  var m = addZero(d.getMinutes(), 2);
  var s = addZero(d.getSeconds(), 2);
  var ms = addZero(d.getMilliseconds(), 3);

  return '(' + h + ":" + m + ":" + s + "." + ms + ')';
}




/* Persistance */

var persistantPreFunctions = [];
var persistantPostFunctions = [];
var execTimeout = 500; // Make sure all is loaded
function waitAndRunPeristantPostFunctions() {
  var postFunctLength = persistantPostFunctions.length;
  var functionSuffix = postFunctLength == 1 ? "." : "s.";
  console.warn("Executing " + postFunctLength + " post function" + functionSuffix);

  setTimeout(function()
  {
    executeFunctions(persistantPostFunctions)
  }, execTimeout);
}

function runPreFunctions()
{
  var preFunctLength = persistantPreFunctions.length;
  var functionSuffix = preFunctLength == 1 ? "." : "s.";
  console.warn("Executing " + preFunctLength + " pre function" + functionSuffix);

  executeFunctions(persistantPreFunctions);
}

function executeFunctions(functions)
{
  var i = 0;
  while (i < functions.length) {
    functions[i]();
    i++;
  }
}

function addPersistantPostFunction(funct)
{
  persistantPostFunctions.push(funct);
}

function addPersistantPreFunction(funct)
{
  persistantPreFunctions.push(funct);
}





/* Page mods */

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

function centerAllImages()
{
    $('div#posts').center();   
}

var id;
$(window).resize(function()
{
    clearTimeout(id);
  	id = setTimeout(doneResizing, 500);
});

function doneResizing()
{
  centerAllImages();
}

function removeAllTextElements()
{
    $("p").hide();
    $("blockquote").hide();
    $("div#perma").hide();
    $("div.de").not(":has(img)").hide();
    $("#baack").hide();
}

function hideText()
{
    $("body").css({"color":"rgba(0, 0, 0, 0)"});
	$("a").css({"color":"rgba(0, 0, 0, 0)"});
}

function removePadding()
{
    $("div.entry").css({"padding":"0"})
}

function renameInappropriateTitles()
{
    document.title = "one00";
}

function removeTumblrIFrame()
{
	$("iframe#tumblr_controls").hide();
}

function resetPostFeedPosition()
{
	$("div#posts").css({"top":"0"});
}

function fixPage()
{
    hideText();
    removeAllTextElements();
    removePadding();
    removeTumblrIFrame();
    resetPostFeedPosition();
}





/* Back-to-top button */
function addBackToTopBtn()
{
	$("body").append("<a href='#' class='back-to-top'>Back to Top</a>");
    applyStyleBackToTopBtn();
    addScrollToTopFunctions();
    $('.back-to-top').hide();
}


function applyStyleBackToTopBtn()
{
    $("a.back-to-top").css(
    {
        "position":"fixed",
        "bottom":"2em",
        "right":"0px",
        "text-decoration":"none",
        "color":"#666666",
        "background-color":"rgba(235, 235, 235, 0.60)",
        "font-size":"12px",
        "padding":"1em",
        "display":"inline"
  	});
    
     $("a.back-to-top").mouseenter(function()
  	{
    	$(this).css("color", "black");
	});
    
     $("a.back-to-top").mouseleave(function()
  	{
   		$(this).css("color", "#666666");
	});
}

var offset = 220;
var duration = 500;

function addScrollToTopFunctions()
{
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
}




/*
 Main
*/
renameInappropriateTitles();
fixPage();
centerAllImages();
addBackToTopBtn();

addPersistantPostFunction(fixPage);
addPersistantPostFunction(applyStyleBackToTopBtn);