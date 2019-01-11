var fetch = require('node-fetch');

function* gen() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result);
  console.log(result.bio);
}

var g = gen();
console.log(g.next());
console.log(g.next({ bio:'lalala' }));
console.log(g.next());