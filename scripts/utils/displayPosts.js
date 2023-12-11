import { generatePostHtml } from "./generateHtml.js";

const postsContainer = document.querySelector('#posts-display');


async function displayPosts(posts, filterCallback) {
    postsContainer.textContent = '';

    posts.filter(filterCallback).forEach(post => {
        const currentPost = generatePostHtml(post);
        postsContainer.appendChild(currentPost);
    });

}

export { displayPosts };