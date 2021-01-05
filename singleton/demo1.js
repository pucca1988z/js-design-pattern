class Settings{
  constructor(){
    // crucial part!
    if(Settings.instance instanceof Settings){
      return Settings.instance;
    }
    this.settingObject = {
      'background':'black',
      'version':Math.floor(Math.random()*4000)
    }
    Settings.instance = this;  // crucial part!
  }
  get(key){
    return this.settingObject[key]
  }
}

let a = new Settings();
let b = new Settings();

console.log(a.get('version'))
console.log(b.get('version'))
console.log( a===b)