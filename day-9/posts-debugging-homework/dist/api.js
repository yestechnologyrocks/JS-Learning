// File 2: API work
async function getPosts() {
  const response = await fetch(POSTS_API_URL);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const posts = await response.json();
  console.log('Posts received from the API:', posts);
  return posts;
}
