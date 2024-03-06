let myPromise = new Promise(function (resolve, reject) {
    // producing code
    // ... takes some time
    // eventually, the producing code will call either the resolve() or reject() function
    // but for now, it is pending
    // only one of the two functions will be called, the other one will be ignored
    resolve('Success!'); // fulfilled
    // resolve receives a value that will be passed to the consuming code
    reject('Failure!'); // rejected
    // reject receives a value that will be passed to the error handling consumer code
  });
  // consuming code
  myPromise.then(
    function (value) {
      // consuming code
      console.log(value); // "Success!"
    },
    function (error) {
      // error handling consumer code
      console.log(error); // "Failure!"
    }
  );