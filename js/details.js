const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
    const res = await fetch('https://api.npoint.io/dbd17567f437435cecf3/posts/' + (id-1))
    const post = await res.json();

    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `

    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderDetails());