// Activity 2: Create a function that destructures an object and returns the number of posts for a given user.
//Solution:
function getNumberOfPosts(user) {
  const { posts } = user;
  return posts.length;
}