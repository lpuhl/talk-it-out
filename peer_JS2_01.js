/*
1. Start with the number 42 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 53
2-1. If true, add 42 to 'value'
2-2. If false, subtract 13 from 'value'

3. Create a string that is set to 11, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

9. If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. 
If neither of these are true, set the value to 2.

10. Create a while loop that counts down from 10 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 7. Is that what you got?
*/


// Step 1
var value = 42;

// Step 2
if (value >= 53) {
	value +=42;
} else {
	value -=13;
}

// Step 3
value += "11";
//value = "2911" 
//console.log("step3", value);


// Step 4
var array = [];

for (var i = 0; i < value.length; i++) {
	array[i] = value.charAt(i);
}
// console.log("step4", array[3]);

// Step 5
array.pop();
array.shift();
// console.log("step5", array);

// Step 6
var str = "";
for (var i = array.length; i > 0 ; i--) {
	str += array[i-1];
	}
// console.log("step6 ", str);	
// Step 7
value = parseInt(value); 
str = parseInt(str); 
// console.log("step7: value " + value + " str " +str)


// Step 8
value = value + str;


// Step 9
if (value < 60) {
	value = 14;
} else if (value == 2930) {
	value = 27;
} else { value = 2;}

// console.log("step 9", value)

// Step 10
var counter = 10;
while(counter > 0) {
	value++;
	counter--;
}

// console.log("step 10", value);

// Step 11
var change = function(val) {
	val = val.toString();
	if (val.length > 1) {
		for (var i = 0; i < val.length; i++){
			if (i != 0) {
				val = val[i];
			}
		}
	}
	return val;
}
// Step 12
value = change(value);

// Step 13
console.log(value);

