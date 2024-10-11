//function to explain objects and classes in js

//objects an instance of a class

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
  }
  
  User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
  };
  
  User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
  };
  
  var userOne = new User('ryu@ninjas.com', 'Ryu');
  var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
  
  console.log(userOne);
  userTwo.login();

//How do objects and classes work in js?
  
