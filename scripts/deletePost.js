import { POSTS_API_URL } from "./constants.js";
import { fetchData } from "./fetchData.js";
import { singlePostId } from "./utils/getSinglePost.js";

const deleteButton = document.querySelector('#delete-button');


async function deletePost() {
    const postId = singlePostId();
    const response = await fetchData(`${POSTS_API_URL}/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    }, true);
    console.log(response);

}

deleteButton.addEventListener('click', async (event) => {
    event.preventDefault();
    await deletePost();
    window.location.href = '/feed';
});