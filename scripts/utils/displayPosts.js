import { POSTS_API_URL } from "../constants.js";
import { fetchData } from "../fetchData.js";

async function displayPosts() {
    const posts = await fetchData(POSTS_API_URL, {
        method: 'GET'
    }, true);
    console.log(posts);
}

export { displayPosts };