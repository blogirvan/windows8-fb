// widget irvan-efendy.blogspot.com
//<![CDATA[
var numfeed = 6;
var startfeed = 0;
var urlprevious, urlnext;

function showterbaru(json) {
var entry, posttitle, posturl, thumburl;
var showblogfeed = "";
urlprevious = "";
urlnext = "";
for (var k = 0; k < json.feed.link.length; k++) {
if (json.feed.link[k].rel == 'previous') {
urlprevious = json.feed.link[k].href;
}
if (json.feed.link[k].rel == 'next') {
urlnext = json.feed.link[k].href;
}
}
for (var i = 0; i < numfeed; i++) {
if (i == json.feed.entry.length) { break; }
entry = json.feed.entry[i];
posttitle = entry.title.$t;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}
var thumburl;try{thumburl=entry.media$thumbnail.url;}catch(error)
{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='http://2.bp.blogspot.com/_IKigl6y9hFA/TMdcT1jzo5I/AAAAAAAAAHA/hAKuT9rJpFU/noimage.jpg';}

showblogfeed += "<div class='mas-elemen'>";
showblogfeed += "<img src='" + thumburl + "'/><a href='" + posturl + "'>" + posttitle + "</a>";
showblogfeed += "</div>";
}
document.getElementById("terbaru").innerHTML = showblogfeed;
showblogfeed = "";
if(urlprevious) {
showblogfeed += "<a onClick='javascript:navigasifeed(-1);' class='previous'>&#9668; Kembali</a>";
} else {
showblogfeed += "<span class='noactived previous'>&#9668; Kembali</span>";
}
if(urlnext) {
showblogfeed += "<a onClick='javascript:navigasifeed(0);' class='home'>Home</a>";
showblogfeed += "<a onClick='javascript:navigasifeed(1);' class='next'>Lanjut &#9658;</a>";
} else {
showblogfeed += "<span class='noactived next'>Lanjut &#9658;</span>";
}
document.getElementById("mas-navigasifeed").innerHTML = showblogfeed;
}
function navigasifeed(url){
var p, parameter;
if(url==-1) {
p = urlprevious.indexOf("?");
parameter = urlprevious.substring(p);
} else if (url==1) {
p = urlnext.indexOf("?");
parameter = urlnext.substring(p);
} else {
parameter = "?start-index=1&max-results=" + numfeed + "&orderby=published&alt=json-in-script"
}
parameter += "&callback=showterbaru";
incluirscript(parameter);
}
function incluirscript(parameter) {
if(startfeed==1) {removerscript();}
document.getElementById("terbaru").innerHTML = "<div id='irvan-muter'></div>";
document.getElementById("mas-navigasifeed").innerHTML = "";
var archievefeed = urlblog + "/feeds/posts/default"+ parameter;
var terbaru = document.createElement('script');
terbaru.setAttribute('type', 'text/javascript');
terbaru.setAttribute('src', archievefeed);
terbaru.setAttribute('id', 'MASLABEL');
document.getElementsByTagName('head')[0].appendChild(terbaru);
startfeed = 1;
}
function removerscript() {
var elemen = document.getElementById("MASLABEL");
var parent = elemen.parentNode;
parent.removeChild(elemen);
}
onload=function() { navigasifeed(0); }
//]]>