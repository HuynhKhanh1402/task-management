import React from 'react'

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                 <p className='text-xs font-medium'></p>
            </div>
        )
    }
  return (
    <div>CustomTooltip</div>
  )
}

export default CustomTooltip