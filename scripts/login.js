import { LOGIN_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";

const form = document.querySelector('#login-form');

const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');

async function registerUser(user) {
    const postBody = JSON.stringify(user);
    const myData = await fetchData(LOGIN_API_URL, {
        method: 'POST',
        body: postBody,
    });
    console.log(myData);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userRegistrationDetails = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    registerUser(userRegistrationDetails);
})

function main() {
    //
}
main();