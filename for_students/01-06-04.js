    // put some code here
    // Begin Example Solution
    /** @type{HTMLInputElement} */ let text = document.getElementById("ex3-span");
    // as a hint - this will at least change the background color (but not animate it)
    text.style.backgroundColor = "#CCFFCC";
    // This is the list of colors (red, yellow, green in this example)
    /** @type{number[][]} */ const colorList = [[255, 0, 0], [255, 255, 0], [0, 128, 0]];
    /** @type{number} */ const rateOfChange = 0.01; // Set the speed of the color change
    /** @type{number} */ let currentColor = 0; // Initialize the color: a color is represented by a real number between 0 and the length of the list
    // For example, "color = 0.6" means 40% of color 1 and 60% of color 2; "color = 1.3" means 70% of color 1 and 30% of color 2; "color = 2.5" means 50% of color 2 and 50% of color 0 (if the list contains only 3 colors).
    /**
     * The function that mixes the color according to the previous definition
     * @param {number} rgb
     * @param {number} cur
     */
    function getColor(rgb, cur) {
        // Compute the RGB components for the color "cur"
        // Output the red component if "rgb" is 0, the green component if "rgb" is 1, and blue component if "rgb" is 2
        // Note that "x % 1" gives the fractional part of a number ("1.3 % 1" = 0.3)
        return colorList[Math.floor(cur)][rgb] * (1 - currentColor % 1) + colorList[Math.ceil(cur) % colorList.length][rgb] * (currentColor % 1); // CS559 Example Code
    }
    /** @type{number} */ const rate = 20; // Initialize the rate in milliseconds
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
            // Set the text color background
            // The color is computed using the "getColor" function defined above
            text.style.backgroundColor = "rgb(" + getColor(0, currentColor) + ", " + getColor(1, currentColor) + ", " + getColor(2, currentColor) + ")";
            // For each frame, increment the current color by "rateOfChange"
            currentColor = (currentColor + rateOfChange) % colorList.length;
        }
        window.requestAnimationFrame(animation);
    }
    window.requestAnimationFrame(animation);
// End Example Solution
