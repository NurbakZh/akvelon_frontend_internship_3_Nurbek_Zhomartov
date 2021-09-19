function show() {
  var a = document.querySelectorAll("[required]")
  // a contains name, mail, password by indexes 0,1,2
  var name = a[0].value
  var mail = a[1].value
  var pass = a[2].value
  var pattern = /^[a-zA-Z\s]{1,120}$/
  var check = 0
  for (var i = 0; i < a.length; i++) {
    if(!a[i].value) {check = 1}
  }
  if(check > 0) {
    alert("Please fill all the fields")
  }
  else if(pattern.test(name) == false) {
    alert("Please use only latin letters in your name")
  }
  else if(pass.length<8){
    alert("Password should contain at least 8 symbols") 
  }
  else {
    alert("Success, check your data in console!")
    console.log("Full Name: "+name)
    console.log("E-mail: "+mail)
    console.log("password: "+pass)
  }
}
