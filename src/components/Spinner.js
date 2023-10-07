import React from 'react'

const Spinner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center my-lg-5'>
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner