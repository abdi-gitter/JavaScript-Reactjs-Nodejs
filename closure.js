// how a simple closure function works
//the context of the surrounding

function x(){
    var a = 7;
    function y() {
        console.log(a)
      }
      y();
}
x();
