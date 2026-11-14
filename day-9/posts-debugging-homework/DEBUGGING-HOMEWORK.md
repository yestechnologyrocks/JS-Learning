# Debugging homework: Posts app

## File responsibilities

- `config.js` holds the API URL.
- `api.js` fetches data and changes the response into JavaScript objects.
- `app.js` listens for the button click, calls the API function, and adds HTML to the page.

## Questions for students

1. In which file does the click event start?
2. What does `fetch()` return before `await` finishes?
3. Where can you see the response from the API?
4. What does `response.ok` protect against?
5. Why does `postsContainer.textContent = ''` run before the loop?

## Controlled debugging challenges

Make one change at a time, predict what will happen, then use Console and Network to discover why.

1. Add `console.log(posts)` after `await getPosts()`.
2. Rename `#posts-container` in `app.js` to `#post-container`, refresh, and diagnose the error. Restore it afterward.
3. Change the URL in `config.js` to an invalid path and observe the Network status and error message.
4. Comment out `postsContainer.textContent = ''`, click Load posts twice, and explain the result.
5. Add `console.log(post)` inside `forEach()` and identify `id`, `title`, and `body`.
