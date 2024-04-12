  var number = prompt("Plese  enter a number");
    if(number == 1){
        console.log(`${number} is neither prime nor composite number`);
    }else if(number < 1){
        console.log(`${number} is not a positive integer`);
    }else{
        for (var i = 2; i < number ; i++) {
            if(number % i === 0) {
                alert(`${number} is not a prime number`);
                break;
        }else{
            var res = `${number} is a prime number`;
        }
    }
    alert(res);
    }
