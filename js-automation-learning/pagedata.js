const pageData={

url: "https://demo.playwright.dev/todomvc" ,
title: "React • TodoMVC",
input :[

   {name:"todo input" , placeholder:"What needs to be done?" , type:"text"},

]
}

function findInputByPlaceholder(placeholder){
for (const input of pageData.inputs) {
        if (input.placeholder === placeholder) {
            return input;
        }
    }
    return null;  // Not found
}
// Tests
console.log(findInputByPlaceholder("What needs to be done?"));
// Output: { name: "new-todo", placeholder: "What needs to be done?", type: "text" }

console.log(findInputByPlaceholder("Email"));
// Output: null
