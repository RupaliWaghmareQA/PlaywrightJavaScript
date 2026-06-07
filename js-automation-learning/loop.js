// while loop — retry until condition is met
let loaded = false;
let attempts = 0;

while (!loaded && attempts < 5) {
    attempts++;
    console.log("Retry attempt:", attempts);
    // In real Playwright: loaded = await page.isVisible('#success');
    if (attempts === 3) loaded = true; // Simulating success
}
//.....................
for(let i=1; i<=5; i++)
    {
        console.log("Checkcing Attempt:", i);
        if(i===3)
        {
            console.log(" Page loaded!");
            break;
        }
    }
