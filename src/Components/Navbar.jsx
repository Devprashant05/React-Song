import React from 'react'

function Navbar({ values }) {
    return (
        <div className='w-full px-20 py-3 flex items-center justify-between bg-orange-50'>
            <h2 className='text-2xl font-sans font-bold text-orange-600'>Orange</h2>
            <div className='flex gap-3 bg-orange-600 text-white text-sm px-4 py-2 rounded-md'>
                <h3>Favourites</h3>
                <h3>{values.filter(item => item.added).length}</h3>
            </div>
        </div>
    )
}

export default Navbar
