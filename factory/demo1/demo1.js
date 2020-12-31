const { RSA_PKCS1_OAEP_PADDING } = require("constants")

/*
 * 將new操作單獨封裝
 * 遇到new時，就考慮是否需要使用工廠模式
 * 工廠要有一個create method
 */
class Product{
  constructor(name){
    this.name = name
  }
  init(){
    console.log('init')
  }
  fn1(){
    console.log('fn1')
  }
  fn2(){
    console.log('fn2')
  }
}

class Creator {
  create(name){
    return new Product(name)
  }
}

let creator = new Creator()
let p1 = creator.create('p1')
p1.fn1();
