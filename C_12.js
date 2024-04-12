<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Largest Number</title>
</head>
<body>
    <script>
        function check(a ,b,c){

            if(a >= b && a >= c){
                return  a;
            }else if(b >= a && b >= c){
                return b;
            }else{
                return c;
            }

        }
        var a = prompt("Please enter the first number");
        var b = prompt("Please enter the second number");
        var c = prompt("Please enter the third number");
         
        var x = check (a,b,c);
        alert(`${a},${b},${c}: largest number is ${x}`); 

    </script>
</body>
</html>