function anotherFunction() {
    return 'string returned from a function'
}
function showMessage(from, text = anotherFunction()) {
    console.log( from + ": " + text );
  }
  
showMessage("Ann", 'second parameter'); // Ann: second parameter
showMessage("Ann", ); // Ann: string returned from a function