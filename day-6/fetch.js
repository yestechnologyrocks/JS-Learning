// Fetch function in JS

async function fetchData() {
  const reponse = await fetch(
    "https://jsonplaceholder.typicode.com/post?userId=10"
  );
  if (reponse.status === 200) {
    console.log("Data fetched successfully");
  } else if (reponse.status === 404) {
    console.log("Data not found");
  }
  //   console.log(reponse);
}
// fetchData();

// HTTP codes:
// 200 - OK
// 201 - Resource Created successfully
// 400 - Invalid or Bad request
// 401: Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 500 - Not Implemented/ Server side failure
// 501 - Server Error
// 301 - Redirect

async function getTasks() {
  try {
    const reponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    console.log(await reponse.json());
  } catch (error) {
    console.log("Error fetching data");
  }
}
getTasks();

// Student homework
// Write a table in your notes for 200, 201, 404, and 500 with a plain-English meaning.
// Create `getProject(id)` that checks response.ok before returning the Response.
// In a `try/catch`, log the status and a friendly message for a failed id.
// Answer: Why can a fetch Promise resolve even when the API returns 404?
