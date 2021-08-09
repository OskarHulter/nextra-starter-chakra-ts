import Link from 'next/link'
import posts from 'posts.json'


export function PostsListNew() {
  return (
    <>
      <ul>
        {posts.posts.map((p) => (
          <li key={p.slug}>
            <span>
              {p.date}
            </span>
            <Link href={p.slug}>
              <a>{p.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
