## 关于 ##
本人对前端感兴趣，一直想实践下自己
在众多应用中，考虑之后选择了美团外卖来模仿，
这段时间就利用课余时间进行开发，前端用vue+vuex+vue-router+axios，
因为需要用到定位和支付等功能，需要后端配合，而且想要做真正数据交互，
所以用express(基于nodejs的框架)做后台，数据库用NOSQL的mongodb。 
前端项目包含20多个路由，涉及到vue文件有40个，
功能设计登录，定位，浏览商品，加购物车，下订单，支付(支持微信和支付宝的扫码支付和调起app支付)，
评价，个人信息更改，
是一个较为完整的项目。

### 注意：此项目为个人开发实践练习，不作为任何商业用途
   
## 功能 ##
- 登录/注册
- IP定位
- 搜索地址
- 获取商店(计算当前位置和商店的距离)
- 加购物车
- 下订单
- 支付(支持微信和支付宝的扫码支付和调起app支付)
- 评价
- 头像上传(用了七牛云存储)
- 图片懒加载


## 技术栈 ##
- Webpack-cli搭建项目
- Vue全家桶(vue+vuex+vue-router)
- CSS预处理器SCSS
- axios与后端进行请求数据
- 七牛云存储图片
- 支付宝和微信支付
- 使用better-scroll滚动
- Express搭建后端服务
- Mongoose对MongoDB进行便捷操作

## 项目部署

阿里云 CentOS 7.4 64位

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node
2、mongodb
```

```
git clone https://github.com/zwStar/meituan-backend.git

mongdb开机连接

cd meituan-backend

npm install

配置config.js里面的参数

npm run dev


```

## 写到最后
要先将数据库中的数据进行恢复。
安装mongoddb.4.2版本的。
安装好后配置全局变量，使无论在哪个盘都可以使用mongodb的命令。
打开cmd输入'mongod'连接数据库，再重新打开一个cmd输入mongo,就可以使用mongodb的语法了，
在第二个cmd中输入`mongorestore --db shitang --dir`(dir就是st-backend-master中的db下shitang的路径)。





