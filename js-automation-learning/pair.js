const user = {
name :"Rupali",
role:"QA Engineer",
age :30,
email:"rupali@example.com",
isActive:true
};


console.log(user.name);    // Dot notation
console.log(user["role"]);// Bracket notation
//------------------

// Nested object — common in automation configs

const config={
browser:"chromium",

launchOptions:{
headless:true,
slowmo:200
}


};

console.log(config.launchOptions.headless); // Accessing nested property
console.log(config["launchOptions"]["slowmo"]); // Bracket notation for nested property
//..........

const testdata={ url:"abc.com0"};
testdata.url="xyz.com";
testdata.retries=2;
console.log(testdata);

//--------------------Assignment by reference
const testConfig = {
    baseUrl:"https://demo.playwright.dev",
    timeout:30000,
    browser:"chromium",
    options:{ 
        headless:true
    },
    viewport:{
        width:1280,
        height:720  
    }
}
console.log(testConfig.viewport.width); // 1280
