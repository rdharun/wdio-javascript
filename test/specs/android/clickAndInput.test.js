



describe("Login to the application", ()=>{

    it("Login", async ()=>{
        describe("Android Click and Input Operations", () => {
            it("should perform click and input operations successfully", async () => {
                // Identify and click the burger icon
                const burgerIcon = await $("~open menu");
                await burgerIcon.waitForDisplayed();
                await burgerIcon.click();
        
                // Identify and click the login button from the side menu
                const loginButtonFromSideMenu = await $("~menu item log in");
                await loginButtonFromSideMenu.waitForDisplayed();
                await loginButtonFromSideMenu.click();
        
                // Identify the username input field and perform various operations
                const usernameInputField = await $("~Username input field");
        
                // Set the username
                await usernameInputField.setValue("James Kenny");
                await driver.pause(5000);
        
                // Clear and set new username
                await usernameInputField.setValue("Williamson");
                await driver.pause(5000);
        
                // Clear the username
                await usernameInputField.clearValue();
                await driver.pause(5000);
        
                // Set and append the username
                await usernameInputField.setValue("James Kenny");
                await usernameInputField.addValue(" Jacky");
                await driver.pause(5000);
            });
        });
    })
})