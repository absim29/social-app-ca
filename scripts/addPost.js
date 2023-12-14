import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";

const postForm = document.querySelector('#post-form');

const title = document.querySelector('#post-title');
const body = document.querySelector('#post-body');
const tags = document.querySelector('#post-tags');
const media = document.querySelector('#post-media');


async function addNewPost() {
    const post = {
        title: title.value,
        body: body.value,
        tags: tags.value.split(' '),
        media: media.value,
    };
    const response = await fetchData(POSTS_API_URL, {
        method: 'POST',
        body: JSON.stringify(post),
    }, true);
    console.log(response);
}

postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await addNewPost();
    window.location.href = '/feed';
});

