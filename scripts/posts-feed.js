import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { checkUserLogin } from "./utils/checkUserLogin.js";
import { displayPosts } from "./utils/displayPosts.js";

let posts = [];
const searchInput = document.querySelector('#searchInput');


searchInput.addEventListener('input', () => {
    displayPosts(posts, filerPostHandler);
});

function filerPostHandler(post) {

    if (post.title.toLowerCase().match(searchInput.value.toLowerCase().trim())) {
        return true;
    }
}

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