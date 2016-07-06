// Start it off right by giving i the value of 1, and the biggest number is 100.
// We will walk 1 step until we reach 100 steps from our first initial step.
for(var i = 1; i <=100; ++i){

 if(i % 15 === 0){

        console.log('Fizz Buzz');

    }else if(i % 3 === 0){

        console.log('Fizz');

    }else if(i % 5 === 0){

        console.log('Buzz');
    }else{

        console.log(i);
    }
}