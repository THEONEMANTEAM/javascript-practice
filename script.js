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
// This defines a variable isgreater and assigns the result of the comparison 20 > 8 to it, which is true. It then shows the value of isgreater in an alert box.
let name = prompt("what is your name?", "");
alert("Hello, " + name);
// The prompt function shows a dialog box that asks the user for input. The first argument is the message to display, and the second argument is the default value (which is an empty string in this case). The user's input is then stored in the variable name, and an alert box greets the user with their name.
alert(`Welcome ${name}`);
let isKing = confirm("Are you the king?");
alert(isKing);
// The confirm function shows a dialog box with OK and Cancel buttons. It returns true if the user clicks OK, and false if the user clicks Cancel. The result is stored in the variable isKing, and an alert box shows the value of isKing.
let isOnline = true;
alert(typeof isOnline);
// it should show boolean, because isOnline is a boolean variable. The typeof operator returns a string that indicates the type of the operand.
isOnline = String(isOnline);
alert(typeof isOnline);
// it should show string, because isOnline has been converted to a string using the String() function. The typeof operator returns a string that indicates the type of the operand.
alert(isOnline);
let age2 = 25;
alert(typeof age2);
age2 = String(age2);
alert(typeof age2);
alert(age2);
let str = "345";
alert(typeof str);
let num = Number(str);
alert(typeof num);
alert(num);
// it should show number, because str has been converted to a number using the Number() function. The typeof operator returns a string that indicates the type of the operand.
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean("hello"));
alert(Boolean(""));
// it should show true, false, true, false, because 1 is truthy, 0 is falsy, a non-empty string is truthy, and an empty string is falsy. The Boolean() function converts the operand to a boolean value.
let x = -1;
alert(x);
// it should show -1, because x is assigned the value -1. The alert function shows the value of x in an alert box.
let z = 2,
    y = 3;
alert(y - z);
// it should show 1, because z is 2 and y is 3, and the - operator subtracts z from y. The alert function shows the result in an alert box.
alert(2 ** 3);
// it should show 8, because the ** operator raises 2 to the power of 3. The alert function shows the result in an alert box.
alert(5 % 2);
// it should show 1, because the % operator returns the remainder of dividing 5 by 2. The alert function shows the result in an alert box.
alert(8 ** (1 / 2));
// it should show 2.8284271247461903, because the ** operator raises 8 to the power of 1/2, which is the same as taking the square root of 8. The alert function shows the result in an alert box.
let s = "Your" + "name";
alert(s);
// it should show "Yourname", because the + operator concatenates the two strings "Your" and "name". The alert function shows the result in an alert box.
alert("1" + 2);
// it should show "12", because the + operator concatenates the string "1" and the number 2, which is converted to a string. The alert function shows the result in an alert box.
alert(2 + 2 + "1");
// it should show "41", because the + operator first adds the two numbers 2 and 2, resulting in 4, and then concatenates the string "1" to it. The alert function shows the result in an alert box.
alert("2" / 2);
// it should show 1, because the / operator divides the string "2" by the number 2, which is converted to a number. The alert function shows the result in an alert box.
alert("6" / "2");
// it should show 3, because the / operator divides the string "6" by the string "2", both of which are converted to numbers. The alert function shows the result in an alert box.
alert(6 / "2");
// it should show 3, because the / operator divides the number 6 by the string "2", which is converted to a number. The alert function shows the result in an alert box.
let apples = "9";
let oranges = "7";
alert(apples + oranges);
// it should show "16", because the + operator concatenates the two strings "9" and "7". The alert function shows the result in an alert box.
alert(+apples + +oranges);
// it should show 16, because the + operator converts the strings "9" and "7" to numbers and adds them together. The alert function shows the result in an alert box.
let h = 2;
h *= 4;
alert(h);
// it should show 8, because the *= operator multiplies h by 4 and assigns the result back to h. The alert function shows the value of h in an alert box.
let counter = 1;
counter++;
alert(counter);
// it should show 2, because the ++ operator increments counter by 1. The alert function shows the value of counter in an alert box.
counter--;
alert(counter);
// it should show 1, because the -- operator decrements counter by 1. The alert function shows the value of counter in an alert box.