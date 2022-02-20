module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/shitang',    //数据库地址
    notifyUrl: 'http://192.168.124.13:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转，这个也是需要自己配，就是自己的ip
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'shitang',   //七牛云bucket
    AccessKey: '05uoleU76m-xRYEsP_wz2vhfv5sTFKo1QzOs1emo',   //七牛云accessKey
    SecretKey: 'P5z1IlLFhjvhkbsJpJsVvsnZk-J3bciiErENlJlg',    //七牛云secretKey
    tencentkey: '5J7BZ-X263F-YRCJU-NUDIO-PT3R2-6RBTO',        //腾讯位置secreKey
    tencentkey2: '5J7BZ-X263F-YRCJU-NUDIO-PT3R2-6RBTO',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    //七牛云的密钥和名称都需要自己去注册七牛云申请一个项目管理的地址，
	//腾讯密钥也是需要自己去注册腾讯位置服务，然后申请一个应用，得到密钥，由于是自己在本地运行的一个项目，
	//所以需要拿到自己的ip地址，配置到刚刚申请的应用中去。
};


