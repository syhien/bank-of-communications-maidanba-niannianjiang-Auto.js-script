auto.waitFor()
app.launchApp("买单吧")

id("com.bankcomm.maidanba:id/bc_toolbar_container").waitFor()
var bar = id("com.bankcomm.maidanba:id/bc_toolbar_container").findOnce()
if (bar != null) {
    bar.child(2).click()
    text("年年奖").findOnce().parent().child(0).click()
    text("登录免费得机会 移动支付得机会 餐饮消费得机会").waitFor()
    text("登录免费得机会 移动支付得机会 餐饮消费得机会").findOnce().parent().child(1).click()
    
}