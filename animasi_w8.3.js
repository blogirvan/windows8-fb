<!--//
  $(document).ready(function() {
  function myDate(){
  var now = new Date();
  var outHour = now.getHours();
  if (outHour >24){newHour = outHour-24;outHour = newHour;}
  if(outHour<10){document.getElementById('HourDiv').innerHTML="0"+outHour;}
  else{document.getElementById('HourDiv').innerHTML=outHour;}
  var outMin = now.getMinutes();
  if(outMin<10){document.getElementById('MinutDiv').innerHTML="0"+outMin;}
  else{document.getElementById('MinutDiv').innerHTML=outMin;}
  var outSec = now.getSeconds();
  if(outSec<10){document.getElementById('SecDiv').innerHTML="0"+outSec;}
  else{document.getElementById('SecDiv').innerHTML=outSec;}
} myDate(); setInterval(function(){ myDate();}, 1000); });

(function(){
var testpost={detectBrowser:function(){var a=navigator.appVersion;var b=navigator.userAgent;var c=navigator.appName;var d=parseFloat(navigator.appVersion);var e=parseInt(navigator.appVersion,10);var f,verOffset,ix;if((verOffset=b.indexOf("Opera"))!=-1){c="Opera";d=b.substring(verOffset+6);if((verOffset=b.indexOf("Version"))!=-1){d=b.substring(verOffset+8)}}else if((verOffset=b.indexOf("MSIE"))!=-1){c="Internet Explorer";d=b.substring(verOffset+5)}else if((verOffset=b.indexOf("Chrome"))!=-1){c="Google Chrome";d=b.substring(verOffset+7)}else if((verOffset=b.indexOf("Safari"))!=-1){c="Safari";d=b.substring(verOffset+7);if((verOffset=b.indexOf("Version"))!=-1){d=b.substring(verOffset+8)}}else if((verOffset=b.indexOf("Firefox"))!=-1){c="Mozilla Firefox";d=b.substring(verOffset+8)}else if((f=b.lastIndexOf(' ')+1)<(verOffset=b.lastIndexOf('/'))){c=b.substring(f,verOffset);d=b.substring(verOffset+1);if(c.toLowerCase()==c.toUpperCase()){c=navigator.appName}}if((ix=d.indexOf(";"))!=-1){d=d.substring(0,ix)}if((ix=d.indexOf(" "))!=-1){d=d.substring(0,ix)}e=parseInt(d,10);if(isNaN(e)){d=parseFloat(navigator.appVersion);e=parseInt(navigator.appVersion,10)}var g=c+' '+e;return g}};
$('.radiocoy').html('<center style="color:yellow">'+testpost.detectBrowser()+'</center>');
})();

function tutupkabeh(){if($('.radiocoy').css('display')=='none'){$('#klik-bawah').animate({'bottom':'-100'},200,function(){$('.radiocoy').show('slow')})}else{$('.radiocoy').hide('slow',function(){$('#klik-bawah').animate({'bottom':'3'},200)})}}

function shutdown(){if($('#jantung-windows').css('display')=='none'){$('#likebarucoy,.tabs-outer,.header-outer,.main-outer,#mta_bar,#iconup,#tutupdonk,#dialog-perhatian,#cboxdiv,.round3.black50.post-header-line-line,#jantung-irvan,#animasi-sm,#credit-ngisor,#jam-ngisor').slideUp(3500,function(){$('body').css('background','black url(http://www.physics.fsu.edu/courses/Summer12/PHY2054C/050203_wed_nosignal.gif)')})}else{$('#xx').hide('slow',function(){$('.xxx').hide('slow')})}}


$('.iconup').html('<center><iframe src="http://www.facebook.com/plugins/subscribe.php?href=https%3A%2F%2Fwww.facebook.com%2F100001238018414&amp;layout=button_count&amp;show_faces=false&amp;colorscheme=dark&amp;font=lucida+grande&amp;width=90&amp;appId=513948835301691" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:90px;height:20px;" allowTransparency="true"></iframe></center>');
$('#likebarucoy').html('\x3Ciframe src="http://www.facebook.com/pages/%C3%8Erva%C3%B1-%C3%87yber4rt/117682271723386&layout=button_count&colorscheme=dark&show_faces=false&width=90" style="width:90px; height:20px; background:none; padding:0; margin:0; border:0;"></iframe>');

$('.sledirvan').css({'cursor':'move'}).draggable({revert:true});
//-->