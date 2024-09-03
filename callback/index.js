//How call back functions work

function attachEventListeners(){
    let count = 0;
    document.getElementById('clickMe')
    .addEventListener('click', function cli(){
    console.log('Button Clicked', ++count);
    });
}
attachEventListeners();
