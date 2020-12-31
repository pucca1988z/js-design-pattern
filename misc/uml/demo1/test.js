class Car {
  constructor(number, name){
    this.number = number
    this.name = name
  }
}

class NormalCar extends Car{
  constructor(number, name){
    super(number, name)
    this.price = 1
  }
}

class FastCar extends Car{
  constructor(number, name){
    super(number, name)
    this.price = 2
  }
}

class Trip {
  constructor(car){
    this.car = car
  }
  start(){
    console.log(`start: name: ${this.car.name}, number: ${this.car.number}`)
  }
  end(){
    console.log(`end: price:${this.car.price * 5} name: ${this.car.name}, number: ${this.car.number}`)
  }
}

let a1 = new FastCar(123, 'mondeo')
let trip = new Trip(a1);
trip.start()
trip.end()


