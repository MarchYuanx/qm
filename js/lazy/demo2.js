test = 111

function foo(){
  if(foo.t) return foo.t
  foo.t = new Date()   
  console.log(foo.test)
  return foo.t
}

console.log(foo());


setTimeout(() => {
  console.log(foo());
}, 600);