import Head from 'next/head'

export default function Post({post}) {
  
  return (
    <div>
      <h1>Post {post.id} - {post.time}</h1>      
    </div>
  )
}


export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
  }
  
export async function getStaticProps(context) {
 
  const post = {
      id: context.params.id,
      time: Date.now()
  }

  return {
    props: {
      post,
    },
    revalidate: 100,
  }
}