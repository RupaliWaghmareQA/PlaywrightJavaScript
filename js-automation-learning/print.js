const url="https://demo.playwright.dev";
const username="testuser";
let loginAttempts=0;
const rememberMe=false;

loginAttempts++;
console.log(username);
console.log(loginAttempts);
console.log(rememberMe);
function greet()
{
    console.log("Hello, " + username + "!");
}
greet();

function navigateToUrl(url)
{
    console.log("Navigating to: " + url);
}

navigateToUrl("http://facebook.com");

function buidSelector(id)
{
return `#${id}`;
}

const selector = buidSelector("username");
console.log(selector);


function loginCredentials(username, password)
{
    return {
        user: username, pass: password};
}
const credentials=loginCredentials("testuser","password123");
console.log(credentials.user);
console.log(credentials.pass);
