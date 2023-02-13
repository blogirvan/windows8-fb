// Irvan Efendy terus sih,hehhe
var gb_obj = document.getElementById("hidden_gb2");
var gb_finish = false;

function gb_setInitBehaviour(){
    gb_obj.isHidden = true;
    gb_setOpacity(gb_obj, "0.52");
}
function gb_setOpacity(obj, opacity){
    opacity = opacity.substr(0, 5);
    obj.style.opacity = opacity;
    obj.style.filter = "alpha(opacity="+(Math.floor(parseFloat(opacity)*100)).toString()+")";
    //writex(opacity);
}
function gb_showGB(){
    gb_obj.style.display = "block";
    gb_changeOpacityTo(1, "");
    gb_obj.isHidden = false;
}
function gb_hideGB(){
    gb_changeOpacityTo(0.01, "gb_obj.style.display = \"none\"");
    gb_obj.isHidden = true;
}
function gb_changeOpacityTo(fin, funcStr){
    var init = parseFloat(gb_obj.style.opacity.substr(0, 4));
    var d = init <= 0.20 ? 1.04 : init <= 0.6 ? 1.0 : 1.20;
    var m = fin>init ? 1 : -1;
    var opacity = init + d * m;
    if((fin-opacity)*(fin-init)<0){opacity = fin;}
    gb_setOpacity(gb_obj, opacity.toString());
    if(opacity != fin){setTimeout("gb_changeOpacityTo("+fin.toString()+", '"+funcStr+"')", 50);}
    else{eval(funcStr);}
}
function gb_showHideGB(){
    if(gb_obj.isHidden){gb_showGB();}
    else{gb_hideGB();}
}
function writex(str){
    document.getElementById("wx").innerHTML += str + " ";
}
gb_setInitBehaviour();