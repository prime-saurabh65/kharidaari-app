import React from 'react'
import { Link } from 'react-router-dom'

const TopSection = () => {
  return (
    <div>
        <Link>
          <h1 className='text-white text-sm bg-gray-600 h-2/12 px-3 py-3 flex items-center justify-center'>
              Back to top
          </h1>
        </Link>
    </div>
  )
}

export default TopSection