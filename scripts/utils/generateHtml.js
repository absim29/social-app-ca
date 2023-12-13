
function generatePostHtml(post) {
    const { title, body, media } = post;

    const postWrapper = document.createElement('div');
    postWrapper.classList.add('col-xs', 'col-md-6', 'col-lg-4', 'col-xl-4', 'mb-2');

    const card = document.createElement('div');
    card.classList.add('card', 'shadow-sm');

    const image = document.createElement('img');
    image.classList.add('post-image');
    if (media) {
        image.src = media;
    } else {
        image.src = '../../images/feed-image.jpg';
    }
    image.alt = title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'bg-info');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = body;

    const buttons = document.createElement('div');
    buttons.classList.add('d-flex', 'justify-content-around');

    const likeButton = document.createElement('i');
    likeButton.classList.add('fa-regular', 'fa-heart');
    likeButton.addEventListener('click', () => {
        if (likeButton.classList === 'fa-regular', 'fa-heart') {
            likeButton.classList.toggle('fa-solid');
        } else {
            likeButton.classList.remove('fa-regular');
        }
    });

    const shareButton = document.createElement('i');
    shareButton.classList.add('fa-solid', 'fa-share-nodes');

    const editButton = document.createElement('i');
    editButton.classList.add('fa-regular', 'fa-pen-to-square');
    editButton.addEventListener('click', () => {
        window.location.href = `/edit-post/?id=${post.id}`;
    });

    buttons.append(likeButton, shareButton, editButton);

    cardBody.append(titleElement, text, buttons);

    card.append(image, cardBody);

    postWrapper.appendChild(card);

    return postWrapper;
}

export { generatePostHtml };