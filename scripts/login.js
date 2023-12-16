import { LOGIN_API_URL, POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { displayPosts } from "./utils/displayPosts.js";
import { addToLocalStorage } from "./utils/localStorageUtil.js";

const form = document.querySelector('#login-form');
const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');


async function loginUser(user) {
    try {
        const postBody = JSON.stringify(user);
        const userLoginData = await fetchData(LOGIN_API_URL, {
            method: 'POST',
            body: postBody,
        }, false);
        const token = userLoginData.accessToken;
        addToLocalStorage('accessToken', token);
        window.location.href = '../feed';
    } catch (error) {
        document.querySelector('#error').innerHTML = '<div class="error">Wrong email or password</div>';
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userLoginDetails = {
        email: email.value,
        password: password.value,
    };
    await loginUser(userLoginDetails);
    displayPosts();
})

function main() {
    //
}
main();