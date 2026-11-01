// Sequntial work: one step needs to be completed before the
// next step can be started.
// In this case, we need to get the user data first before
// we can get the dashboard data for that user.

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}
function getUserDashboard(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: userId, dashboard: "User Dashboard Data" });
    }, 1000);
  });
}

async function loadMyDashboard() {
  // Get the user data from API
  const user = await getCurrentUser();
  // get the user dashboard data from API
  const dashboard = await getUserDashboard(user.id);
  return dashboard;
}
loadMyDashboard().then((dashboard) => {
  console.log(dashboard);
});
