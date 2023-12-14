import { removeFromLocalStorage } from "./localStorageUtil.js";

const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', () => {
    removeFromLocalStorage();
    window.location.href = '/index.html';
});