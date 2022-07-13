// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression
//    that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'

const string = "ahb acb aeb aeeb adcb axeb";
console.log(string.match(/a.b/g)); // [ 'ahb', 'acb', 'aeb' ]

// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const string2 = "2 + 3 223 2223";
console.log(string2.match(/2 \+ 3/)); // [ '2 + 3', index: 0, input: '2 + 3 223 2223', groups: undefined ]

// 3. Get the day, month and year of the current date and output it to the console separately
const date = new Date();
console.log(date.getDate(), date.getMonth(), date.getFullYear()); // 13 6 2022 (based on my local date during the execution)
