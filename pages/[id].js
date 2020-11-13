import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Posts({usersDetails, posts}) {

  return (<>
    {Object.keys(usersDetails).length ? <Link href='/' ><div className={'back'}>Back</div></Link>: null}
    { Object.keys(usersDetails).length ? <div className={'post-container'}>
          <Image
          alt=""
          src={`https://robohash.org/${usersDetails.id}?200x200`}
          width={200}
          height={200}
        />
        <div className={'name padding'}>{usersDetails.name}</div>
        <div className={'username padding'}>Username :- @{usersDetails.username}</div>
        <div className={'padding'}>Email :- {usersDetails.email}</div>
        <div className={'padding'}>Website :- <Link href={`//${usersDetails.website}`}>{usersDetails.website}</Link></div>
        <div className={'padding'}>Phone :- {usersDetails.phone}</div>
        <div className={'padding'}>Company :- {usersDetails.company.name}</div>
        <div className={'padding'}>City :- {usersDetails.address.city}</div>
        <div className='posts-header'>Posts</div>
       <div className='posts-details'>
        <div className='flex'><span className='post-title'>Heading:-</span>{posts.title}</div>
        <div className='flex'><div className='post-body'>Post:-</div>{posts.body}</div>
          </div>

    </div> : <div className='error-page-container'><div className='error-page'>404 Page Not Found</div><Link href='/'><a>Home</a></Link></div>}</>)
}

export async function getServerSideProps({query:{id}}) {
  const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const posts = await res1.json()

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
    const usersDetails = await res.json()

    return { props: { usersDetails, posts } }
  }

export default Posts
