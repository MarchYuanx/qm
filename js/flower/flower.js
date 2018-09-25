//json object 对象字面量
//男主角
var xiaoming = {
    name: '小明',
    sex: '男',
    single: true,
    classroom: '161',
    hometown: '赣州',
    sendFlower: function(target) {
      target.receiveFlower(this);
    }
};

//js 动态语言 简单 随意 表现力
var xiaohong = {
    name: '小红',
    sex: '女',
    goodmod: false,
    single: true,
    classroom: '161',
    receiveFlower: function(){
        if(this.goodmod){
            console.log('can');
        }else{
            console.log('cannot');
        }
    },

    listenGoodMod: function(){
        setTimeout(()=>{
            this.goodmod = true;
            this.receiveFlower();
        },5000);
    },

};

// 代理Proxy
var xiaoli = {
    name: '小丽',
    sex: '女',
    hometown: '赣州',
    single: true,
    // 自已收花， 实现同一个方法接口 
    receiveFlower: function(sender) {
        //   if (sender.name != '小明') {
        //     console.log('gun');
        //     } else {
        //     console.log('还是我们在一起吧');
        //   }
        //   xiaohong.receiveFlower(sender);
        xiaohong.listenGoodMod();

    }
};


console.log(xiaoming.name);
console.log(xiaoli.name);
console.log(xiaohong.name);
xiaoming.sendFlower(xiaoli);
//xiaoming.sendFlower(xiaohong);

