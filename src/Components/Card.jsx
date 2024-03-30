import React from 'react'

function Card({ values, func, index }) {
    const { image, name, artist, added } = values;
    return (
        <div className='w-72 p-4 bg-zinc-200 rounded flex items-center gap-5 mt-8 pb-8 relative'>
            <div className='w-28 h-28 bg-orange-500 rounded-md overflow-hidden'>
                <img className='w-full h-full object-cover object-center' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-lg font-semibold font-sans'>{name}</h2>
                <h3 className='text-sm font-medium'>{artist}</h3>
            </div>
            <button onClick={() => func(index)} className={`px-4 py-2 absolute whitespace-nowrap text-sm text-white ${added ? 'bg-teal-600' : 'bg-orange-600'} rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added ? 'Added' : 'Add To Favourites'}</button>
        </div>
    )
}

export default Card
