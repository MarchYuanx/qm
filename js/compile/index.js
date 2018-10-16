const html = `
<view>
    <text>{{username}}</text>
</view>
`;
let username = 'TT';

//在模板中查找{{key}} 替换成username变量的值 replace 

function compile(html){
    return html;
}

const compiledHTML = compile(html);