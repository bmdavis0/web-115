var superSecureTerminal = {
  allUserNames: [],  // empty array to store usernames
  _username: "", // initialized to blank username

  // function shows all logged usernames
  showHistory() {
    console.log(this.allUserNames);
  },

  // getter function
  get username() {
    return this._username;
  },

  //setter function
  set username(name) {
    this._username = name;  // sets the actual function name for the instance
    this.allUserNames.push(name); // adds newly created username to array
  }
}

// create new Object reference variable
var myTerminal = Object.create(superSecureTerminal);

// create new instances to populate superSecureTerminal
myTerminal.username = "Ben Davis";
myTerminal.username = "Adriane Reed";
myTerminal.username = "Ranger Reed";
myTerminal.username = "Hammy Hamilton Hamï the Avatar";

myTerminal.showHistory();