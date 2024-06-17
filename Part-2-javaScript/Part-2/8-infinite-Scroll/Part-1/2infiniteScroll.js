
// Syntax
window.addEventListener('scroll', () => {
  let scrollTotal = document.documentElement.scrollHeight;
  let scrollCurrent = window.innerHeight + document.documentElement.scrollTop;
  console.log(scrollTotal);
  console.log(scrollCurrent);
});
//------------------------------------------------------------------------
let fetching = false;
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !fetching) {
    fetching = true;
    loadData().then(() => {
      fetching = false; 
    });
  }
});
function loadData() {
  // Fetch data
  return new Promise(resolve => setTimeout(resolve, 2000)); // Mock fetch delay
};
