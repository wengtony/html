function uploadFile1(dir, idx){
	//upload
	var limit = 307200; //kb
	$('#up_limit'+idx).html('最大限制300MB');
	$('#uploadify'+idx).uploadify({
		'swf'            : 'scripts/uploadify.swf',
		'uploader'       : '../fileupload',
		'buttonImage'    : 'images/browser2.jpg',
		'width'          : 80,
		'height'         : 25,
		'queueID'        : 'fileQueue'+idx,
		'auto'           : true,
		'fileSizeLimit'  : limit,
		'fileTypeDesc'   : 'all file ',
		'fileTypeExts'   : '*.*',
		'multi'          : false,
		'removeTimeout'  : 0,
		'successTimeout' : 300,
		'onUploadStart'  : function(file) {
			$('#uploadify'+idx).uploadify('settings', 'formData', {'folder':'manage/upload/'+dir});  
		},
		'onUploadSuccess': function(fileObj, data, response) {
			var filename = fileObj.name;
			var filesize = fileObj.size;
			var k = Math.round(filesize/1024*100)*0.01;
			var l = "KB";
			if (k > 1000) {	k = Math.round(k*0.001*100)*0.01;l = "MB";}
			var m = (""+k).split(".");
			if (m.length > 1) {	k = m[0] + "." + m[1].substr(0, 2);	} else {k = m[0];}
			//get modify filename 
			if(data.indexOf("SUCCESS")>=0){
				var modifyfilename = 'file'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
				var removelink = '&nbsp;<span class="linkmanage" onclick="removeFile1(this)">刪除</span>';
				var linkurl='<a href="Filedown.action?rfile=upload/'+dir+'/'+modifyfilename+'&afile='+filename+'">';
				$('#filename'+idx).html(linkurl+filename+'</a> (' + k+' '+l + ')' + removelink);
				$('#_mainfile'+idx).val(filename);
				$('#_realmain'+idx).val('upload/'+dir+'/'+modifyfilename);
				$('#_mainsize'+idx).val(k+' '+l);
				//$('#_ftype'+idx).val(idx);
			}
		}
	});
}

function uploadFile2(dir, idx){
	//upload
	var limit = 307200; //kb
	$('#up_limit'+idx).html('最大限制300MB');
	$('#uploadify'+idx).uploadify({
		'swf'            : 'scripts/uploadify.swf',
		'uploader'       : '../fileupload',
		'buttonImage'    : 'images/browser2.jpg',
		'width'          : 80,
		'height'         : 25,
		'queueID'        : 'fileQueue'+idx,
		'auto'           : true,
		'fileSizeLimit'  : limit,
		'fileTypeDesc'   : 'all file ',
		'fileTypeExts'   : '*.*',
		'multi'          : true,
		'removeTimeout'  : 0,
		'successTimeout' : 300,
		'onUploadStart'  : function(file) {
			$('#uploadify'+idx).uploadify('settings', 'formData', {'folder':'manage/upload/'+dir});  
		},
		'onUploadSuccess': function(fileObj, data, response) {
			var filename = fileObj.name;
			var filesize = fileObj.size;
			var hiddenvalue = '<input type="hidden" name="fname'+idx+'" value="?1"/>'+
			'<input type="hidden" name="rfname'+idx+'" value="?2"/>'+
			'<input type="hidden" name="fsize'+idx+'" value="?3"/>';
			var k = Math.round(filesize/1024*100)*0.01;
			var l = "KB";
			if (k > 1000) {	k = Math.round(k*0.001*100)*0.01;l = "MB";}
			var m = (""+k).split(".");
			if (m.length > 1) {	k = m[0] + "." + m[1].substr(0, 2);	} else {k = m[0];}
			//get modify filename 
			if(data.indexOf("SUCCESS")>=0){
				var modifyfilename = 'file'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
				var removelink = '&nbsp;<span class="linkmanage" onclick="removeFile3(this)">刪除</span>';
				var linkurl='<a href="Filedown.action?rfile=upload/'+dir+'/'+modifyfilename+'&afile='+filename+'">';
				var hvalue = hiddenvalue;
				hvalue = hvalue.replace('?1', filename);
				hvalue = hvalue.replace('?2', 'upload/'+dir+'/'+modifyfilename);
				hvalue = hvalue.replace('?3', (k+' '+l));
				$('#filename'+idx).children().eq(0).append('<li>'+linkurl+filename+'</a> (' + k+' '+l + ')' + removelink+hvalue+'</li>');
			}
		}
	});
}
function removeFile1(osp){
	var odiv = $(osp).parent();
	odiv.html('');
	odiv.next().val('');
	odiv.next().next().val('');
	odiv.next().next().next().val('');
	odiv.next().next().next().next().val('');
}
function removeFile3(osp){
	var oli = $(osp).parent();
	oli.remove();
}