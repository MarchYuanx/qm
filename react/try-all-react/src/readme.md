
绑定 1 
constructor(){
  this.fn = this.fn.bind(this)
}

绑定 2 
onChange={(e)=>{this.fn(e)}}
