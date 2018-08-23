//提示界面
this.purchase = `
<b style="color:white" class="titlepopoutrightmini ethglow-calm-down-sumpunk">Key</b> 是你在每一轮游戏中的<b class="titlepopout-right-mini-grey-shadow">参与凭证</b>!<br>
<br>
<br>
<b>购买一个或更多Key</b><br>
-每购买一个Key会增加60秒，但不会超过5小时.<br>
-让您正在退出游戏。您是最后一个购买Key的玩家。<br>
<br>
- 您拥有的每把 <b>Key</b> 会将获得分红，分红会直接存入你的收益<br>
<br>
- <b class="tooltipyellow"> 在每轮的最后 </b> 你的Key积攒的固定分红将全部可以提取！
<br>
<br>
- 最后，Key的价格会随着每售出一把Key而逐渐提升！
<br><br>
您可以通过持续不断的购买Key，来确保自己是最后的赢家，Key会随着游戏的继续而持续分红。<br><b>每一个购买Key的玩家都会给你分红</b>
`

this.vault = `
<b>不用担心:</b> 你在这里看到的任何分红都被完全锁定，全部在链上，没有人可以窃取。
<br>
<br>
<b class="titlepopoutrightminiinverse ethglow-calm-down-sumpunk">分红收益</b>
<br> 是您目前所拥有的ETH收益
<br>
<br>
当一轮游戏在持续进行的时候，购买Key需要花费您一定数目的ETH。您拥有越多的Key，就可以获得更多的ETH分红到<span class=popoverrightmini>您的</span> 钱包！在游戏结束的时候您还有可能获得最后的大奖分红！
<b>锁定收益</b> 可以快速估计您的Key目前为止锁定了多少ETH，当前回合结束时可使用。
<br>
<br>
<b class="titlepopoutrightminiinverse ethglow-calm-down-sumpunk">邀请收益</b><br>
您可以通过注册链接“邀请”其他人玩游戏而获得其他人10%的推荐奖励。
您可以拿到被邀请人每笔投资的10%，
 <br>
 <br>
 查看邀请玩家面板获取更多如帮助信息。
`
this.games = `
这个里面详细记录了你的 <b class="popoverglow">信息</b>
<br>
<br>
看着计时器你可以知道游戏还有多久结束以及如果你购买了最后一把Key，你可以知道你距离你中最后的大奖还有多久，如果最后一把Key不是你购买的，你可以通过购买Key获得大奖的获取权。
<br>
<br>
游戏重要事项提示
<br>
你从游戏中获取的分红和利润，会促使你在一轮结束后开始新一轮。
`


this.teams = `
一个直观的倒计时，可以方便的看到你是否是最后一把Key的持有者和你距离大奖池还有多久。
<br>
<br>
查看Key购买框下面的战队选择框，了解每个团队的特点，并决定您想支持哪支战队。
<br>
<br>
更重要的是， <b>你应该加入哪个队伍</b>
`


this.teamselect= `
<br>
每一个战队都有自己不同的特点<b>您</b> 可以自己决定决定 <b style="color:white" class="popoverglow titlepopoutrightmini">你的</b> 资金如何分配到哪一个队伍。
<br>
<br>
`


this.snek="孙小美说明."
this.whale="钱夫人说明."
this.bull="阿土伯说明."
this.bear="大老千说明."


this.referral =`免费注册（只需要付出矿工费）
<br>
<br>
你的注册名字主要显示是退出游戏时显示在官网主页，.让每个人都能看到你退出了。
<br>
<br>
注册后可以获得专属的邀请链接以及邀请码，你可以通过分享邀请链接或者邀请码来获取别人的分红。<br>
<br>
<br>
有玩家通过你的邀请链接或邀请码参与游戏，合约会给您<b>10%</b> 的ETH。这整个过程都是链上自动进行的。
<br>
<br>
`
this.leaderboard ='敬请期待'

this.stats =``


let buyButtonMessagePlayer = [
	`啊！$player 刚才获得了最后一把钥匙，他要拿走奖池啦,`,
	`快买一把Key，不惜一切代价停止$player。 自己赢得大奖`,
	`问问自己，你准备好把大奖送给$player了吗`,
	`$player获得了最后一把Key`,
	`$player 正在取代你成为最后一把Key的持有者`,
]

let buyButtonMessageAnon = [
	`购买Key或者退出游戏`,
	`我们不确定谁可以拿到大奖，但现在肯定不是你。买一把Key去争夺奖池!`,
	`如果倒计时归零，大奖就没了!`,
	`再次获得大奖的所有权`,
]


let exitScamTheft = [
	`你拿到了最后一把Key!`,
	`不要告诉别人你拿到了最后一把钥匙。`,
	`你在做梦吗？ 竟然即将获得大奖`,
	`既然获得了最后一把大奖的所有权，不要失去它`,
	`现在每个人都知道你获得了最后一把Key`,
	`老实说，能拿到最后一把Key很厉害`,
	`恭喜，恭喜，恭喜，恭喜!`,
	`你获得了最后一把Key`,
	`你可以拿走奖池啦`,
	`告诉所有人，你获得了大奖，让别人嫉妒去吧`,
	`你真的好厉害`,
]

this.copiedMessage=`邀请链接已复制.`
this.namePurchaseSuccessMessage="智能合约正永久地将您的名字写入区块链"
this.namePurchaseErrorMessage="取消注册名字"
this.noInviterMessage="找个朋友邀请您吧"
this.notSignMessage="您没有登录钱包."
this.errorNetWorkMessage="您没有登录钱包."
this.buyOrderCancel=`购买订单取消`
this.anityPurchaseCancelled='取消注册名称'
this.purchaseSuccess=`您的购买请求已经提交到区块链上`
this.withDrawSuccess=`您的提现请求已经提交到区块链上`
this.withDrawrCancel=`提现订单取消`
this.onEndTx1=`你的Key数目现在是`
this.onEndTx2=`个Key，叮叮叮当`
this.onEndTx3=`个Key，叮叮叮当`
this.onEndTx4=`个Key，叮叮叮当`
this.onEndTx5=`刚刚获得`
this.onEndTx6=` Key.`
this.onWithdraw1=`您成功提取`
this.onWithdraw2=` ETH 到您的钱包!`
this.onWithdraw3=`您成功提取`
this.onWithdraw4=`ETH 到您的钱包!`
this.onWithdraw4=`刚刚提取`
this.onWithdraw6=`ETH 从合约.`
this.onNewName1=`您刚刚改变您的名字`
this.onNewName2=`您刚刚改变您的名字`
this.onNewName3=`一个新成员注册了邀请链接，欢迎他`
this.copyFirst=`错过了F3D，千万不要再错过了Rich 3D，2018最后一个翻盘的机会，点击`    
this.copyLast=`现在加入Rich 3D，成为第一批专属邀请人员。`