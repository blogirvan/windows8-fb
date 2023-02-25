// by Irvan Efendy
// irvan-efendy.blogspot.com

$(function() {

	// Append an emoticon bar before comment-form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap"> ;(( :)) :) :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( :-? (p) :-s (m) 8-) :-t :-b  b-( :-# =p~ $-) (-b) (f-) (x:) (;k) (=h) (:c) (~i) (r~) :gp: :wow: :rabbit: :kiss: :kopi: :cheer: <br/><b>Click to see the code!</b><br/><i>To insert emoticon you must added at least one space before the code.</i></div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, "<br> $1")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s;\(\(+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/01.gif", ";((");
	emo(/\s:\)\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/02.gif", ":))");
	emo(/\s:\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/03.gif", ":)");
	emo(/\s:-\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/04.gif", ":-)");
	emo(/\s=\)\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/05.gif", "=))");
	emo(/\s;\(+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/06.gif", ";(");
	emo(/\s;-\(+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/07.gif", ";-(");
	emo(/\s:d/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/08.gif", ":d");
	emo(/\s:-d/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/09.gif", ":-d");
	emo(/\s@-\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/010.gif", "@-)");
	emo(/\s:p/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/011.gif", ":p");
	emo(/\s:o/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/012.gif", ":o");
	emo(/\s:&gt;\)+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/013.gif", ":&gt;)");
	emo(/\s\(o\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/014.gif", "(o)");
	emo(/\s\[-\(+/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/015.gif", "[-(");
	emo(/\s:-\?/g, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/016.gif", ":-?");
	emo(/\s\(p\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/017.gif", "(p)");
	emo(/\s:-s/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/018.gif", ":-s");
	emo(/\s\(m\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/019.gif", "(m)");
	emo(/\s8-\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/020.gif", "8-)");
	emo(/\s:-t/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/021.gif", ":-t");
	emo(/\s:-b/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/022.gif", ":-b");
	emo(/\sb-\(+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/023.gif", "b-(");
	emo(/\s:-#/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/024.gif", ":-#");
	emo(/\s=p~/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/025.gif", "=p~");
	emo(/\s\$-\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/026.gif", "$-)");
	emo(/\s\(-b\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/027.gif", "(-b)");
	emo(/\s\(f-\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/028.gif'", "(f-)");
	emo(/\s\(x:\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/029.gif", "(x:)");
	emo(/\s\(;k\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/030.gif", "(;k)");
	emo(/\s\(=h\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/031.gif", "(=h)");
	emo(/\s\(:c\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/032.gif", "(:c)");
	emo(/\s\(~i\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/033.gif", "(~i)");
	emo(/\s\(r~\)+/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/034.gif", "(r~)");
	emo(/\s:gp:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/035.gif", ":gp:");
	emo(/\s:wow:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/036.gif", ":wow:");
	emo(/\s:rabbit:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/037.gif", ":rabbit:");
	emo(/\s:kiss:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/038.gif", ":kiss:");
	emo(/\s:kopi:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/039.gif", ":kopi:");
	emo(/\s:cheer:/ig, "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/irvanefendyblogger/040.gif", ":cheer:");
  
         // by Irvan Efendy
	// Show alert one times!
	$('.emoWrap').one("click", function() {
		if(emoMessage) {
			alert(emoMessage);
		}
	});
	// Click to show the code!
       // irvan-efendy.blogspot.com
	$('.emo').css('cursor', 'pointer').live("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});
