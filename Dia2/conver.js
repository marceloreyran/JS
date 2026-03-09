//string a number
Number("123"); //123
parseInt("123px");
+ "123";
console.log(Number("123")); //123
console.log(parseInt("123px")); //123
console.log(+"123"); //123

// Number a String
String(42);        // "42"
(42).toString();   // "42"
42 + "";           // "42"

//Boolean 
Boolean(1);
Boolean(0);
!!1;
console.log(Boolean(1));

// conversion atutomatica
console.log("5" + "3"); // "53" (string concatenation)
console.log("10" - "4"); // 6 (subtraction, converts to numbers)
console.log("10" * "20");  // 200 (multiplication, converts to numbers)
console.log("10" / "2");   // 5 (division, converts to numbers)
console.log(10 + 10);      // 20
console.log(5 + "10");  // "510" (number + string results in string concatenation)
console.log("5" - 2);    // 3 (string converted to number)
console.log("5" * 2);    // 10 (string converted to number)
console.log("5" / 2);    // 2.5 (string converted to number)