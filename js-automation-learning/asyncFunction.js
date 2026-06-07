// A function that returns a Promise (simulating a delay)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




async function runAutomation() {
    console.log("Opening browser...");
    await delay(1000); // Simulating async operation

console.log("Navigating to page...");
await delay(1500); // Simulating async operation

console.log("Taking screenshot...");
await delay(800);

console.log("Closing browser...");
}


runAutomation();