const PlayerBook = new function(){
	this.abiArray=[{"constant":false,"inputs":[],"name":"addMeToAllGames","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"communityAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registrationFee_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNameFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameNames_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gameAddress","type":"address"},{"name":"_gameNameStr","type":"string"}],"name":"addGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_nameStr","type":"string"}],"name":"checkIfNameValid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXnameFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gameID","type":"uint256"}],"name":"addMeToGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrNameList_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddrFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"}],"name":"useMyOldName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXIDFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setRegistrationFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameIDs_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"laff","type":"uint256"},{"name":"names","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerLAff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"}];
	this.contractAddress="0x5d99e9AB040efa45DE99a44C8410Cf8f61Cc3101";
	this.contentPath=""
	this.contractOperator;
	this.Browser;
	this.ContractBrower;

	this.init = function(){
		if (typeof web3 !== 'undefined') {
			if(web3.version.api && web3.version.api.includes("0.2")){
				var contractabi = web3.eth.contract(this.abiArray);
				this.contractOperator = contractabi.at(this.contractAddress);
			} else if (web3.version.includes("1.")) {
				this.contractOperator = web3.eth.Contract(this.abiArray, this.contractAddress);
			} else {
				throw "InvalidType: Unrecognized web3js version. Are you sure this is a web3js instance?"
			}
		}
		this.Browser = new Web3("https://mainnet.infura.io/YKZGQG2QTBx0tiWoB2IF");
		this.ContractBrower = new this.Browser.eth.Contract(this.abiArray, this.contractAddress);
	}

	this.Metamask = function(){
		return (typeof web3 !== "undefined" ? web3 : false);
	}

	this.signedIn = function (){
		return web3.eth.defaultAccount ? true : false;
	}

	this.checkNetwork = async fn => {
		try {
			if(!this.Metamask() || !this.signedIn()) return false
				return new Promise( (res, rej) => {
					web3.version.getNetwork(function(r, e){
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

	this.read =	async function(fn, params){
		if(!params || typeof params === "undefined") params = [];
		if(!Array.isArray(params)) params = [params];
		try {
			return this.ContractBrower.methods[fn].apply(null,  params).call()
		} catch(e) {
			console.error(e)
		}
	}

	this.write = async function(fn, params, metadata){
		if(web3.version.api && web3.version.api.includes("0.2")){
			if(!params || typeof params === "undefined") params = [];
			if(!Array.isArray(params)) params = [params];
			return new Promise((res, rej) => {
				if(metadata && typeof metadata === "object") params.push(metadata);
				params.push(function(err, data){
					if(err) return rej(err);
					return res(data)
				})
				try {
					this.contractOperator[fn].apply(null, params)
				} catch (e) {
					console.error(`Unknown method "${fn}" in contract.`)
				}

			})
		} else if (web3.version.includes("1.")) {
			if(!params || typeof params === "undefined") params = [];
			if(!Array.isArray(params)) params = [params];
			if(!metadata || typeof metadata !== "object") metadata = {};
			try {
				return this.contractOperator.methods[fn].apply(null,  params).send(metadata);
			} catch (e) {
				console.error(`Unknown method "${fn}" in contract.`);
			}

		} else {
			throw "InvalidType: Unrecognized web3js version. Are you sure this is a web3js instance?"
		}

	}

}
//初始化界面
$(function (){
	localStorage.setItem("masternode", window.location.search.slice(1))

	$(".vanity").click(async e=>{
		if(!PlayerBook.Metamask() || !PlayerBook.signedIn()) return alertify.alert("You are not signed into metamask.")
		let correctNetwork  = await PlayerBook.checkNetwork()
		if(!correctNetwork) return alertify.alert("You are not in the correct network.")
		$('#vanity').modal()
	})

	$(".closemodal").click(function(){
		$('#vanity').modal('hide')
	})


	$("#buyXname").click(async e => {
		try {
			let name = jQuery("#nameString").val()
			name = name.replace(/^\s+|\s+$/g,"");
			jQuery('#loading').modal({backdrop: 'static', keyboard: false})
			var masternode = window.localStorage.getItem("masternode") && window.localStorage.getItem("masternode") != "" ? JSON.parse(window.localStorage.getItem("masternode")).value : "" 
			console.log(name);
			console.log(masternode);
			let receipt = await PlayerBook.write("registerNameXname", [name,  masternode, true], {value: parseInt(new BigNumber(0))})
			jQuery('#loading').modal('hide')
			jQuery('#vanity').modal('hide')
			alertify.log(`Our artists are permanently writing your name to the blockchain right now!`)
		}
		catch(e) {
			alertify.log(`Vanity purchase has been cancelled.`)
			jQuery('#loading').modal('hide')
			jQuery('#vanity').modal('hide')
		}
	})

	PlayerBook.init();

	var clipboard = new ClipboardJS('.copyBtn', {
  		text: function(trigger) {
  			var text =trigger.getAttribute('data-clipboard-target');
			  return copyFirst+$(text).html()+copyLast;
    	}
  	});
  	clipboard.on('success', function(e) {
        alertify.success(`Your Link is Copied.`)
    });

})


setInterval(async fn => {
	if(!web3) return;
	if(!web3.eth.defaultAccount) return;
	if(parseInt(web3.eth.defaultAccount) == 0) return;
	let PID = await PlayerBook.read("pIDxAddr_", web3.eth.defaultAccount);
	console.log(PID);
	let player = await PlayerBook.read("plyr_", PID.toString());
	console.log("player:"+player[0]);
	console.log("player:"+player[1]);
	if(player[0] == "0x0000000000000000000000000000000000000000") return;
	if(player[1] == "0x0000000000000000000000000000000000000000000000000000000000000000") return;
	$('.aff').show();
	var urlPre = `${window.location.origin}${window.location.pathname}?`
	// $('.aff code').text(window.location.origin+`/${PlayerBook.contentPath}?`+`${encodeURI(web3.toAscii(player[1])).replace(/%00/g, "")}`)
	$('.aff code').text(`${window.location.origin}/?`+`${PID}`)
}, 1000)

this.copyFirst=`Rich 3D， 首款社区制游戏玩法，邀请即挖矿，错过F3D，还有Rich 3D，大富豪带你走向财富之路，点击`    
this.copyLast=`加入Rich 3D成为社区合伙人，共享团队分红，体验非一般的游戏感受。`