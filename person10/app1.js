//setTimeout in js


setTimeout(function(){
    console.log('Timer')
 }, 5000);

function x(y){
    console.log('x'); 
    
    y();
}
    x(function y(){
 console.log('y');
});
