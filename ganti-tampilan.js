//-------ganti-tampilan.js------------------------
//-------irvan-efendy.blogspot.com------------
//----------Created by Taufik Nurrohman----
//----------Edited by Irvan Efendy---------------

//<![CDATA[
//-----------Your personal function-------------
var expiredStyle = 7000,
    dbs = document.body.style;

// background switcher
function bgSwitch(v) {
    dbs.background = v;
    createCookie('bgstyle', v, expiredStyle);
}

// background image switcher
function bgImgSwitch(v) {
    dbs.background = v;
    createCookie('bgimgstyle', v, expiredStyle);
}

// font switcher
function fontSwitch(v) {
    dbs.fontFamily = v;
    createCookie('fontstyle', v, expiredStyle);
}

// font sizer
function changeFontSize(v) {
    dbs.fontSize = v + 'px';
    createCookie('fontsize', v, expiredStyle);
}

// color switcher
function fontColor(v) {
    dbs.color = v;
    createCookie('fontcolor', v, expiredStyle);
}

// url gambar switcher
function urlGambar(v) {
    dbs.background = 'black url(' + v + ')repeat-x fixed top center';
    createCookie('urlimgstyle', v, expiredStyle);
}

// =========================================================================
// == If cookies successfully created and successfully read... do something!
// =========================================================================
if (readCookie('bgstyle')) {
    dbs.background = readCookie('bgstyle');
}
if (readCookie('bgimgstyle')) {
    dbs.background = readCookie('bgimgstyle');
}
if (readCookie('fontstyle')) {
    dbs.fontFamily = readCookie('fontstyle');
}
if (readCookie('fontsize')) {
    dbs.fontSize = readCookie('fontsize') + 'px';
    document.getElementById('fontSizer').value = readCookie('fontsize');
}
if (readCookie('fontcolor')) {
    dbs.color = readCookie('fontcolor');
    document.getElementById('fontColorer').value = readCookie('fontcolor');
}
if (readCookie('urlimgstyle')) {
    dbs.background = readCookie('urlimgstyle');
    document.getElementById('urlGambarer').value = readCookie('urlimgstyle');
}

// =========================================================================
// == Reset button
// =========================================================================
function resetStyle() {
    eraseCookie('bgstyle');
    eraseCookie('bgimgstyle');
    eraseCookie('fontstyle');
    eraseCookie('fontsize');
    eraseCookie('fontcolor');
    eraseCookie('urlimgstyle');
    eraseCookie('hideDialog4');
    window.location.reload(1);
}
//]]>