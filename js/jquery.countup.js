(function($){var days=24*60*60,hours=60*60,minutes=60;$.fn.countup=function(prop){var options=$.extend({callback:function(){},start:new Date()},prop);var passed=0,d,h,positions;init(this,options);positions=this.find('.position');(function tick(){passed=Math.floor((new Date()-options.start)/1000);d=Math.floor(passed/days);updateDuo(0,1,d);passed-=d*days;h=Math.floor(passed/hours);updateDuo(2,3,h);m=Math.floor(passed/minutes);passed-=m*minutes;s=passed;options.callback(d,h);setTimeout(tick,1000);})();function updateDuo(minor,major,value){switchDigit(positions.eq(minor),Math.floor(value/10)%10);switchDigit(positions.eq(major),value%10);}
return this;};function init(elem,options){elem.addClass('countdownHolder');$.each(['Days','Hours'],function(i){$('<span class="count'+this+'">').html('<span class="position">\
					<span class="digit static">0 Days</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>').appendTo(elem);if(this!="Seconds"){elem.append('<span class="countDiv countDiv'+i+'"></span>');}});}
function switchDigit(position,number){var digit=position.find('.digit')
if(digit.is(':animated')){return false;}
if(position.data('digit')==number){return false;}
position.data('digit',number);var replacement=$('<span>',{'class':'digit',css:{top:'-2.1em',opacity:0},html:number});digit.before(replacement).removeClass('static').animate({top:'2.5em',opacity:0},'fast',function(){digit.remove();})
replacement.delay(100).animate({top:0,opacity:1},'fast',function(){replacement.addClass('static');});}})(jQuery);