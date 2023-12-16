import { REGISTER_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";

const form = document.querySelector('#registration-form');
const name = document.querySelector('#reg-name');
const email = document.querySelector('#reg-email');
const password = document.querySelector('#reg-password');

async function registerUser(user) {
    try {
        const postBody = JSON.stringify(user);
        const myData = await fetchData(REGISTER_API_URL, {
            method: 'POST',
            body: postBody,
        });
        console.log(myData);
        window.location.href = '../';
    } catch (error) {
        document.querySelector('#error').innerHTML = '<div class="error">Please check that the information is correct</div>';
    }
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