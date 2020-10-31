$(document).ready(function(){"use strict";if($('.pie').length>0){$("span.pie").peity("pie",{width:50,height:50});}
if($('.donut').length>0){$("span.donut").peity("donut",{width:50,height:50});}
if($('.peity-line').length>0){$('.peity-line').each(function(){$(this).peity("line",$(this).data());});}
if($('.peity-bar').length>0){$('.peity-bar').each(function(){$(this).peity("bar",$(this).data());});}});