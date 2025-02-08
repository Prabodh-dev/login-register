console.log("Java loaded");
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    // Ensure elements exist before adding event listeners
    if (registerLink) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');  
            console.log("Register Clicked: Showing Register Form");
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');  
            console.log("Login Clicked: Showing Login Form");
        });
    }

    if (btnPopup) {
        btnPopup.addEventListener('click', () => { 
            wrapper.classList.add('active-popup');  
            console.log("Popup Opened");
        });
    }

    if (iconClose) {
        iconClose.addEventListener('click', () => { 
            wrapper.classList.remove('active-popup');  
            console.log("Popup Closed");
        });
    }
});
