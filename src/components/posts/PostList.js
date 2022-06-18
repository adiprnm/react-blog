import PostItem from "./PostItem"

export default function PostList({ posts }) {
  return posts.map((post) => (
    <PostItem
      title={post.title}
      date={post.date}
      slug={post.slug}
      key={post.slug}
    />
  ))
}
