function resultsColor(tbstr){
	//var _even = $('#'+tbstr+' tr:even').addClass('evenrownochangecolor');
	//var _odd = $('#'+tbstr+' tr:odd').addClass('oddrownochangecolor');
	var _even = $('#'+tbstr+' tr:even').addClass('odd');
	var _odd = $('#'+tbstr+' tr:odd').addClass('even');
}

function changeTree(){
	//chrome not work util push server is fine.
	var oTitle = $('title');
	var str = oTitle.html();
	if(str.indexOf('-')>=0){
		var menustr = str.substring(0, str.indexOf('-'));
		var obj = $(window.parent.frames[1].document);
		obj.find('li').removeClass('selecteditem').addClass('menuitems');
		obj.find('#'+menustr).addClass('selecteditem');
	}
}

function validateAll(){
	var objs = $('.mustkeyin');
	var bb1 = true;
	objs.each(function(idx){
		var obj = $(this);
		var oTxt = obj.parent().next().children().eq(0);
		var txt = oTxt.val();
		if($.trim(txt)==''){
			var s1 = obj.parent().text();
			var idx1 = s1.indexOf('*');
			s1 = s1.substring(idx1+1);
			alert(s1+'必需填入!');
			oTxt.focus();
			bb1 = false;
			return false;
		}
	});
	return bb1;
}
function validateAll2(){
	var objs = $('input[type=text], select');
	var bb = true;
	objs.each(function(){
		var oo = $(this);
		if(oo.attr('type')!=null && oo.attr('type').toUpperCase()=='TEXT'){
			if($.trim(oo.val())==''){
				alert('請輸入 '+oo.parent().prev().text());
				bb = false;
				oo.focus();
				return false;
			}
		}
		else if(oo.get(0).tagName.toUpperCase()=='SELECT'){
			if($.trim(oo.val())==''){
				alert('請輸入 '+oo.parent().prev().text());
				bb = false;
				return false;
			}
		}
	});
	return bb;
}
function validateAll3(){
	var objs = $('.mustkeyin');
	var bb1 = true;
	objs.each(function(idx){
		var obj = $(this);
		var oTxt = obj.parent().next().children().eq(0);
		var txt = oTxt.val();
		if($.trim(txt)==''){
			var s1 = obj.parent().text();
			var idx1 = s1.indexOf('*');
			//s1 = s1.substring(idx1+1);
			s1 = s1.substring(0, idx1);
			alert(s1+' 必需填入!');
			oTxt.focus();
			bb1 = false;
			return false;
		}
	});
	return bb1;
}

function validateAll22(classsp){
	var objs = $(classsp).find('.mustkeyin2');
	var bb1 = true;
	objs.each(function(idx){
		var obj = $(this);
		var oTxt = obj.parent().next().children().eq(0);
		var txt = oTxt.val();
		if($.trim(txt)==''){
			var s1 = obj.parent().text();
			var idx1 = s1.indexOf('*');
			s1 = s1.substring(idx1+1);
			alert(s1+'必需填入!');
			oTxt.focus();
			bb1 = false;
			return false;
		}
	});
	return bb1;
}

//function inputnumber(thisobj) {
////var txtstr = thisobj.value;
//// 0~9, enter
//if (event.keyCode == 13 || (event.keyCode >= 48 && event.keyCode <= 57)) {
//	return true;
//}
//return false;
//}
//function inputnumber2(thisobj) {
////var txtstr = thisobj.value;
//// 0~9, enter, 逗點"."
//if (event.keyCode == 46 || event.keyCode == 13
//		|| (event.keyCode >= 48 && event.keyCode <= 57)) {
//	return true;
//}
//return false;
//}
function inputnumber(e) {
if ($.browser.msie) {
	if ((event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8) 
		return true;
} else {
	if ((e.which > 47 && e.which < 58) || e.which == 8)
		return true;
}
return false;
}
function inputnumber2(e) {
if ($.browser.msie) {
	if ((event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8
		|| event.keyCode == 46 || event.keyCode == 13) 
		return true;
} else {
	if ((e.which > 47 && e.which < 58) || e.which == 8
		|| e.which == 46 || e.which == 13)
		return true;
}
return false;
}
function fixDiv() {
	var $cache = $('#fixbrcd');
	var tdtop = $('#brcdtd').position().top;
	if ($(window).scrollTop() > tdtop) 
		$cache.css({'position': 'fixed', 'top': '0'}); 
	else
		$cache.css({'position': 'relative', 'top': 'auto'});
}
function checkEmailFormat(str){
	var ptrn=new RegExp('^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$');
	return ptrn.test(str);
}
//function checkLinkFormat(str){
//	var ptrn=new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.‌​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[‌​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1‌​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00‌​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u‌​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);
//	return ptrn.test(str);
//}
function mgrName(){
	var mid = $.trim($('#updmid').text());
	if(mid!=''){
		$.get('ManagerAjax.action', null, function(data){
			var map = data['mgrmap'];
			$('#updmid').html(map[mid]);
		}, 'json');
	}
}

function cancelDate(did){
	var obj = $('#'+did);
	obj.val('');
}
