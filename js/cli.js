// modules (they require their respective package)
var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt'); // don't need to specify full path since was downloaded by npm

// need to launch the prompt by calling the start method
prompt.start();
// need to tell prompt what we need, call the prompt.get() method to tell it what info to prompt the user for
  // first argument is name for the user input,
  // next argument is a function to run after getting the goal #.
  // this function allows for error (1st param) and result( 2nd param) which holds input from user.
  // put rest of code inside this function, pass goal # to pingpong function.
prompt.get('goal', function(err, result) {
  var result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });
});
