var myStr="java script is a front end language";
console.log(myStr.length);



var myStr="java script is a front end language";
console.log(myStr.indexOf('front'));


var myStr="java script is a front end language";
console.log(myStr.lastIndexOf('front'));


var str="java script is a front end language";
console.log(str.slice(0,6));
console.log(str.slice(-9));
console.log(str.slice(8));


var str="java script is a language";
console.log(str.substring(5,9));


var str="java script language";
console.log(str.toUpperCase(myStr));


var str="JAVA SCRIPT LANGUAGE";
console.log(str.toLowerCase(myStr));


var firstStr="java";
var secondStr="script";
console.log(firstStr.concat(' ',secondStr));
console.log(firstStr.concat(secondStr));
console.log(firstStr.concat('@',secondStr));



var myStr="     Hello    ";
console.log(myStr.trim());


var str="Java script language";
console.log(str.charAt(5));


var str="Java script front end language";
console.log(str.split(''));
console.log(str.split(" "));
console.log(str.split(','));