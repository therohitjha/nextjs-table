import { withRouter } from 'next/router'
import Link from 'next/link'
function Post({post}){

    return (<>
    {Object.keys(post).length && <Link href='/' ><div className={'back'}>Back</div></Link>}
    { Object.keys(post).length ? <div className={'post-container'}>
          <img
          alt=""
          src={`https://robohash.org/${post.id}?200x200`}
          width={200}
          height={200}
        />
        <div className={'name padding'}>{post.name}</div>
        <div className={'username padding'}>Username :- @{post.username}</div>
        <div className={'padding'}>Email :- {post.email}</div>
        <div className={'padding'}>Website :- <a href={post.website}>{post.website}</a></div>
        <div className={'padding'}>Phone :- {post.phone}</div>
        <div className={'padding'}>Company :- {post.company.name}</div>
        <div className={'padding'}>City :- {post.address.city}</div>
    </div> : 'No Data'}</>)
}

export async function getServerSideProps({query:{id}}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const post = await res.json()
    return { props: { post } }
  }

export default withRouter(Post)