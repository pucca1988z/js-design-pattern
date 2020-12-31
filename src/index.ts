class People {
  public name
  public age
  protected weight
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
    this.weight = 120
  }
  eat(){
    console.log(`${this.name} eat something`)
  }
  speak(){
    console.log(`${this.name} is speak, age is ${this.age}`)
  }
}

class Student extends People{
  public number
  private girlfriend
  constructor(name:string, age:number, number:string){
    super(name, age);
    this.number = number
    this.girlfriend = 'chi'
  }
  study(){
    console.log(`${this.name} is studying`)
  }
  getWeight(){
    console.log(`weight: ${this.weight}, fuck ${this.girlfriend}`)
  }
}

let a = new Student('a', 10, 'A1')
a.getWeight();

let loadImg = (src:any) => {
  return new Promise((resolve, rejects)=>{
    let img = document.createElement('img')
    img.onload = () =>  resolve(img);
    img.onerror = () => rejects('error here')
    img.src = src
  })
}
let src = 'https://cdn2.techbang.com/system/excerpt_images/1429/original/31bd7a721e1cbecd169b61da5c179794884a4aff.jpg'
let result = loadImg(src).then((img:any)=>{
  console.log(img.width)
})






