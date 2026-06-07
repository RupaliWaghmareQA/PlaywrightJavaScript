/*The comparison operators you'll use most: === (strict equality), !== (strict inequality), >, <, >=, <=.
*/

// Ternary operator — great for concise assignments
const isVisible = true;
const action = isVisible ? "click" : "scroll and click";
console.log(action);  // Output: click

// Logical operators — often used in conditions
// Checking multiple conditions
const url = "https://example.com/login";
const isSecure = url.startsWith("https");
const isLoginPage = url.includes("login");

if (isSecure && isLoginPage) {
  console.log("Safe to enter credentials");
}

