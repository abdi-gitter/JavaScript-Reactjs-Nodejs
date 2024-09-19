//How call back functions work in js

function attachEventListeners(){
    let count = 0;
    document.getElementById('clickMe')
    .addEventListener('click', function cli(){
    console.log('Button Clicked', ++count);
    });
}
attachEventListeners();
