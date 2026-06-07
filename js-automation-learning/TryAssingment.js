function safeDivide (a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;

}

// Now wrap the CALL in try...catch, not the function body
try {
    console.log(safeDivide(10, 2));
} catch (error) {
    console.log("Division failed:", error.message);
}

try {
    console.log(safeDivide(10, 0));
} catch (error) {
    console.log("Division failed:", error.message);
}