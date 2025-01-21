/* let pizza = true;
pizza = false;
console.log(pizza);
 */ 


// The value of topic is not reset outside block in the case of let
var topic = 'javascript'

if(topic){
    //let topic = 'react'
    var topic = 'react'
    console.log('block is ' + topic)
}
console.log('global is ' + topic)
