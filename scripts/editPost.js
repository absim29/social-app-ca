import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { getSinglePost, singlePostId } from "./utils/getSinglePost.js";


const postForm = document.querySelector('#post-form');

const title = document.querySelector('#post-title');
const body = document.querySelector('#post-body');
const tags = document.querySelector('#post-tags');
const media = document.querySelector('#post-media');


async function editPost() {
    const post = {
        title: title.value,
        body: body.value,
        tags: tags.value.split(' '),
        media: media.value,
    };
    const response = await fetchData(`${POSTS_API_URL}/${singlePostId()}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post),
    }, true);
    console.log(response);
}

postForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    editPost();
});

function currentPostData(post) {
    title.value = post.title;
    body.value = post.body;
    tags.value = post.tags;
    media.value = post.media;
}

async function main() {
    const postId = singlePostId();
    const post = await getSinglePost(postId);
    currentPostData(post)

}
main();