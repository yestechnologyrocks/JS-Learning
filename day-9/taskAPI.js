// JS Module called as taskAPI.js

export const task = {
  id: 1,
  title: "Task 1",
  description: "This is task 1",
};
export async function fetchData() {
  const reponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=10"
  );
  const data = await reponse.json();

  // {}
  return data;
}

// {fetchData: fetchData, add: add, subtract: subtract} is exported as a single object called task
