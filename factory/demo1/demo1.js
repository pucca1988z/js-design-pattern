/*
 * 將new操作單獨封裝
 * 遇到new時，就考慮是否需要使用工廠模式
 * 工廠要有一個create method
 */
class Product1{
  constructor(name){ this.name = name }
  init(){ console.log(`${this.name}, init...`) }
  fn1(){ console.log('fn1') }
  fn2(){ console.log('fn2') }
}
class Product2{
  constructor(name){ this.name = name }
  init(){ console.log(`${this.name}, init...`) }
  fn1(){ console.log('fn1') }
  fn2(){ console.log('fn2') }
}
class Product3{
  constructor(name){ this.name = name }
  init(){ console.log(`${this.name}, init...`) }
  fn1(){ console.log('fn1') }
  fn2(){ console.log('fn2') }
}
class Creator {
  create(name){  // crucial part
    switch (name) {
      case 'p1':
        return new Product1(name)
      case 'p2':
        return new Product2(name)
      case 'p3':
        return new Product3(name)
      default:
        break;
    }
  }
}

let creator = new Creator()
let p1 = creator.create('p1')
let p2 = creator.create('p2')
p1.init();
p2.init();
