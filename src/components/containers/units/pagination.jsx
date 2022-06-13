import React from 'react'
import ReactPaginate from 'react-paginate'

export const Pagination = ({data,dataPerPage,setPageNumber}) => {
    const pageCount = Math.ceil(data.length/dataPerPage)
    const changePage=({selected})=>setPageNumber(selected)
  return (
    <>
        {data.length!==0&&<ReactPaginate previousLabel={'<'} nextLabel={'>'} pageCount={pageCount} onPageChange={changePage}
        containerClassName={'bg-gray-100 flex mx-auto rounded-full px-4 py-1  justify-center items-center'}
        previousLinkClassName={'text-sec px-1'} nextLinkClassName={'text-sec px-1'}
        activeClassName={'bg-base rounded-full py-1'}
        activeLinkClassName={'bg-opacity-0 mx-0'}
        pageLinkClassName={'bg-sec text-third rounded-full px-2 pb-1 mx-1'}
        breakLabel="..."/>}
    </>
    
  )
}