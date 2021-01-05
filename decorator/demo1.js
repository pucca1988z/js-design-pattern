/**
 * 在不改變原來的class(Original)前提下，新增/修改原來的功能(originalFn)
 */
class Original{
  originalFn(){
    console.log(`original function...`)
  }
}

class Decorator{
  constructor(original){
    this.original = original
  }
  originalFn(){
    this.original.originalFn()
    this.addNewFn()
  }
  addNewFn(){
    console.log('add new fn to originFn')
  }
}

let o = new Original()
o.originalFn()
console.log('=====================')
let dec = new Decorator(o);
dec.originalFn()

