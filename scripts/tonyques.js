function dispItem(){
	var dv1 = $('#rdodv');
	var dv2 = $('#rulerdv');
	var dv3 = $('#rulergrpdv');
	var dv4 = $('#matrixdv');
	var dv5 = $('#nodv');
	var dv6 = $('#txtfielddv');
	var chsitem = $('#qtype');

	if(chsitem.val()=='1' || chsitem.val()=='2' || chsitem.val()=='3'){
		hideAlldv();
		dv1.show();
	}
	if(chsitem.val()=='4'){
		hideAlldv();
		dv6.show();
	}
	if(chsitem.val()=='8'){
		hideAlldv();
		dv2.show();
		$('#ismusttr').hide();
	}
	if(chsitem.val()=='9'){
		hideAlldv();
		dv3.show();
		$('#ismusttr').hide();
	}
	if(chsitem.val()=='10'){
		hideAlldv();
		dv4.show();
		$('#atypetr').hide();
		$('#ismusttr').hide();
	}
	if(chsitem.val()=='5' || chsitem.val()=='6' || chsitem.val()=='7' || chsitem.val()=='31'){
		hideAlldv();
		dv5.show();
	}
}

function hideAlldv(){
	$('#rdodv').hide();
	$('#rulerdv').hide();
	$('#rulergrpdv').hide();
	$('#matrixdv').hide();
	$('#nodv').hide();
	$('#txtfielddv').hide();
	$('#atypetr').show();
	$('#ismusttr').show();
	//$('#iscaseno').val('0');
}

function addItem1(){
	var tb = $('#qtb1');
	var tr = tb.children().eq(0).clone();
	var seqobj = $('input[name=itmseq1]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	tr.find('select').val('');
	tr.find('input[name=itmseq1]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem21(){
	var tb = $('#qtb21');
	var tr = tb.children().eq(0).clone();
	var seqobj = $('input[name=itmseq21]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	//tr.find('select').val('');
	tr.find('input[name=itmseq21]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem22(){
	var tb = $('#qtb22');
	var tr = tb.children().eq(0).clone();
	var seqobj = $('input[name=itmseq22]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	tr.find('select').val('');
	tr.find('input[name=itmseq22]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem31(){
	var tbl = $('#rulergrptb').clone();
	tbl.find('#pdelrow').show();
	tbl.find('input[name=itmqrgid]').val('');
	tbl.find('input[name=itmqroid]').val('');
	var dv = $('#rulergrpblk');
	dv.append(tbl);
}

function addItem32(obj){
	var tb = $(obj).parent().find('#qtb32');
	var tr = tb.children().eq(0).clone();
	var seqobj = tb.find('input[name=itmseq32]');
	var itmlength = $(obj).prev();
	itmlength.val(seqobj.length+1);
	tr.find('input[type=text]').val('');
	tr.find('input[name=itmqroid]').val('');
	//tr.find('select').val('');
	tr.find('input[name=itmseq32]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem33(){
	var tb = $('#qtb33');
	var tr = tb.children().eq(0).clone();
	var seqobj = $('input[name=itmseq33]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	tr.find('select').val('');
	tr.find('input[name=itmseq33]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem41(){
	var tb = $('#qtb41');
	var tr0 = tb.children().eq(0).clone();
	var tr1 = tb.children().eq(1).clone();
	var seqobj = tb.find('input[name=itmseq41]');
	tr0.find('input[type=text]').val('');
	tr0.find('input[type=hidden]').val('');
	tr0.find('select').val('');
	if(tr0.find('select').is(':disabled')){
		tr0.find('select').attr('disabled', false);
	}
	tr0.find('input[name=itmseq41]').eq(0).val(seqobj.length+1);
	tr0.find('#tdelrow').show();
	var tb1 = tr1.find('#qtb42');
	var tr1s = tb1.children();
	if(tr1s.length>1){
		for(var i=tr1s.length-1; i>0; i--){
			tr1s.eq(i).remove();
		}
	}
	tr1s.eq(0).find('input[name=itmcname42]').val('');
	tr1s.eq(0).find('input[name=itmseq42]').val('1');
	tr1s.eq(0).find('input[type=hidden]').val('');
	tr1.hide();

	tb.append(tr0);
	tb.append(tr1);
}

function addItem42(obj){
	var tb = $(obj).parent().parent().parent().parent().find('#qtb42');
	var tr = tb.children().eq(0).clone();
	var seqobj = tb.find('input[name=itmseq42]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	var itmlength = $(obj).prev();
	itmlength.val(seqobj.length+1);
	//tr.find('select').val('');
	tr.find('input[name=itmseq42]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function addItem43(){
	var tb = $('#qtb43');
	var tr = tb.children().eq(0).clone();
	var seqobj = tb.find('input[name=itmseq43]');
	tr.find('input[type=text]').val('');
	tr.find('input[type=hidden]').val('');
	//tr.find('select').val('');
	tr.find('input[name=itmseq43]').eq(0).val(seqobj.length+1);
	tr.find('img').show();
	tb.append(tr);
}

function optItem41(sel){
	var ss = $(sel).val();
	if(ss=='1' || ss=='2'){
		//$(sel).parent().parent().next().find('#subtbl').css('width', '600px');
		$(sel).parent().parent().next().show();
	}
	else{
		$(sel).parent().parent().next().hide();
	}
}

function optItem43(sel){
	var ss = $(sel).val();
	if(ss=='1'){
		$('#rowtbl').show();
		//$('#isaddblk').hide();
		$('#tbladd').val('0');
	}
	else{
		$('#rowtbl').hide();
		//$('#isaddblk').show();
		$('#tbladd').val('1');
	}
}

function delOneRow(pic){
	var opic = $(pic);
	var otr = opic.parent().parent();
	var lengthdata = opic.attr('form-data');
	if(lengthdata!=null){
		var v = opic.parents('#qtb31').find('#'+lengthdata);
		v.val(v.val()-1);
	}
	otr.remove();
}

function delOneRow2(pic){
	var opic = $(pic);
	var opk = opic.next();
	if(opk.attr('id')=='pkid'){
		var hid=opk.attr('form-data');
		var v = $('#'+hid).val();
		if(opk.val()!=''){
			v = v+opk.val()+',';
			$('#'+hid).val(v);
		}
	}
	var otr = opic.parent().parent();
	var lengthdata = opic.attr('form-data');
	if(lengthdata!=null){
		var v = 0;
		if(lengthdata=='itm32length'){
			v = opic.parents('#qtb31').find('#'+lengthdata);	
		}
		if(lengthdata=='itm42length'){
			v = opic.parents('#subtbl').find('#'+lengthdata); 
		}
		v.val(v.val()-1);
	}
	otr.remove();
}

function delOneGroup(pic){
	var otb = $(pic).parent().parent().parent().parent();
	otb.remove();
}

function delOneGroup2(pic){
	var opic = $(pic);
	var opk = opic.next();
	if(opk.attr('id')=='pkid'){
		var hid=opk.attr('form-data');
		var v = $('#'+hid).val();
		if(opk.val()!=''){
			v = v+opk.val()+',';
			$('#'+hid).val(v);
		}
	}	
	var otb = opic.parent().parent().parent().parent();
	otb.remove();
}

function delOneTable(pic){
	var otr0 = $(pic).parent().parent();
	var otr1 = otr0.next();
	otr1.remove();
	otr0.remove();
}

function delOneTable2(pic){
	var opic = $(pic);
	var opk = opic.next();
	if(opk.attr('id')=='pkid'){
		var hid=opk.attr('form-data');
		var v = $('#'+hid).val();
		if(opk.val()!=''){
			v = v+opk.val()+',';
			$('#'+hid).val(v);
		}
	}	
	var otr0 = opic.parent().parent();
	var otr1 = otr0.next();
	otr1.remove();
	otr0.remove();
}

