// Put some code here
// Begin Example Solution
// Get the reference to the slider and the buttons
/** @type{HTMLInputElement} */ let s1 = (document.getElementById("slider"));
/** @type{number} */ const rate = 20; // Initialize the rate in milliseconds
/** @type{number} */ let rateOfChange = 1; // Initialize the speed of the slider movement to 1
/** @type{number} */ let lastTime = 0; // Keep track of time
/**
 * The animation function
 * @param {number} time
 */
    function animation(time) {
    // Check the time
    if (time - lastTime > rate) {
        // Update the time
        lastTime = time;
        // For each frame, increment the value of the slider by "rateOfChange"
        s1.value = (Number(s1.value) + rateOfChange).toString();
        // Change the "rateOfChange" from +1 to -1 or -1 to +1 when the value hits the min or max of the slider
        if (s1.value == s1.max || s1.value == s1.min) rateOfChange *= -1;
    }
    window.requestAnimationFrame(animation);
}
window.requestAnimationFrame(animation);
// End Example Solution