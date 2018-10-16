// var str = 'Visit Microsoft';
// console.log(str);
// console.log(str.replace('Microsoft','alibaba'));
// console.log(str);

// var str2 = str.replace('Microsoft','alibaba');
// console.log(str2);

// var money = '678$234wdsfds$$-$afsadfs$ll';
// //正则
// var RMB = money.replace(/\$/g,'￥');
// console.log(RMB);

// console.log(typeof reg);

let obj={
    'username':'唐唐',
    'age':20
};
const html = `
  <view>
    <text>{{username}}</text>
  </view>
`;


function compileHTML(html){
    let reg = new RegExp(/\{\{(.*)\}\}/);
    //匹配占位符

    if(reg.test(html)==true){
        let key =RegExp.$1;
        console.log(key);
        html = html.replace(reg,obj[key]);        
        return html;
    }
    // 
    return 'not find';
}



console.log(compileHTML(html));

