import React,{useMemo} from 'react'
import Table from './Table'

function Home({data}) {
  const columns = useMemo(()=>{
    return [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'User ID',
        accessor: 'userId'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
    ]},[]);

  return (
    <div className={'container'}>
      <div className={'title'}>React Table</div>
      <Table columns={columns} data={data}/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { props: { data } }
}

export default Home