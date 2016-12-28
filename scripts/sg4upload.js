	function uploadPic(){
		//upload
		var limit = 102400;
		$('#up_limit2').html('檔案限制10MB');
		$('#uploadify2').uploadify({
			'swf'       : 'scripts/uploadify.swf',
			'uploader'         : '../uploadtransfer',
			//'cancelImg'      : 'images/cancel.png',
			//'folder'         : 'upload/graphic[200,150]',
			'buttonImage'      : 'images/browser2.jpg',
			//'wmode'          : 'transparent',
			'width'          : 80,
			'height'         : 25,
			'queueID'        : 'picQueue2',
			'auto'           : true, 
			'fileSizeLimit'	 : limit,
			'fileTypeDesc'   : 'image file ',
			'fileTypeExts'   : '*.jpg; *.png; *.gif',
			'multi'          : false,
			'removeTimeout'  : 0,
			'successTimeout' : 300,
			'onUploadStart'  : function(file) {
				$('#uploadify2').uploadify('settings', 'formData', {'folder':'manage/upload/sg4[200,150]'});  
			},
			//'scriptData'     : {'uid' : '<s:property value="#session.userinfo.usrname"/>'}, 
			'onUploadSuccess': function(fileObj, data, response) {
				var filename = fileObj.name;
				var filesize = fileObj.size;
				var k = Math.round(filesize/1024*100)*0.01;
				var l = "KB";
				if (k > 1000) {	k = Math.round(k*0.001*100)*0.01;l = "MB";}
				var m = (""+k).split(".");
				if (m.length > 1) {	k = m[0] + "." + m[1].substr(0, 2);	} else {k = m[0];}
				//$('#upfile2').hide();
				//get modify filename 
				if(data.indexOf("SUCCESS")>=0){
					$('#picname2').html('');
					var fileext = filename.substring(filename.lastIndexOf('.'));
					var modifyfilename = 'img'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
					//var smallpic =  'img'+'_'+$.trim(data.substring(8))+'(s)'+filename.substring(filename.lastIndexOf('.'));
					var smallpic =  'img'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
					var htmlstr = '<a class="zoom" rel="group" href="upload/equip/'+modifyfilename+'" target="_blank"><img src="upload/equip/thumbnails/'+smallpic+'" /></a>';
					var htmlstr2 = '<a href="upload/equip/'+modifyfilename+'" target="_blank">'+filename+'</a>';
					var removelink = '&nbsp;<span class="linkmanage" onclick="removePic()">刪除</span>';
					if(fileext.toLowerCase().indexOf('tif')>=0){
						$('#picname2').append(htmlstr2 + removelink);
					}
					else{
						$('#picname2').append(htmlstr + removelink);
						//zoomPicture();
					}
					$('#_picname').val(filename);
					//$('#_realpic').val('upload/stockitem/'+modifyfilename);
					$('#_realpic').val(modifyfilename);
					$('#_picsize').val(k+' '+l);
				}
			}
		});
	}

	function removePic(){
		$('#picname2').html('');
		$('#_picname').val('');
		$('#_realpic').val('');
		$('#_picsize').val('');
	}
	
	function deletePic(afid){
		if(confirm(ca_alert_delete)){
			var posturl = {'afid':afid};
			$.post('FileAjax!delete.action', posturl, function(data){
				var msg = data['msg'];
				if(msg=='ok'){
					$('#picname2').html('');
				}
			});
		}
	}
	
	function uploadPics(){
		//upload
		var limit = 102400;
		$('#up_limit2').html('檔案限制10MB');
		$('#uploadify2').uploadify({
			'swf'       : 'scripts/uploadify.swf',
			'uploader'         : '../uploadtransfer',
			//'cancelImg'      : 'images/cancel.png',
			//'folder'         : 'upload/graphic[200,150]',
			'buttonImage'      : 'images/browser2.jpg',
			//'wmode'          : 'transparent',
			'width'          : 80,
			'height'         : 25,
			'queueID'        : 'picQueue2',
			'auto'           : true, 
			'fileSizeLimit'	 : limit,
			'fileTypeDesc'   : 'image file ',
			'fileTypeExts'   : '*.jpg; *.png; *.gif',
			'multi'          : true,
			'removeTimeout'  : 0,
			'successTimeout' : 300,
			'onUploadStart'  : function(file) {
				$('#uploadify2').uploadify('settings', 'formData', {'folder':'manage/upload/sg4[200,150]'});  
			},
			'onUploadSuccess': function(fileObj, data, response) {
				var filename = fileObj.name;
				var filesize = fileObj.size;
				var k = Math.round(filesize/1024*100)*0.01;
				var l = "KB";
				if (k > 1000) {	k = Math.round(k*0.001*100)*0.01;l = "MB";}
				var m = (""+k).split(".");
				if (m.length > 1) {	k = m[0] + "." + m[1].substr(0, 2);	} else {k = m[0];}
				//$('#upfile2').hide();
				//get modify filename 
				if(data.indexOf("SUCCESS")>=0){
					//$('#picname2').html('');
					var modifyfilename = 'img'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
					//var smallpic =  'img'+'_'+$.trim(data.substring(8))+'(s)'+filename.substring(filename.lastIndexOf('.'));
					//var smallpic =  'img'+'_'+$.trim(data.substring(8))+filename.substring(filename.lastIndexOf('.'));
					var htmlstr = '<div>upload/sg4/'+modifyfilename;
					var htmlstr2 = '<input type="hidden" name="picnames" value="'+filename+'"/><input type="hidden" name="realpics" value="'+modifyfilename+'"/><input type="hidden" name="picsizes" value="'+(k+' '+l)+'"/>';
					var removelink = '&nbsp;<span class="linkmanage" onclick="removePics(this)">刪除</span></div>';
					$('#picname2').append(htmlstr + htmlstr2 + removelink);
					//$('#_picname').val(filename);
					//$('#_realpic').val('upload/stockitem/'+modifyfilename);
					//$('#_realpic').val(modifyfilename);
					//$('#_picsize').val(k+' '+l);
				}
			}
		});
	}
	
	function removePics(olnk){
		$(olnk).parent().remove();
	}
	function deletePics(fid, olnk){
		if(confirm('確定刪除已儲存的檔案?')){
			var posturl = {'fid':fid};
			$.post('SgfileAjax!del.action', posturl, function(data){
				var msg = data['msg'];
				if(msg=='ok'){
					removePics(olnk);
				}
			});
		}
	}
