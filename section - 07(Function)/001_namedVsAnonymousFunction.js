

// Anonymous Function Expression
let run = function () {
    console.log('run');
};

run();

let walk = run;  // here walk also point to the same reference of the function

walk();


//output
// run
// run


