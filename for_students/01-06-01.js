// Begin Example Solution
// Get the reference to the sliders
/** @type{HTMLInputElement} */ let s1 = (document.getElementById("slider1"));
/** @type{HTMLInputElement} */ let s2 = (document.getElementById("slider2"));
/** @type{HTMLInputElement} */ let s3 = (document.getElementById("slider3"));
/**
 * Define a function to compute the difference between the values
 */
    function update12() {
    s3.value = (Number(s2.value) - Number(s1.value)).toString();
}
// Call the function update12 when sliders 1 and 2 are changed
s1.oninput = update12;
s2.oninput = update12;
/**
 * Define a helper function to bound a value x by (a, b)
 * @param {number} x The value
 * @param {number} a The min
 * @param {number} b The max
 */
function bound(x, a, b) {
    return Math.max(a, Math.min(x, b)); // CS559 Example Code
}
/**
 * Define a function to change either slider 1 or slider 2 when slider 3 is changed
 */
function update3() {
    // Try to change slider 1 until it is out of bound
    s1.value = bound(Number(s2.value) - Number(s3.value), 0, 100).toString();
    // Change slider 2 in case slider 1 is not changed enough (bounding is not necessary here)
    s2.value = bound(Number(s1.value) + Number(s3.value), 0, 100).toString();
}
s3.oninput = update3;
// End Example Solution