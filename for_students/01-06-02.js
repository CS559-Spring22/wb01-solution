// Put some code here
// Begin Example Solution
// Get the reference to the slider and the buttons
/** @type{HTMLInputElement} */ const s1 = document.getElementById("slider1");
/** @type{HTMLInputElement} */ const b1 = document.getElementById("button1");
/** @type{HTMLInputElement} */ const b2 = document.getElementById("button2");
/** @type{number} */ let rateOfChange = 0; // Initialize the speed of the slider movement to 0
// Change the speed to 1 if button 1 is clicked and 0 if button 2 is clicked
b1.onclick = () => rateOfChange = 1;
b2.onclick = () => rateOfChange = 0;
/**
 * The animation function
 */
function animation() {
    // For each frame, increment the value of the slider by "rateOfChange" and bound it by 99
    s1.value = ((Number(s1.value) + rateOfChange) % Number(s1.max)).toString();
    window.requestAnimationFrame(animation);
}
window.requestAnimationFrame(animation);
// End Example Solution
