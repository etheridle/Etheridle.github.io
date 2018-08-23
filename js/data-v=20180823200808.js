const vui = new function(){};

const Rich3D = new function(){
	this.contentPath=""
	this.TimeDifference=false;
	this.tutorialMode;
	this.Browser;
	this.Websocket;
	this.listeners = {}
	this.GameContractOperator;
	this.GameContractBrower;
	this.GameContractWebsocket;

	this.abiArray=[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FoundationAddr_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDropTracker_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"},{"name":"prevres","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"r3","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"affAddr_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_otherRich3D","type":"address"}],"name":"setOtherRich3D","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"communityAddr_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"agentAddr_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"r3","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airDropPot_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"R3Amount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"},{"indexed":false,"name":"airDropPot","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"R3Amount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"R3Amount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"R3Amount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}];
	this.contractAddress='0x58232003B3D18021acFc9213D27D6F8b72F4F029';
	this.Cache = {};
	this.Cache.gracePeriod = false;

	this.init = function(){
		if (typeof web3 !== 'undefined') {
			if(web3.version.api && web3.version.api.includes("0.2")){
				var contractabi = web3.eth.contract(this.abiArray);
				this.GameContractOperator = contractabi.at(this.contractAddress);
			} else if (web3.version.includes("1.")) {
				this.GameContractOperator = web3.eth.Contract(this.abiArray, this.contractAddress);
			} else {
				throw "InvalidType: Unrecognized web3js version. Are you sure this is a web3js instance?"
			}

		}
		this.Browser = new Web3("https://mainnet.infura.io/YKZGQG2QTBx0tiWoB2IF");
		this.Websocket = new Web3("wss://mainnet.infura.io/_ws");
		this.GameContractBrower = new Rich3D.Browser.eth.Contract(this.abiArray, this.contractAddress);
		this.GameContractWebsocket = new Rich3D.Websocket.eth.Contract(this.abiArray, this.contractAddress);
	}

	this.Metamask = function(){
		return (typeof web3 !== "undefined" ? web3 : false);
	}

	this.signedIn = function (){
		return web3.eth.defaultAccount ? true : false;
	}

	this.getCurrentPlayer = async function() {

		if(!Rich3D.wallet()) return false

		// fetch player ID
		let PID = await Rich3D.read("pIDxAddr_", Rich3D.wallet())
		
		// fetch round information
		let roundInformation = await Rich3D.read("getPlayerInfoByAddress", Rich3D.wallet())

		// fetch vaults
		let vaultInformation = await Rich3D.read("getPlayerVaults", PID)

		// cache information
		return {
			PID: PID,
			Vaults: await this.read("getPlayerVaults", PID),
			Round: roundInformation
		}
	}

	this.wallet = function() {
		if (typeof web3 !== 'undefined') {
			if(web3.version.api && web3.version.api.includes("0.2")){
				return web3.eth.defaultAccount
			} else if (web3.version.includes("1.")) {
				return web3.eth.defaultAccount
			} else {
				throw "InvalidType: Unrecognized web3js version. Are you sure this is a web3js instance?"
			}
		}
		else {
			return "";
		}
	}

	//合约操作
	this.read =	async function(fn, params){
		if(!params || typeof params === "undefined") params = []
		if(!Array.isArray(params)) params = [params]
		try {
			return this.GameContractBrower.methods[fn].apply(null,  params).call()
		} catch(e) {
			console.error(e)
		}
	}

	this.write = async function(fn, params, metadata){
		if(web3.version.api && web3.version.api.includes("0.2")){
			if(!params || typeof params === "undefined") params = []
			if(!Array.isArray(params)) params = [params]
			return new Promise((res, rej) => {
				if(metadata && typeof metadata === "object") params.push(metadata)
				params.push(function(err, data){
					if(err) return rej(err)
					return res(data)
				})
				try {
					this.GameContractOperator[fn].apply(null, params)
				} catch (e) {
					console.error(`Unknown method "${fn}" in contract.`)
				}
					
				})
		} else if (web3.version.includes("1.")) {
			if(!params || typeof params === "undefined") params = []
			if(!Array.isArray(params)) params = [params]
			if(!metadata || typeof metadata !== "object") metadata = {}
			try {
				return this.GameContractOperator.methods[fn].apply(null,  params).send(metadata)
			} catch (e) {
				console.error(`Unknown method "${fn}" in contract.`)
			}
			
		} else {
			throw "InvalidType: Unrecognized web3js version. Are you sure this is a web3js instance?"
		}

	}

	this.refreshTime = function() {
		console.log("refreshTime");
		regisetbutton();
		if (!Rich3D.Cache.currentRound) return;

		let endTime = new Date(parseInt(Rich3D.Cache.currentRound[3])*1000);
		let difference = parseDifference(endTime,Rich3D.date());
		let expired = difference.diff < 0;
		let now = (Rich3D.date().getTime());
		console.log("endTime:"+endTime);
		console.log("diff:"+difference.diff);
		console.log("difference:"+difference.hours+":"+difference.minutes+":"+difference.seconds);

		if(!expired){
			if(Rich3D.Cache.gracePeriod){
				let actualTime = parseDifference(new Date((parseInt(Rich3D.Cache.currentRound[3]) - 90)*1000), Rich3D.date())
				jQuery(".headtimer").text(`${(actualTime.hours == "00" ? "" : actualTime.hours + ":") }${actualTime.minutes}:${actualTime.seconds}`)
			} else {
				jQuery(".headtimer").text(`${(difference.hours == "00" ? "" : difference.hours + ":") }${difference.minutes}:${difference.seconds}`)

			}
			
			jQuery(".boxtimer").text(`${(difference.hours == "00" ? "" : difference.hours + ":") }${difference.minutes}:${difference.seconds}`)

			var timeTotal = parseInt(parseInt(Rich3D.Cache.currentRound[3]) - parseInt(Rich3D.Cache.currentRound[4]))
			var timeRemaining = parseInt(Rich3D.Cache.currentRound[3]) - now/1000
			var timePercentage = 100 - timeRemaining / (timeTotal / 100)

			jQuery(".progress-bar.boxglow").css('width', `${Math.floor(timePercentage)}%`)

		} else {
			jQuery("#quotes").removeClass("active")
		}

	}

	this.date = function() {
		if(Rich3D.TimeDifference === false) return new Date()
		if(Rich3D.TimeDifference.slice(0, 1) == "+"){
			return new Date(new Date().getTime() + parseInt(Rich3D.TimeDifference.slice(1)))
		} else {
			return new Date(new Date().getTime() - parseInt(Rich3D.TimeDifference.slice(1)))
		}
	}

	this.enableRefresher = async function(){
		console.log("enableRefresher:"+new Date());
		//获取数据
		Rich3D.Cache.currentRound = await Rich3D.read("getCurrentRoundInfo")
		Rich3D.Cache.lastRound = await Rich3D.read("round_", Rich3D.Cache.currentRound[1])
		Rich3D.Cache.airdropTracker = new BigNumber(await Rich3D.read("airDropTracker_")).div(10).toString()
		var tmpAirdropPot = (Rich3D.Cache.currentRound[13]).slice(0,-3)
		Rich3D.Cache.airdropPot = tmpAirdropPot=='' ? new BigNumber(0).toFixed(2): new BigNumber((Rich3D.Cache.currentRound[13]).slice(0,-3)).div(1e18).toFixed(2)
		Rich3D.Cache.defaultAccount = Rich3D.wallet();
		Rich3D.Cache.roundHasPassed = Math.floor( Rich3D.date().getTime() / 1000) > Rich3D.Cache.currentRound[3];
		if(Rich3D.Metamask() && Rich3D.signedIn()) Rich3D.Cache.currentPlayer = await Rich3D.getCurrentPlayer();
		Rich3D.Cache.playerIsLeader = Rich3D.Metamask() && Rich3D.signedIn() && Math.floor(parseInt(Rich3D.Cache.currentRound[6]/10)) == parseInt(Rich3D.Cache.currentPlayer.PID)
		Rich3D.Cache.playerHasWon = Rich3D.Cache.roundHasPassed && Rich3D.Cache.playerIsLeader
		var urlPre = `${window.location.origin}${window.location.pathname}?`
		Rich3D.Cache.isCEO = Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentPlayer && Rich3D.Cache.currentPlayer.Round && Rich3D.Cache.currentPlayer.Round[1] !== "0x0000000000000000000000000000000000000000000000000000000000000000"
		Rich3D.Cache.myLink = Rich3D.Cache.isCEO ? `${urlPre}${Rich3D.Cache.defaultAccount}` : `#`
		Rich3D.Cache.myLinkid = Rich3D.Cache.isCEO ? `${urlPre}`+Rich3D.Cache.currentPlayer.PID : `#`
		Rich3D.Cache.myLinkName = Rich3D.Cache.isCEO ? `${urlPre}`+Rich3D.Browser.utils.toAscii(Rich3D.Cache.currentPlayer.Round[1]) : `#`
		Rich3D.Cache.myLinkName = Rich3D.Cache.myLinkName.replace(/ /g,'%20')

		vui.vTopbar.airdropTracker = Rich3D.Cache.airdropTracker;
		vui.vTopbar.airdropPot = Rich3D.Cache.airdropPot;
		vui.vTopbar.yourkeys = (Rich3D.Metamask() && Rich3D.signedIn()) ? new BigNumber(Rich3D.Cache.currentPlayer.Round[2]).div(1e18).toFormat(4) : new BigNumber(0).toFixed(4)
		vui.vTopbar.isCEO = Rich3D.Cache.isCEO;
		vui.vTopbar.myLinkName = Rich3D.Cache.myLinkid;

		vui.vCenterArea.gracePeriod = Rich3D.Cache.gracePeriod;
		vui.vCenterArea.roundHasPassed =Rich3D.Cache.roundHasPassed;
		vui.vCenterArea.playerIsLeader =Rich3D.Cache.playerIsLeader;
		vui.vCenterArea.currentRound8 = Rich3D.Cache.currentRound[8];
		vui.vCenterArea.value1 = Rich3D.Browser.utils.toAscii(Rich3D.Cache.currentRound[8])
		vui.vCenterArea.value2 = new BigNumber(Rich3D.Cache.currentRound[0]).plus(Rich3D.Cache.currentRound[5]).div(1e18).toFixed(4)
		vui.vCenterArea.value3 = new BigNumber(Rich3D.Cache.currentRound[5]).div(1e18).toFixed(4)
		vui.vCenterArea.value4 = (Rich3D.Cache.currentRound[8] && Rich3D.Cache.currentRound[8] !=  "0x0000000000000000000000000000000000000000000000000000000000000000" ? Rich3D.Browser.utils.toAscii(Rich3D.Cache.currentRound[8]) : Rich3D.Cache.currentRound[7].substr(0, 10).concat("..."))
		vui.vCenterArea.value5 = new BigNumber(Rich3D.Cache.currentRound[5]).div(10).div(1e18).toFixed(5)

		vui.vPurchaseArea.roundHasPassed = Rich3D.Cache.roundHasPassed;
		vui.vPurchaseArea.airdropTracker = Rich3D.Cache.airdropTracker;
		vui.vPurchaseArea.airdropPot = Rich3D.Cache.airdropPot;

		vui.vVaultArea.roundHasPassed = Rich3D.Cache.roundHasPassed;
		vui.vVaultArea.onLockdownEth = (Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentRound[2]!=0) ? new BigNumber(Rich3D.Cache.currentRound[5]).div(100).multipliedBy(30).div(new BigNumber(Rich3D.Cache.currentRound[2])).multipliedBy(new BigNumber(Rich3D.Cache.currentPlayer.Round[2])).div(1e18).toFixed(4) : new BigNumber(0).toFixed(4);
		vui.vVaultArea.exitScammedEth = (Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentPlayer && Rich3D.Cache.currentPlayer.Vaults) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[0]).div(1e18).toFixed(4) : new BigNumber(0).toFixed(4)
		vui.vVaultArea.bacAdviceEth = (Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentPlayer && Rich3D.Cache.currentPlayer.Vaults) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[2]).div(1e18).toFixed(4) : new BigNumber(0).toFixed(4);
		vui.vVaultArea.totalGainsEth = (Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentPlayer && Rich3D.Cache.currentPlayer.Vaults) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[0]).plus(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[2]).div(1e18).toFixed(4) : new BigNumber(0).toFixed(4);
		// vui.vVaultArea.totalGainsUSDT = (Rich3D.Metamask() && Rich3D.signedIn() && Rich3D.Cache.currentPlayer && Rich3D.Cache.currentPlayer.Vaults) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[0]).plus(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[2]).div(1e18).multipliedBy(Rich3D.Cache.exchangeRates.USD).toFixed(5) : new BigNumber(0).toFixed(5);

		vui.vRefArea.isCEO = Rich3D.Cache.isCEO;
		// vui.vRefArea.myLink = Rich3D.Cache.myLink;
		vui.vRefArea.myLinkid = Rich3D.Cache.myLinkid;
		// vui.vRefArea.myLinkName = Rich3D.Cache.myLinkName;

		vui.vPotArea.currentRound = Rich3D.Cache.currentRound[1];
		vui.vPotArea.playerIsLeader = Rich3D.Cache.playerIsLeader;
		vui.vPotArea.roundHasPassed = Rich3D.Cache.roundHasPassed;
		vui.vPotArea.activePot1 = new BigNumber(Rich3D.Cache.currentRound[5]).div(1e18).toFormat(2)
		vui.vPotArea.activePot2 = new BigNumber(Rich3D.Cache.currentRound[5]).div(1e19).toFormat(5)
		// vui.vPotArea.activePot1USDT = new BigNumber(Rich3D.Cache.currentRound[5]).div(1e18).multipliedBy(Rich3D.Cache.exchangeRates.USD).toFormat(5)
		// vui.vPotArea.activePot2USDT = new BigNumber(Rich3D.Cache.currentRound[5]).div(1e19).multipliedBy(Rich3D.Cache.exchangeRates.USD).toFormat(5)
		vui.vPotArea.yourKeys = (Rich3D.Metamask() && Rich3D.signedIn()) ? new BigNumber(Rich3D.Cache.currentPlayer.Round[2]).div(1e18).toFormat(4) : new BigNumber(0).toFormat(4)
		vui.vPotArea.totalKeys = new BigNumber(Rich3D.Cache.currentRound[2]).div(1e18).toFormat(0)
		vui.vPotArea.yourEarnings = (Rich3D.Metamask() && Rich3D.signedIn()) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[0]).plus(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[2]).div(1e18).toFormat(4) : new BigNumber(0).toFormat(4)
		// vui.vPotArea.yourEarningsUSDT = (Rich3D.Metamask() && Rich3D.signedIn()) ? new BigNumber(Rich3D.Cache.currentPlayer.Vaults[0]).plus(Rich3D.Cache.currentPlayer.Vaults[1]).plus(Rich3D.Cache.currentPlayer.Vaults[2]).div(1e18).multipliedBy(Rich3D.Cache.exchangeRates.USD).toFormat(5) : new BigNumber(0).toFormat(5)

		vui.vTeamArea.twhale = new BigNumber(Rich3D.Cache.currentRound[9]).div(1e18).toFormat(4);
		vui.vTeamArea.tbear = new BigNumber(Rich3D.Cache.currentRound[10]).div(1e18).toFormat(4);
		vui.vTeamArea.tbull = new BigNumber(Rich3D.Cache.currentRound[12]).div(1e18).toFormat(4);
		vui.vTeamArea.tsnek = new BigNumber(Rich3D.Cache.currentRound[11]).div(1e18).toFormat(4);

		vui.vStatsArea.currentRound = Rich3D.Cache.currentRound[1]
		vui.vStatsArea.totalInvested = ((new BigNumber(Rich3D.Cache.currentRound[9])).plus(new BigNumber(Rich3D.Cache.currentRound[10])).plus(new BigNumber(Rich3D.Cache.currentRound[11])).plus(new BigNumber(Rich3D.Cache.currentRound[12]))).div(1e18).toFormat(3)
		// vui.vStatsArea.totalInvestedUSDT = (((new BigNumber(Rich3D.Cache.currentRound[9])).plus(new BigNumber(Rich3D.Cache.currentRound[10])).plus(new BigNumber(Rich3D.Cache.currentRound[11])).plus(new BigNumber(Rich3D.Cache.currentRound[12])))).div(1e18).multipliedBy(Rich3D.Cache.exchangeRates.USD).toFormat(2)
		vui.vStatsArea.rewards = ((new BigNumber(Rich3D.Cache.currentRound[9])).plus(new BigNumber(Rich3D.Cache.currentRound[10])).plus(new BigNumber(Rich3D.Cache.currentRound[11])).plus(new BigNumber(Rich3D.Cache.currentRound[12])).minus(new BigNumber(Rich3D.Cache.currentRound[5]))).div(1e18).toFormat(3)
		// vui.vStatsArea.rewardsUSDT = ((new BigNumber(Rich3D.Cache.currentRound[9])).plus(new BigNumber(Rich3D.Cache.currentRound[10])).plus(new BigNumber(Rich3D.Cache.currentRound[11])).plus(new BigNumber(Rich3D.Cache.currentRound[12])).minus(new BigNumber(Rich3D.Cache.currentRound[5]))).multipliedBy(Rich3D.Cache.exchangeRates.USD).div(1e18).toFormat(2)
		vui.vStatsArea.purchasedYear = ((new BigNumber(Rich3D.Cache.currentRound[2])).div(1e18).multipliedBy(60000)).div(31536000000).toFixed(2)
		vui.vStatsArea.purchasedSeconds = ((new BigNumber(Rich3D.Cache.currentRound[2])).div(1e18).multipliedBy(60)).toFormat(0)

	}

	this.synchronizeTime = async function() {
		console.log("synchronizeTime");
		try {
			if(Rich3D.TimeDifference === false){
				let remote = await jQuery.get(`/api/time`)
				console.log("remote:"+remote.time);
				//let remote = await this.getServerTime();
				let local = new Date().getTime()
				//let diff = new Date().getTime() - remote.getTime()
				let diff = new Date().getTime() - remote.time
				Rich3D.TimeDifference = (diff < 0) ? `+${diff.toString().slice(1)}` : `-${diff.toString()}`
			}

			if(Rich3D.TimeDifference.slice(0, 1) == "+"){
				return new Date().getTime() + parseInt(Rich3D.TimeDifference.slice(1))
			} else {
				return new Date().getTime() - parseInt(Rich3D.TimeDifference.slice(1))
			}
		} catch(e) {
			throw e
		}
	} 

	this.getServerTime = function(){
      	return new Date($.ajax({async: false}).getResponseHeader("Date"));
	}

	/**
	 * Setup listeners
	 */
	this.listen = async function() {
		console.log("listening")
		var $this = this
		if(!this.Websocket.version.includes("1.")) throw "InvalidVersion: This version of web3js does not support events"
		// if(this.listeners.ws) this.listeners.ws.unsubscribe()
		try {
			console.log("Setting up event listeners..")
			this.listeners.ws = this.GameContractWebsocket.events.allEvents(function(err, event, sub){
				console.log("incoming..")
				var tt = typeof err
				console.log("Bridge reporting", err, event, sub, tt)
				if(err){
					console.log("closing and reopening..", err, event, sub)
					Rich3D.listen()
					return
				} else {
					Rich3D.processEvent(event);
				}
			})
		} catch(e) {
			console.log(e)
			return
		}
	}

	this.processEvent = async function(e){
		var isOurs = false
		if(Rich3D.Metamask() && Rich3D.signedIn()) {
			Rich3D.Cache.currentPlayer = await Rich3D.getCurrentPlayer()
			isOurs = e.returnValues.playerID && e.returnValues.playerID == Rich3D.Cache.currentPlayer.PID 

		}
		switch(e.event){
			case "onEndTx":
				if(isOurs){
					console.log(onEndTx1+`${new BigNumber(e.returnValues.keysBought).div(1e18).toFixed(4)} `+onEndTx2)
					alertify.logPosition("bottom left");
					alertify.success(onEndTx1+`${new BigNumber(e.returnValues.keysBought).div(1e18).toFixed(4)} `+onEndTx2)
				} else {
					alertify.logPosition("bottom right");
					let message = Rich3D.Browser.utils.toAscii(e.returnValues.playerName).trim()
					if(e.returnValues.playerName == "0x0000000000000000000000000000000000000000000000000000000000000000") message = `Someone`
					if(parseInt(new BigNumber(e.returnValues.keysBought).toString()) == 0) {
						message += onEndTx3+`${new BigNumber(e.returnValues.ethIn).div(1e18).toFixed(4)} `+onEndTx4
					} else {
						message += onEndTx5+`${new BigNumber(e.returnValues.keysBought).div(1e18).toFixed(4)} `+onEndTx6
					}
					
					alertify.success(message)
					console.log(message)
				}
			break;
			case "onWithdraw": 
			case "onWithdrawAndDistribute":
				if(isOurs){
					console.log(onWithdraw1+` ${new BigNumber(e.returnValues.ethOut).div(1e18).toFixed(4)} `+onWithdraw2)
					alertify.logPosition("bottom left");
					alertify.success(onWithdraw3+`  ${new BigNumber(e.returnValues.ethOut).div(1e18).toFixed(4)} `+onWithdraw4)
				} else {
					alertify.logPosition("bottom right");
					let message = Rich3D.Browser.utils.toAscii(e.returnValues.playerName).trim()
					if(message == "") message = `someone`
					message += onWithdraw5+`  ${new BigNumber(e.returnValues.ethOut).div(1e18).toFixed(4)} `+onWithdraw6	
					alertify.success(message)
					console.log(message)
				}
			break;
			case "onNewName":
				if(isOurs){
					console.log(onNewName1+` ${Rich3D.Browser.utils.toAscii(e.returnValues.playerName)}.`)
					alertify.logPosition("bottom left");
					alertify.success(onNewName2+` ${Rich3D.Browser.utils.toAscii(e.returnValues.playerName)}.`)
				} else {
					alertify.logPosition("bottom right");
					alertify.success(onNewName3+` ${Rich3D.Browser.utils.toAscii(e.returnValues.playerName)}.`)
					console.log(`A new member has been added to our Advisory Board. Please welcome ${Rich3D.Browser.utils.toAscii(e.returnValues.playerName)}.`)
				}
			default:
			break;
		}
	}

	this.checkNetwork = async fn => {
		try {
			if(!this.Metamask() || !this.signedIn()) return false
			return new Promise( (res, rej) => {
				web3.version.getNetwork(function(r, e){
					console.log("e"+e)
					if(r) return rej(r)
					if(e == "1"){ 
						return res(true)
					} else {
						return res(false)
					}
				})
			})
		} catch (e) {
			throw e
		}
	},

	this.purchaseKeys = async function(amount, team, reinvest) {
		let masternode = localStorage.getItem("masternode") && JSON.parse(localStorage.getItem("masternode")) ? JSON.parse(localStorage.getItem("masternode")) : false
		let prefix = reinvest ? `reLoad` : `buy`
		console.log('pusdf')
		if(masternode) {
			switch(masternode.type) {
				case "id":
					return reinvest ? this.write(`${prefix}Xid`, [masternode.value, team, amount]) : this.write(`${prefix}Xid`, [masternode.value, team], {value: amount})
				break;
			}	
		} else {
			return reinvest ? this.write(`${prefix}Xid`, [0, team, amount]) : this.write(`${prefix}Xaddr`, ["0", team], {value: amount})
		}
	}

}

var Private = {
    /**
     * First string of a name
     * @type {Array}
     */
    nouns: ["ninja", "truce", "harj", "finney", "szabo", "gwei", "laser", "justo", "satoshi", "mantso", "3D", "inventor", "theShocker", "aritz", "sumpunk", "cryptoknight", "randazz", "kadaz", "daok", "shenron", "notreally", "thecrypt", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"],
   
    /**
    * Last string of a name
    * @type {Array}
    */
    adjectives: ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "harjd", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"],

    /**
     * Returns a random index bound to the max length of any given array.
     * @param  {array} array Array to pick from.
     * @return {int}       Key of the array.
     */
    randomKey: function(list){
        return Math.floor(Math.random() * list.length)
    }
}

/**
 * All methods that we want accesible from our views/controllers.
 * @type {Object}
 */
var Public = {

    /**
     * Compose a random name based upon our nouns and adjectives
     * @return {string} Frankenstein'd random name.
     */
    generate: function(){
        var noun        = Private.nouns[ Private.randomKey(Private.nouns) ]
        var adjective   = Private.adjectives[ Private.randomKey(Private.adjectives) ]
        return `${adjective} ${noun}`
    }  
}
