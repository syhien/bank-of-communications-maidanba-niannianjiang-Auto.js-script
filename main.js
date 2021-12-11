auto.waitFor()
app.launchApp("买单吧")

id("com.bankcomm.maidanba:id/bc_toolbar_container").waitFor()
sleep(500)
var bar = id("com.bankcomm.maidanba:id/bc_toolbar_container").findOnce()
sleep(1000)
if (bar != null) {
    bar.child(2).click()
    sleep(500)
    text("年年奖").findOnce().parent().child(0).click()
    text("登录免费得机会 移动支付得机会 餐饮消费得机会").waitFor()
    sleep(500)
    text("登录免费得机会 移动支付得机会 餐饮消费得机会").findOnce().parent().child(1).click()
    sleep(1000)

    //加骰子
    desc("游戏攻略").findOnce().parent().child(5).click()
    sleep(500)
    while (text("领取").findOnce()) {
        text("领取").click()
        sleep(500)
    }
    text("加骰子").findOnce().parent().child(1).click()
    sleep(500)

    //前进
    var goView = desc("游戏攻略").findOnce().parent().child(4)
    while (goView.child(0).text() != "0次") {
        goView.click()
        sleep(2000)
    }
    toast("用完骰子了")
}