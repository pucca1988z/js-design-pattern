class LoginForm{
  constructor(){
    if(LoginForm.instance instanceof LoginForm){
      return LoginForm.instance
    }
    this.isHidden = true
    LoginForm.instance = this;
  }
  show(){
    if(!this.isHidden){
      console.log('loginform is showed already')
      return
    }
    this.isHidden = false;
    console.log('loginform is show now')
  }
  hide(){
    if(this.isHidden){
      console.log('loginform is hidden already')
      return
    }
    this.isHidden = true 
    console.log('loginform is hidden now')
  }
}

let l = new LoginForm()
l.show()
l.show()
l.show()
let ll = new LoginForm();
ll.show()
ll.show()
l.hide()
ll.hide()