import Link from 'next/link'

export default function Home({posts}) {
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((p,key)=><li key={key}><Link href={`/posts/${p}`}><a>View {p}</a></Link> - <Link href={`/api/posts/${p}`}><a>Delete</a></Link></li>)}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
 
  const posts = [1,2,3,4,5];

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}