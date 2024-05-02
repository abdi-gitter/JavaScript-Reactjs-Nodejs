//How promise works
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






  /* Things learned:
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handlers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute). */
