import React from 'react'
import Link from 'next/link';


function Home({data}) {
  
  return (
    <div className="table">
    
    <div className="row header">
      <div className="cell">
        ID
      </div>
      <div className="cell">
        USERID
      </div>
      <div className="cell">
        TITLE
      </div>
    </div>
    {data.map((e)=><div className="row" key={e.id}>
     <div className="cell" data-title="ID">
        {e.id}
      </div>
      <div className="cell" data-title="UserID">
        {e.userId}
      </div>
      <Link href='/[id]' as={`/${e.id}`}>
        <div className="cell" data-title="Title" style={{cursor:'pointer'}}>
        {e.title}
      </div>
      </Link>
    </div>)}
    
  </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { props: { data } }
}

export default Home