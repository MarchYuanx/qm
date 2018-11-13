// 命令
// 1. 按键事件
//   不同的按键做不同的操作
// 2. 不同的player JSON

//接口 interfacce
const Ryu = {
  name: "Ryu",
  attack(){
    console.log(this.name+' 攻击');
  },
  defense(){
    console.log(this.name+' 防御');
  },
  jump(){
    console.log(this.name+' 跳跃');
  },
  crouch(){
    console.log(this.name+' 蹲下');
  }
}

const makeCommand = function(receiver, state){
  // 命令对象生成者 按键对应的操作出来了 解耦
  // 目的不是执行函数 而是找到对应的对象的相应动作函数 进行返回
  return function(){
    if(receiver[state]){
      receiver[state]();
    } 
  }
}

const commands = {
  "name": "cmd",
  "119": "jump",
  "115": "crouch",
  "97": "defense",
  "100": "attack"
}

const commandStack = []

document.onkeypress = function(ev){
  var keyCode = ev.keyCode;
  var command = makeCommand(Ryu, commands[keyCode]);
  if(command){
    commandStack.push(command);
    command();
  }
  
}

document.getElementById('backBtn').addEventListener('click',function(){
  // commandStack 操作的历史 makeCommand 返回了命令对象 命令时 请记起来命令模式
  console.log('--record--start--')
  var command;
  while(command = commandStack.shift()){
    var cmd = command;
    setTimeout(function(){
      cmd();
    },1000)

    cmd();
    command();
    
    
  }
  console.log('--record--end--')
},false);

// console.log(commands.name);
// console.log(commands[name]);
// console.log(commands.115);
// console.log(commands[115]);

// function record() {
//   console.log(commandStack.length);
//   commandStack.map((item)=>{
//     item();
//   })
// }