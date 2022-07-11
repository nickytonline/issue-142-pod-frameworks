function IsrTest({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}, {post.date}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'Hello Next.js 👋', date: new Date().toISOString() },
    { id: 2, title: 'Learn Next.js', date: new Date().toISOString() },
    { id: 3, title: 'Deploy apps with Netlify', date: new Date().toISOString() },
  ]

  return {
    props: {
      posts
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default IsrTest