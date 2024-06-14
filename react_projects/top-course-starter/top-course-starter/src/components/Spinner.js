import React from 'react'
import './spinner.css'
function Spinner() {
    return (
        <div className='flex flex-col items-center space-y-2'>
            <div className='loader'></div>
            <p>Loading...</p>
        </div>
    )
}

export default Spinner

