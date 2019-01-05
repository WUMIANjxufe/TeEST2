//男主角
//json object  对象字面量
//描述着，对象就出来了
var xiaoming = {
  name: '小明',
  sex: '男',
  single: true,
  classroom: '161',
  hometown: '赣州',
  sendFlower: function (target) {
      //将小明传给美女们收花的方法
      //在对象 this指向对象本身
      target.receiveFlower(this);
  }
};


//js是一门动态语言，很简单，随意，表现力
//json 构建了两个对象 现实世界中具有的属性 描述了出来
//class 属性 方法
var arr = [true, false];
var isHappy = arr[Math.floor(Math.random()*arr.length)];
var xiaohong = {
  name: '小红',
  sex: '女',
  single: true,
  classroom: '161',

  receiveFlower: function () {
      if (isHappy === false) {
          console.log("小红扔掉鲜花");
      }
      else {
          console.log("小红收下鲜花");
      }
  },
  listenGoodMod: function () {
      // 定时器
      setTimeout(() => {
          //this.isHappy = true;
          this.receiveFlower();
      }, 2000);
  }
};

//小明找小丽代为给小红送花
//又要有一个对象 小丽 JSON
//对象间的复杂关系，设计模式
//小明先送给小丽， 代理 Proxy,
//小丽了解小红的情况，有无男朋友，心情如何
//A->B A->c->B
//xm sendFlower xl
var xiaoli = {
  name: '小丽',
  sex: '女',
  hometown: '赣州',
  single: true,
  //自己收花，实现了同一个方法（接口）
  classroom: '161',
  receiveFlower: function () {
      // if(sender.name!='小明'){
      //     console.log('gun');
      // }else{
      //     console.log('还是我们在一起吧');

      // }
      //小丽该怎么办？
      //把花转给小红
      //如何优化？ 小红心情不太好，
      //小红的心情好时再送花，10s 监听心情
      //心情好（10s）再送花
      xiaohong.listenGoodMod();
  }
};
xiaoming.sendFlower(xiaoli);
// xiaoming.sendFlower(xiaohong);
//送花对象变了，只要实现同样的方法（接口），实现对象的互换
//Proxyable
