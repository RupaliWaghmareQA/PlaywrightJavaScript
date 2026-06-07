const testpages =["/login","/dashboard","/settings"];

testpages.push("/profile");

const baseurl="https://www.example.com";

testpages.forEach(function(page){
    console.log(baseurl+page);
});
/* 
Template literals
const userId = "123";
const url = `https://site.com/users/${userId}`;   // https://site.com/users/123
const selector = `[data-testid="item-${userId}"]`; // [data-testid="item-123"]*/