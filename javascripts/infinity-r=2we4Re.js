

$(function () {
    $(document).on("click", ".TabSelect .Lefts ul.Tab li", function () {
        $(".TabSelect .Lefts ul.Tab li").removeClass("Select") ;
        $(this).addClass("Select");
        $(".TabSelect .Lefts .TabCon .tablist").hide();
        $(".TabSelect .Lefts .TabCon .tablist").eq($(this).index()).fadeIn();
    });

    $(document).on("click", ".TabSelect .Rights ul.Tab li", function () {
        $(".TabSelect .Rights ul.Tab li").removeClass("Select") ;
        $(this) .addClass("Select");
        $(".TabSelect .Rights .TabCon .tablist").hide();
        $(".TabSelect .Rights .TabCon .tablist").eq($(this).index()).fadeIn();
    })
});

var    personalStatus= function() {
    var address =  checkAccount( false );
    if(address!=null){
        $.ajax({
            url: "/ps/"+address  +"?"+new Date()   ,
            data: {},
            async:false,
            success: function(data,status ){
                if(data){
                    $("#ActivePot").val(data.ActivePot);
                    $("#RoundCumulativeInput").val(data.RoundCumulativeInput);
                    $("#RoundCumulativeEarnings").val(data.RoundCumulativeEarnings);
                    $("#RoundEarning").val(data.RoundEarning);
                }
            },
            error: function(){}
        });
    }
};


var  personalTal = function(){
    personalStatus();
    vault()
};
/*******查询Personal     Status*******/
var vault   = function() {
    var address =  checkAccount(false);
    if(address!=null){
        $.ajax({
            url: "/vault/"+address +"?"+new Date() ,
            data: {},
            async:true,
            success: function(data,status ){
                if(data){
                    $("#Dividend").val(data.Dividend);
                    $("#GoodAdvise").val(data.GoodAdvise);
                    $("#TotalGains").val(data.TotalGains);
                }
            },
            error: function(){}
        });
    }
};

var checkAccount = function (  showalert ){

    var ismobile =  getCookie("device") == "mobile";
    if( typeof  web3 =="undefined" ||  typeof  web3.eth =="undefined"   || typeof   web3.eth.accounts =="undefined" ){
        if(   ismobile!=true ) {
            imageAlert("Install MetaTask");
        }
        return;
    }
    var account = web3.eth.accounts[0];
    if(  !account || account == null || !web3.isAddress(account)){
        if(showalert  == true &&  ismobile!=true )
        {
            imageAlert("LogIn MetaTask");
        }
    }
    $("#masterCodeUrl").text(  window.location.host+"?mastenode="+account) ;
    $("#masterCodeUrl").attr("href",  "http://"+window.location.host+"?mastenode="+account) ;
    return account;
};
/******更新USD对应数据******/
var ethPrice = 0;
var currency = (typeof default_currency === 'undefined') ? 'usd' : default_currency;
function updateEthPrice () {
    $.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert='+currency , function (result) {
        var eth = result[0]
        ethPrice = parseFloat(eth['price_' + currency.toLowerCase()]);
        var data =  new BigNumber( totalEth ).multipliedBy(ethPrice).toNumber().toFixed(2);
        $('#forusvalueusd').text(data.toLocaleString() + "USD")
    });
};


/****     更新   总量  更新进度条  *****/

var  updatetitotalEth = function(){
    $.getJSON('/common?r='+new Date() , function (result) {
        if(result){
            $("#totalEth").text(result.total);
            endtime = result.endTime;
            totalEth = result.total;
            var totalUsd =  new BigNumber( totalEth ).multipliedBy(ethPrice).toNumber().toFixed(2);
            $("#achieved").text(result.achieved);
            $("#rateId").text(result.rate+"%");
            $("#rateIdCss").css("width",result.rate+"%");
            $("#targetp").text(result.target);
            if(lang == "en"){
                $("#loopstepInfo").text(  "Round " +result.loop + "，Stage " +result.step+ " Time Remaining"  );
            }else{
                $("#loopstepInfo").text(  "第" +result.loop + "輪，第" +result.step+ "階段倒計時"  );
            }

            $('#forusvalueusd').text(totalUsd.toLocaleString() + "USD");
            currentTotal = totalEth ;
            currentLoop = result.loop ;
            currentStep = result.step;
            updateEthPrice();
        }
    });
};

var perjackpotAmount = 0.0;
var dividendAmount = 0.0;
var LoopPerjackpotAmount = function () {
    //   /perRound/:rid
    if(   (   typeof ( currentLoop) == "undefined"  ||    typeof ( currentStep) == "undefined"   ) || currentLoop<=1 ||  currentStep<=1 ){
        return;
    }

    $.getJSON('/perRound/'+(currentLoop -1 )   +"?"+new Date()  , function (result) {
        if(result && result.jackpotAmount){
                perjackpotAmount = result.jackpotAmount;
                dividendAmount = result.dividendAmount;
        }
    });
}



var allTotalLoop = {};
var loopgetJson = function (tableId,loopId,step,maxstep) {
    var tableTagId = tableId;
    if(  typeof( allTotalLoop[tableTagId])  =="undefined" || typeof( allTotalLoop[tableTagId].runing)  =="undefined"   ){
        allTotalLoop[tableTagId] = { runing:true,TotalInput:0};
    }
    if(step   >maxstep   ||  step==0 || loopId==0  || typeof( loopId)  =="undefined" ||  typeof(step)  =="undefined"){
       try{
           allTotalLoop[tableTagId] .TotalInput = 0;
           allTotalLoop[ tableTagId ].runing = false;
       }catch(e){      }
        return;
    }
    $.getJSON('/row/'+loopId+'/'+step +"?"+new Date() , function (result) {
                if(result){
                                var oddrow = "";
                                if ( result.Stage && result.Stage%2 == 0){
                                    oddrow = 'TT3';
                                }
                                let htmlStr ="";
                                htmlStr +='<li class="TT2  '+oddrow+'  ">   <p class="PP1">'+ result.Stage +'</p>';
                                var unit = " S";
                                if( lang == "zh" ){
                                    unit = " 秒";
                                }
                                htmlStr+='  <p class="PP2">'+   result.Duration   +unit +' </p>    <p class="PP3">'+   result.TotalInput  + 'ETH</p>';

                                if(   typeof (allTotalLoop[tableTagId] .TotalInput) =="undefined"  ){
                                    allTotalLoop[tableTagId] .TotalInput   = 0  ;
                                }
                                var ROI = 0.00;
                                try{
                                      allTotalLoop[tableTagId] .TotalInput  = allTotalLoop[tableTagId] .TotalInput +   parseFloat( result.TotalInput );
                                      if(allTotalLoop[tableTagId] .TotalInput  == 0 ||  parseFloat( result.TotalInput ) == 0 ){
                                          ROI =  0.00;
                                      }else{

                                          ROI =     (   parseFloat( result.dividendAmount )  *100 /   allTotalLoop[tableTagId] .TotalInput  );
                                          ROI = ROI.toFixed(2);
                                      }
                                     $( "#"+tableId  ).find("li").each(function( index ,val ) {
                                            $(val).find("p").each(function(i,v){
                                                if(i==3) {
                                                        let text=  $(v).text().replace("%","");
                                                        let textVal =  parseFloat( text,0) ;
                                                        if(textVal==0){

                                                        }else{
                                                                let  ntext = parseFloat(ROI) +textVal;
                                                                $(v).text(ntext.toFixed(2)+"%");
                                                        }
                                                }
                                            }) ;
                                    })
                                }catch(e){    }

                                if(   (step +1)   >  maxstep){
                                    try{
                                        var  tempTotal   =  $("#totalEth").text();
                                        var  tempachieved   =  $("#achieved").text();
                                        var poolloter       =       parseFloat(   tempTotal )  *0.7   ;
                                        var achievedval       =       parseFloat(   tempachieved )  *0.98   ;
                                        if(  tableTagId == "PreviousRoundListId"   &&  perjackpotAmount != 0 && perjackpotAmount != ""){
                                            poolloter =   parseFloat(perjackpotAmount) * 0.7 ;
                                            achievedval = parseFloat(dividendAmount) * 0.98;
                                            tempachieved =  parseFloat(dividendAmount);
                                        }

                                        ROI =       (   (  (   poolloter + achievedval    )  *100 )     /     (  parseFloat( tempachieved  )     )  );
                                        ROI = ROI. toFixed(2)
                                    }catch (e) {
                                    }
                                }
                                htmlStr+=' <p class="PP4">'+ ROI  + '%</p>';
                                htmlStr+='   </li>';
                                if(step==1){
                                    $("#"+tableId).html("");
                                }
                                $( "#"+tableId ).append(htmlStr);
                                loopgetJson( tableId,   loopId ,  1+step   ,maxstep );
                }
    });
  //  $.ajaxSettings.async = true;
};
/***  更新方法 ****/
var tableRowRun = function(){
    tableRow(false);
}
var  tableRow = function( init ){
    if(   (   typeof ( currentLoop) == "undefined"  ||    typeof ( currentStep) == "undefined"   ) || currentLoop<=0 ||  currentStep<=0 ){
        return;
    }
    /****更新表格数据****/
    if( init == true ||  (   allTotalLoop["CurrentListId"]  &&  typeof(allTotalLoop["CurrentListId"].runing ) == "boolean" && allTotalLoop[ "CurrentListId" ].runing == false    )  ){
        updateTableRow("CurrentListId",currentLoop   ,currentStep );
    }

    if(  (  currentLoop  - 1)   >0  ){
        $.getJSON('/step/by/'+(currentLoop -1 )   +"?"+new Date()  , function (result) {
            if(result && result.currentStep){
                if( init == true ||  ( allTotalLoop["PreviousRoundListId"]  && typeof(    allTotalLoop["PreviousRoundListId"].runing  ) == "boolean" && allTotalLoop["PreviousRoundListId"].runing == false )  ){
                    updateTableRow("PreviousRoundListId",(currentLoop -1 )  ,  result.currentStep );
                }
            }
        });
    }
}
var updateTableRow = function( tableId, loop,stage){
    loopgetJson(   tableId  ,loop   ,   1  ,    stage   );
};

/**
 *  n表示的毫秒数
 * @param n
 */
function sleep(n) {
    var start = new Date().getTime();
    while (true) if (new Date().getTime() - start > n) break;
}
/******计算倒计时******/
var lang  ="en";
var CountdownHMS = function(){
    var obj = window.Tool.limitTime(endtime);
    lang =  getCookie("lang");
    if(obj.H ==0 && obj.M ==0 && obj.S ==0 ){
        let message = "Send a transaction to execute the next stage.";
        if(lang =="zh"){
            message = "需要發送交易激活下一階段.";
        }
        $("#CountdownHMS").text(   message  );
    }else{
        $("#CountdownHMS").text(   obj.H +"H "+ obj.M+" M " +obj.S+" S"     );
    }
};

setTimeout(function(){   checkAccount(true);    }, 3000);
CountdownHMS();
personalTal();
tableRow(  true );

function clearNoNum1(obj) {
    /******修复第一个字符是小数点 的情况.***/
    if (obj.value != '' && obj.value.substr(0, 1) == '.') {
        obj.value = "";
    }
    obj.value = obj.value.replace(/^0*(0\.|[1-9])/, '$1');/***解决 粘贴不生效   ****/
    obj.value = obj.value.replace(/[^\d.]/g, ""); /***清除“数字”和“.”以外的字符  ****/
    obj.value = obj.value.replace(/\.{2,}/g, "."); /***只保留第一个. 清除多余的  ****/
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, '$1$2.$3');/***只能输入两个小数  ****/
    if (obj.value.indexOf(".") < 0 && obj.value != "") {/***以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  ****/
        if (obj.value.substr(0, 1) == '0' && obj.value.length == 2) {
            obj.value = obj.value.substr(1, obj.value.length);
        }
    }
}
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
var  confirm = 0 ;
function imageAlert(  mesage) {
        if(confirm>2)  {
            return;
        }
        $.confirm({
            theme: 'mybox-theme',
            title: 'Message',
            content: '<p>  '+mesage+'</p> <img  src="/images/download-metamask-dark.png">  ',
            animation: 'scale',
            animationClose: 'top',
            buttons: {
                'Close': function() {   confirm++;   }
            },
        });
};

$('#masterCodeUrl').everyTime('10s',personalTal);
$('#loopstepInfo').everyTime('1s',CountdownHMS);
$('#totalEth').everyTime('1s',updatetitotalEth);
$('#masterCodeUrl').everyTime('35s',checkAccount);
$('#masterCodeUrl').everyTime('97s',tableRowRun);
$('#masterCodeUrl').everyTime('90s',LoopPerjackpotAmount);

LoopPerjackpotAmount();

