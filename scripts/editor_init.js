function loadEditor(){
	$('textarea').tinymce({
		script_url : 'scripts/tiny_mce/tiny_mce.js',
		language : "zh-tw",
		theme : "advanced",
		plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
		theme_advanced_buttons2 : "forecolor,backcolor,|,bullist,numlist,|,outdent,indent,|,undo,redo,|,link,unlink,code,image,|,hr,removeformat,visualaid,|,sub,sup,|,charmap",
		theme_advanced_buttons3 : "tablecontrols",
		theme_advanced_font_sizes : "10pt,12pt,14pt,16pt,18pt,24pt,36pt",
		relative_urls : false, 
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,
		content_css : "css/tinymce_content.css",
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js",
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		}
	});
}

function loadEditorMini(txtid){
	$('#'+txtid).tinymce({
		script_url : 'scripts/tiny_mce/tiny_mce.js',
		language : "zh-tw",
		theme : "advanced",
		plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
		//theme_advanced_buttons1 : "bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,fontsizeselect",
		theme_advanced_buttons1 : "bold,italic,underline,|,forecolor,backcolor,|,bullist,numlist,|,outdent,indent,|,link,unlink,code,|,fontsizeselect",
		//theme_advanced_buttons3 : "tablecontrols",
		theme_advanced_font_sizes : "10pt,12pt,14pt,16pt,18pt,24pt,36pt",
		relative_urls : false, 
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,
		content_css : "css/tinymce_content.css",
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js",
		template_replace_values : {
			username : "Some User",
			staffid : "991234"
		}
	});
}
