const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'https://api.npoint.io/dbd17567f437435cecf3/posts?_sort=likes&_order';

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <a href='/details.html?id=${post.id}' style="text-decoration:none; color:#444;"><div class="post">
            <h2 style="text-decoration: none;">${post.title}</h2>
            <p>${post.body.slice(0, 200)}</p>
        </div></a>
        `
    })

    container.innerHTML = template; 
}

window.addEventListener('DOMContentLoaded', () => renderPosts());