var hasInvited = false;
$(function (){
	//推荐人
	console.log('init')
	let identifier = window.location.search.slice(1)
	console.log("identifier:"+identifier)
	if(/^\+?\d+$/.test(identifier)){
		window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: identifier}))
	}
	/*
	var localIdentifier ='';
	try {
		localIdentifier =JSON.parse(window.localStorage.getItem("masternode"));
	}catch(e){

	}
	if(localIdentifier==null||localIdentifier==""||localIdentifier=='undefined'|| localIdentifier.value==""){
		if(/^\+?\d+$/.test(identifier)){
			window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: identifier}))
		} else {
			identifier=""
			window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: identifier}))
		}
	}*/

	// if( localIdentifier==null||localIdentifier==""||localIdentifier=='undefined'|| localIdentifier.value==""){
	// 	if(window.location.search.slice(0, 3) == "?0x" && window.location.search.slice(1, 43).length == 42){
	// 		window.localStorage.setItem("masternode", JSON.stringify({type: "address", value: window.location.search.slice(1, 43)}))
	// 	} else {
	// 		/^\+?\d+$/.test(identifier) ? window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: identifier})) : window.localStorage.setItem("masternode", JSON.stringify({type: "name", value: decodeURI(identifier)}))
	// 	}
	// } 
	var localIdentifier ='';
	try {
		localIdentifier =JSON.parse(window.localStorage.getItem("masternode"));
	}catch(e){
		localIdentifier = '';
	}
	console.log("localIdentifier="+localIdentifier);
	//if(JSON.parse(localStorage.getItem("masternode")).value==''){
	if(localIdentifier==null || localIdentifier==''){	
		$('#invitingBox').modal()
		$("#loading").click(function(){
			$('#invitingBox').modal()
		})
	} else {
		hasInvited = true;
	}

	$('#inputInviting').click(function(){
		var id = $("#inviteIdInput").val()
		window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: id}))
		$('#invitingBox').modal("hide");
		// jQuery('#initLoading').modal({ backdrop: 'static', keyboard: false })
		init();
		/*
		if(/^\+?\d+$/.test(id) ) {
			window.localStorage.setItem("masternode", JSON.stringify({type: "id", value: id}))
			$('#invitingBox').modal("hide");
			// jQuery('#initLoading').modal({ backdrop: 'static', keyboard: false })
			init();
		}
		else {
			// 
			//alert("请输入数字");
			$('#invitingBox').modal("hide");
			init();
		}*/
	})

	if(hasInvited){
		// jQuery('#initLoading').modal({ backdrop: 'static', keyboard: false })
		init();
	}
})

//初始化界面
function init(){

	vui.vTopbar = new Vue({
		el: '#topbar',
		data: {
			stopwatch: "00:00",
			yourkeys: 0.0000,
			airdropTracker:0.0,
			airdropPot:0.0,
			isCEO:false,
			myLinkName:""
		}
	});

	vui.vCenterArea = new Vue({
		el: '#centerArea',
		data: {
			stopwatch: "00:00",
			gracePeriod: false,
			roundHasPassed: false,
			playerIsLeader:false,
			currentRound8:'',
			buyButtonMessagePlayer:'',
			buyButtonMessageAnon:'',
			exitScamTheft:'',
			value1:'',
			value2:'',
			value3:'',
			value4:'',
			value5:'',
		}
	});

	vui.vPurchaseArea = new Vue({
		el: '#purchaseArea',
		data: {
			roundHasPassed:false,
			airdropTracker:0.0,
			airdropPot:0.0,
			currentRound:0,
			totalEth:0.00000000
		}
	});

	vui.vVaultArea = new Vue({
		el: '#vaultArea',
		data: {
			roundHasPassed:false,
			onLockdownEth: '0.0000',
			exitScammedEth: '0.0000',
			bacAdviceEth: '0.0000',
			totalGainsEth: '0.0000',
			totalGainsUSDT: '0.0000'
		}
	});

	vui.vRefArea = new Vue({
		el: '#refArea',
		data: {
			isCEO: false,
			myLink: "",
			myLinkid: "",
			myLinkName: "",
		}
	});

	vui.vPotArea = new Vue({
		el: '#potArea',
		data: {
			currentRound: 0,
			roundHasPassed: false,
			playerIsLeader:false,
			activePot1:'0.0000',
			activePot2:'0.0000',
			activePot1USDT:'0.0000',
			activePot2USDT:'0.0000',
			yourKeys:'0.0',
			totalKeys:0,
			yourEarnings:'0.0000',
			yourEarningsUSDT:'0.00000'
		}
	});

	vui.vTeamArea = new Vue({
		el: '#teamArea',
		data: {
			twhale: 0.000,
			tbear: 0.000,
			tbull: 0.000,
			tsnek: 0.000,
		}
	});

	vui.vStatsArea = new Vue({
		el: '#statsArea',
		data: {
			currentRound: 0,
			totalInvested:'0.0000',
			totalInvestedUSDT: '0.00000',
			rewards:'0.0000',
			rewardsUSDT: '0.00000',
			purchasedYear:'0.0000',
			purchasedSeconds: '0.00000',
		}
	}); 

	//警告
	var seenWarning = localStorage.getItem("seenWarning") == 'true' ? true : false;
	// if(!seenWarning){
	 	$("#phishingWarning").modal();
	 	localStorage.setItem("seenWarning", true);
	// }

	//指引相关设置
	Rich3D.tutorialMode = localStorage.getItem('tutorials') == 'true' ? true : false;
	if(Rich3D.tutorialMode == null){
		Rich3D.tutorialMode = true
		window.localStorage.setItem('tutorials', Rich3D.tutorialMode);
		$("#tutorialswitch").prop("checked", true);	
	}
	if(Rich3D.tutorialMode !== true){
		$('.tutorial').css({"display": "none"});
		$("#tutorialswitch").prop("checked", false);
	}
	$("#tutorialswitch").click(function (){
		$('.tutorial').toggle();
		Rich3D.tutorialMode = !Rich3D.tutorialMode
		window.localStorage.setItem('tutorials', Rich3D.tutorialMode);
	});
	$('[data-toggle="popover"]').popover({
		container: 'body'
	});
	$('[data-toggle="popover"]').each(function(){
		var _name = $(this).attr("data-content");
		var varName = eval(_name);
		if(varName !== 'undefined'){
			$(this).attr("data-content", varName);	
		}
	});

	 //默认选择
	let saved_team = localStorage.getItem("team")
  	if(saved_team){
  		if(saved_team == "0"){
			$("#teamsnek").prop("checked", true);
		}
		if(saved_team == "1"){
			$("#teamwhale").prop("checked", true);
		}
		if(saved_team == "2"){
			$("#teambull").prop("checked", true);
		}
		if(saved_team == "3"){
			$("#teambear").prop("checked", true);
		}
  	} else {
  		$("#teamsnek").prop("checked", true);
  	}

  	var clipboard = new ClipboardJS('.copyBtn', {
  		text: function(trigger) {
			var text =trigger.getAttribute('data-clipboard-target');
        	return copyFirst+$(text).html()+copyLast;
    	}
  	});

  	clipboard.on('success', function(e) {
        alertify.success(copiedMessage)
    });

	/*-------绑定事件------*/
	//Register a name
	$(".vanity").click(function(){
		$('#vanity').modal()
	})
	$(".closemodal").click(function(){
		$('#vanity').modal('hide')
	})

	// 选择team
	$('.teamselector input').click(function(){
		let thisteam = $(this).attr('id')
		if(thisteam == "teamsnek"){
			localStorage.setItem('team', '0');
		}
		if(thisteam == "teamwhale"){
			localStorage.setItem('team', '1');
		}
		if(thisteam == "teambull"){
			localStorage.setItem('team', '2');
		}
		if(thisteam == "teambear"){
			localStorage.setItem('team', '3');
		}
	});

	$("#namePurchase").click(async e => {
		if(!Rich3D.Metamask() || !Rich3D.signedIn()) return alertify.alert(notSignMessage)
		let correctNetwork  = await Rich3D.checkNetwork()
		if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
		try {
			let name = jQuery("#nameInput").val()
			jQuery('#loading').modal({backdrop: 'static', keyboard: false})
			var masternode = window.localStorage.getItem("masternode") && window.localStorage.getItem("masternode") != "" ? JSON.parse(window.localStorage.getItem("masternode")).value : "" 

			let receipt = await Rich3D.write("registerNameXname", [name,  masternode, true], {value: parseInt(new BigNumber(0))})
			jQuery('#loading').modal('hide')
			jQuery('#vanity').modal('hide')
			alertify.log(namePurchaseSuccessMessage)
		}
		catch(e) {
			alertify.log(anityPurchaseCancelled)
			jQuery('#loading').modal('hide')
			jQuery('#vanity').modal('hide')
		}
	})

	$('#randomName').click(function(){
		$("#nameInput").val(Public.generate());
	});

	regisetbutton();
	jQuery('#initLoading').modal('hide')
	$("#loading").hide();
	initData();
};

function regisetbutton(){
	jQuery( ".increment" ).unbind()
	jQuery( ".buyOneTicket" ).unbind()
	jQuery( "#tixBuy" ).unbind()
	jQuery( "#tixReinvest" ).unbind()
	jQuery( "#withdrawEarnings" ).unbind()

	//增加购买数量按钮
	$('.increment').click(function(){
		let id = this.id
		if(id == 'addOne'){ 
			var increment = 1
		}
		if(id == 'addTwo'){ 
			var increment = 2
		}
		if(id == 'addFive'){
			var increment = 5
		}
		if(id == 'addTen'){
			var increment = 10
		}

		if(id == 'addHundred'){
			var increment = 100
		}
		if($('#tixToBuy').val()){
			var iVal = parseInt(String($("#tixToBuy").val()).replace("keys", "").replace("key", "").replace("Keys", "").replace("Key", ""))
		}
		else{
			var iVal = 1
		}
		let nVal = iVal + increment
		$("#tixToBuy").val(nVal.toString())

		getQuote()

	});

	//$("#tixToBuy").bind('input', getQuote);
	$("#tixToBuy").off('input').on('input', getQuote);
	/*
	$("#tixToBuy").one('input', function(e){
		console.log(e.delegateTarget.value);
	});*/

	$("#tixBuy").click( async e => {
		// TODO : 1535012400000 2018.08.23 16:20
	//        1535025600000 2018.08.23 20:00
		if(new Date().getTime()<1535025600000){alertify.alert("游戏尚未开始，请您耐心等待。"); return;}

		if(!Rich3D.Metamask() || !Rich3D.signedIn()) return alertify.alert(notSignMessage)
		let correctNetwork  = await Rich3D.checkNetwork()
		if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
		let count = String(jQuery("#tixToBuy").val()).replace("keys", "").replace("key", "").replace("Keys", "").replace("Key", "")
		if(!Number.isInteger(parseInt(count))) return
		var masternode = window.localStorage.getItem("masternode") ? window.localStorage.getItem("masternode") : "0x0" 
		count = new BigNumber((parseInt(count)) * 1e18)

		try {
			let priceQuotation = await Rich3D.read('iWantXKeys', count)
			jQuery('#loading').modal({backdrop: 'static', keyboard: false})
			let team = $("input[name='teamselect']:checked").val()
			if(!team) team = 0
			let receipt = await Rich3D.purchaseKeys(new BigNumber(priceQuotation).plus(100).toString(), team)
			alertify.log(purchaseSuccess)
			jQuery('#loading').modal('hide')
			console.log(receipt)
		} catch (e) {
			alertify.log(buyOrderCancel)
			jQuery('#loading').modal('hide')

		}

	});

	$("#tixReinvest").click( async e => {
		Rich3D.Cache.defaultAccount = await Rich3D.wallet();
		if(!Rich3D.Metamask() || !Rich3D.signedIn()) return alertify.alert(notSignMessage)
		Rich3D.Cache.currentPlayer = await Rich3D.getCurrentPlayer();
		let correctNetwork  = await Rich3D.checkNetwork()
		if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
		let vaultEarnings = new BigNumber(Rich3D.Cache.currentPlayer.Vaults[0]).plus(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[2])
		let count = String(jQuery("#tixToBuy").val()).replace("keys", "").replace("key", "").replace("Keys", "").replace("Key", "")
		var masternode = window.localStorage.getItem("masternode") ? window.localStorage.getItem("masternode") : "0x0" 
		if(!Number.isInteger(parseInt(count))) return
		count = new BigNumber((parseInt(count) ) * 1e18)

		try {
			let priceQuotation = await Rich3D.read('iWantXKeys', [new BigNumber(count)])
			if(vaultEarnings.isLessThan(new BigNumber(priceQuotation))) return alertify.alert(`You don't have ${new BigNumber(priceQuotation).div(1e18).toFixed(4)} ETH in your vault to pay for ${count.div(1e18).toFixed(4)} keys. You only have ${vaultEarnings.div(1e18).toFixed(4)} ETH in your vault.`)
			jQuery('#loading').modal({backdrop: 'static', keyboard: false})
			let team = $("input[name='teamselect']:checked").val()
			if(!team) team = 0
			let receipt = await Rich3D.purchaseKeys(new BigNumber(priceQuotation).plus(100).toString(), team, true)
			alertify.log(purchaseSuccess)
			jQuery('#loading').modal('hide')
			console.log(receipt)
		} catch (e) {
			console.error(e)
			alertify.log(buyOrderCancel)
			jQuery('#loading').modal('hide')

		}
	})

	$("#withdrawEarnings").click(async e => {
		let correctNetwork  = await Rich3D.checkNetwork()
		if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
		Rich3D.Cache.defaultAccount = await Rich3D.wallet();
		if(!Rich3D.Metamask() || !Rich3D.signedIn()) return alertify.alert(notSignMessage)
		jQuery('#loading').modal({backdrop: 'static', keyboard: false})
		try {
			let receipt = await Rich3D.write("withdraw")
			jQuery('#loading').modal('hide')
			alertify.log(withDrawSuccess)
			console.log(receipt)
		} catch(e) {
			alertify.log(withDrawrCancel)
			jQuery('#loading').modal('hide')
		}
				
	})

}

async function buyOneTicket(){
	// TODO : 1535012400000 2018.08.23 16:20
	//        1535025600000 2018.08.23 20:00
	if(new Date().getTime()<1535025600000){alertify.alert("游戏尚未开始，请您耐心等待。"); return;}

	if(!Rich3D.Metamask() || !Rich3D.signedIn()) return alertify.alert(notSignMessage)
	

	let correctNetwork  = await Rich3D.checkNetwork()
	if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
	var masternode = window.localStorage.getItem("masternode") ? window.localStorage.getItem("masternode") : "0x0" 

	try {
		let priceQuotation = await Rich3D.read('iWantXKeys', [new BigNumber(1050000000000000000)])
		jQuery('#loading').modal({backdrop: 'static', keyboard: false})
		let team = $("input[name='teamselect']:checked").val()
		if(!team) team = 0
		let receipt = await Rich3D.purchaseKeys(priceQuotation, team)
		jQuery('#loading').modal('hide')
		alertify.log(purchaseSuccess)
		console.log(receipt)
	} catch (e) {
		console.log(e)
		alertify.log(buyOrderCancel)
		jQuery('#loading').modal('hide')
	}
}

function parseDifference(start, end){
	// calc diff
    var diff = (( start.getTime() - end.getTime()) / 1000);
    // extract time units
    var minutes = ((diff / 60) % 60 ) | 0;
    var seconds = (diff % 60) | 0;
    var hours = (diff / 3600) | 0; 

    // prettify with a leading zero if less then ten per unit
   	var  minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = seconds < 10 ? "0" + seconds : seconds;
    var hours = hours < 10 ? "0" + hours : hours;

    return {
    	hours: hours,
    	minutes: minutes,
    	seconds: seconds,
    	diff
    }
}

// pepe
function pepe(){
	$(".animation").animate({bottom: "-30px"}, "slow");
	$(".animation").animate({left: "100%"}, "slow", function () {
		$(this).removeAttr('style');  
	});
}

async function buyceo(){
	let correctNetwork  = await Rich3D.checkNetwork()
	if(!correctNetwork) return alertify.alert(errorNetWorkMessage)
	$('#vanity').modal()
}

async function getQuote(){
	console.log("getQuote");
	let count = String($("#tixToBuy").val()).replace("key", "").replace("keys", "").replace("Key", "").replace("Keys", "")
	if(!Number.isInteger(parseInt(count))) return;
	count = new BigNumber(parseInt(count) * 1e18);
	
	let priceQuotation = await Rich3D.read('iWantXKeys', count)
	$("#tixQuotation").text(`@ ${new BigNumber(priceQuotation).plus(100).div(1e18).toFixed(8)} ETH`)
}

function refreshMessage(){
	console.log("refreshMessage");
	try{
		if (!Rich3D.Cache.currentRound || !Rich3D.Cache.currentRound[8]) return;
		vui.vCenterArea.buyButtonMessagePlayer = buyButtonMessagePlayer[Math.floor(buyButtonMessagePlayer.length * Math.random()) - 1].replace(/\$player/g, Rich3D.Browser.utils.toAscii(Rich3D.Cache.currentRound[8]))
		vui.vCenterArea.buyButtonMessageAnon = buyButtonMessageAnon[Math.floor(buyButtonMessageAnon.length * Math.random()) - 1].replace(/\$player/g, Rich3D.Browser.utils.toAscii(Rich3D.Cache.currentRound[8]))
		vui.vCenterArea.buyButtonMessageAnon = exitScamTheft[Math.floor(exitScamTheft.length * Math.random()) - 1]
	}catch(e) {
		console.error(e)
	}
}

function format2Date(date,fmt) {
	var o = {
			 "M+": date.getMonth() + 1, // 月份
			 "d+": date.getDate(), // 日
			 "h+": date.getHours(), // 小时
			 "m+": date.getMinutes(), // 分
			 "s+": date.getSeconds(), // 秒
			 "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
			 "S": date.getMilliseconds() // 毫秒
			 };
			 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			 for (var k in o)
			 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			 return fmt;
}

//倒计时
function countdown() {
	console.log("countdown");
	let now = Rich3D.date();
	// TODO: 1535012400000 : 2018.08.23 16:20
	//	     1535025600000 : 2018.08.23 20:00
	let endTime = 1535025600000 ;	// 2018/8/22 17:20:00
	if(endTime < now.getTime()) {
		$('#countdown_board').hide();
	}else{
		let sz1 = format2Date(now, 'yyyy年MM月dd日 hh时mm分ss秒');
		let t = now.getTime();
		let actualTime = parseDifference(new Date(endTime),now);
		
		let sz2 = actualTime.hours + "时" + actualTime.minutes + "分" + actualTime.seconds +"秒";
		jQuery("#coundown_time").html("现在时间是：" + sz1 + "<br/>" +
			"距离开始还有：" + sz2 ) ;
		$('#countdown_board').show();
	}
}


//初始化数据
async function initData(){
	console.log("initData");
	Rich3D.init();
	await Rich3D.synchronizeTime();
	setInterval('Rich3D.refreshTime()',950);
	setInterval('countdown()',950);
	await Rich3D.enableRefresher();
	refreshMessage();
	setInterval('refreshMessage()',5000);
	Rich3D.listen();
	let priceQuotation = await Rich3D.read('iWantXKeys', new BigNumber(parseInt(1) * 1e18));
	$("#tixQuotation").text(`@ ${new BigNumber(priceQuotation).plus(100).div(1e18).toFixed(8)} ETH`)
	setInterval('Rich3D.enableRefresher()',5000);

	
};