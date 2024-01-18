// utilities/swipe.js
const swipe = async (element) => {
    // Define the maximum number of scroll attempts
    const maxScrollAttempts = 5;
    let elementFound = false;
    for (let attempt = 1; attempt <= maxScrollAttempts; attempt++) {
        // Check if the element is visible
        if (await element.isDisplayed()) {
            elementFound = true;
            break; // Element is found, exit the loop
        }
        
        // Define swipe start and end coordinates for a scroll
        const startX = 500; // X-coordinate (horizontal position)
        const startY = 800; // Starting Y-coordinate (top of the screen)
        const endY = 200; // Ending Y-coordinate (bottom of the screen)
        
        // Perform the vertical swipe (scroll down)
        await driver.touchAction([
            { action: "press", x: startX, y: startY },
            { action: "wait", ms: 2000 }, // Wait for a short duration (optional)
            { action: "moveTo", x: startX, y: endY },
            { action: "release" },
        ]);
    }
};

module.exports = {
    swipe,
};