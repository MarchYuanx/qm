const chior = [];//乐队


var duck = {
    duckSing: function(){s
        console.log('嘎嘎嘎');
    }    
}

var chicken = {
    chickSing: function(){
        console.log('咯咯咯');
    },
    
}

chicken.duckSing = function(){
    console.log('嘎嘎嘎');
}


// 如果它走起路来像鸭子，叫起来也是鸭子，那么就是鸭子，
// duck typing js 弱类型



/*
 * 功能加入合唱团
 * params: animal 动物对象
 * chior 加入新成员
 */ 

function joinChior(animal){
    if(animal && typeof animal.duckSing=='function'){
        chior.push(animal);   
    }else{
        console.log('打扰了');
    }
}



for(var i=0;i<999;i++){
    joinChior(duck);   
}
console.log(chior.length);

joinChior(chicken);
console.log(chior.length);
