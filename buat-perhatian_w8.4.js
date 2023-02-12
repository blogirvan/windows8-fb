//-------Buat-perhatian2.js--------
//-------irvan-efendy.blogspot.com--------

//--------Dialog perhatian ---------------------------
document.write('<div id="dialog-perhatian" class="per-bawah">');
document.write('<div class="dalem-perhatian">'
+'<h2><div class="baru-baru"></div><span class="baru-satu">1</span> '+Judul_Dialog+''
+'<div class="right-buttons" style="position:absolute;float:left;top:5px;">'
+'<a onclick="$(\'#dialog-perhatian\').hide(\'slow\');" title="Close" class="close-btn" href="#close">Close</a></div></h2>'
+'<div class="text-perhatian">'
+''+Pesan_Dialog+''
+'<div style="color:#999;border-top:1px dashed #999;text-align:right;font-size:10px;">Sembunyikan<input id="hidden-dialog" type="checkbox" value="1"/></div>'
+'</div>'
+'<div class="bawah-pool">'
+'</div>'
+'</div>');
document.write('</div>');


//-------Menghilangkan Dialog Perhatian 1 hari------
$(function() {
    $('#hidden-dialog').click(function() {
        $('.buat-perhatian').hide('slow');
        createCookie("hideDialog4", null, 1);
        return false;
    });

    if(readCookie("hideDialog4")) {
        $('.buat-perhatian').remove();
    }
});