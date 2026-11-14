// File 3: page behaviour
const loadButton = document.querySelector('#load-posts-button');
const postsContainer = document.querySelector('#posts-container');
const statusMessage = document.querySelector('#status-message');

function showPosts(posts) {
  postsContainer.textContent = '';

  posts.forEach((post) => {
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `<h3>${post.id}. ${post.title}</h3><p>${post.body}</p>`;
    postsContainer.appendChild(article);
  });
}

async function loadPosts() {
  statusMessage.textContent = 'Loading posts...';

  try {
    const posts = await getPosts();
    showPosts(posts);
    statusMessage.textContent = `${posts.length} posts loaded.`;
  } catch (error) {
    console.error('Could not load posts:', error);
    statusMessage.textContent = 'Something went wrong. Read the Console and Network tabs.';
  }
}

loadButton.addEventListener('click', loadPosts);
