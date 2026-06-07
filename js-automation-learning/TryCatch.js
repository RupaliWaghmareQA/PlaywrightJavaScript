// Automation-style example
function navigateTo(url) {
    try {
        if (!url.startsWith("http")) {
            throw new Error("Invalid URL protocol");
        }
        console.log("Navigating to:", url);
    } catch (error) {
        console.log("Navigation failed:", error.message);
    }
}

navigateTo("example.com");  


// Catches missing protocol
// Output: Navigation failed: Invalid URL protocol
// Re-throwing after logging — useful for test frameworks
try {
    parseConfig("bad data");
} catch (error) {
    console.error("Config parse failed, aborting test suite");
    throw error;  // Pass it up to the test runner
}