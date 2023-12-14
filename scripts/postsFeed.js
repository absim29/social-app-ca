import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { checkUserLogin } from "./utils/checkUserLogin.js";
import { displayPosts } from "./utils/displayPosts.js";
import { filerPostHandler } from "./utils/searchUtil.js";
import { sortPosts } from "./utils/sortUtil.js";

let posts = [];

const searchInput = document.querySelector('#searchInput');
const sortButton = document.querySelector('#sort-button');

searchInput.addEventListener('input', () => {
    displayPosts(posts, filerPostHandler);
});

sortButton.addEventListener('click', () => {
    sortPosts(posts);
    displayPosts(posts, filerPostHandler);
});

async function main() {
    const isLoggedIn = checkUserLogin();

    if (isLoggedIn) {
        posts = await fetchData(POSTS_API_URL, { method: 'GET' }, true);
        displayPosts(posts, filerPostHandler);
    } else {
        console.log('Not logged in');
    }
}

main();