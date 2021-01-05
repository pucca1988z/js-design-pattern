/**
 * 封裝舊API or 簡化API，把要加工的事情在adaptor完成
 * ex: vue的computed
 */

class Adaptee{
  specificRequest(){
    return 'specific request!'
  }
}

class Adaptor{
  constructor(){
    this.adaptee = new Adaptee()
  }
  request(){
    let info = this.adaptee.specificRequest();
    return `processing......, return processed result: ${info}`
  }
}

let a = new Adaptor();
console.log(a.request())