// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
console.log(url.includes("staging")); // it return true and false
url.includes("production");

// startsWith / endsWith
url.startsWith("https");
url.startsWith("http://"); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a")); // It will position of the character
console.log(url.lastIndexOf("a")); // It will return position of the last chacter of the index.
console.log(url.indexOf("nothere"));

// ASCII -> A -> 65