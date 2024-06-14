import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {

    const {page,HandlePageChange,totalPages}=useContext(AppContext) ;
    return (
        <div className='fixed bottom-0 bg-white w-full flex justify-around items-center h-16 border shadow-md'>
            <div>
                {page > 1 &&
                    <button className='mr-4 border-2  rounded-md  px-5 py-1' onClick={()=>HandlePageChange(page-1)}>
                        Previous
                    </button>
                }
                {page < totalPages &&
                    <button className='mr-4 border-2 rounded-md  px-5 py-1' onClick={()=>HandlePageChange(page+1)}>
                        Next
                    </button>
                }
            </div>
            <p className='font-bold'>page {page} of {totalPages}</p>
        </div>
    )
}

export default Pagination
