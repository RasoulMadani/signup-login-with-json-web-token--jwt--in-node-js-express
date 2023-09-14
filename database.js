const users = [
  { email: "jame@gmail.com", password: "random" },
  {
    email: "jack@gmail.com",
    password: "JackPassword",
  },
];
const publicPosts = [
    {
        title: " Post 1",
        content:  "Post 1 is free"
    },
    {
        title: " Post 2",
        content:  "Post 2 is free"
    },
]

const privatePosts = [
    {
        title: " Post 3",
        content:  "Post 2 is private"
    }
]
module.exports = {
    users,
    publicPosts,
    privatePosts
}