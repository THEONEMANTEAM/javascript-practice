"use strict";
// This enables that it runs modern js strictly, which is a good practice to avoid errors in your code.
alert("Hello, World!");
alert(3
    + 1
    + 2);
// Always put a closing semicolon at the end of a line of code. It is not required, but it is a good practice to avoid errors in your code.
let message = "Hello!";
// it defines the variable and assigns the value "Hello!" to it. The variable can be used later in the code.
alert(message);
let user = "john",
    age = 16,
    message2 = "Broski";
alert(user);
alert(age);
alert(message2);
// It defines three variables and assigns values to them. The variables can be used later in the code.
const mybirthday = "18.04.2000";
// It defines a constant variable and assigns the value "18.04.2000" to it. The value of a constant variable cannot be changed later in the code.
alert(1 / 0);
alert("not a number" / 2);
// It shows the result of dividing 1 by 0, which is Infinity, and the result of dividing a string by a number, which is NaN (Not a Number).
alert(3 * NaN);
// It shows the result of multiplying 3 by NaN, which is also NaN.
// Nan is sticky and operation involving Nan is NaN, theres only on exception which is NaN**0 is 1.
alert(`let name be ${user}`);
alert(`the result is ${2 + 2}`);
// when you use backticks, you can use ${} to insert variables or expressions into the string. In this case, it inserts the value of the variable user and the result of the expression 2 + 2 into the strings.
// you can also use string + variable name alert("let name be" + user).
let isgreater = 20 > 8
alert(isgreater);