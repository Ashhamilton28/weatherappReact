import React from 'react'

function Container({children}) {
  return (
    <div className='bg-black min-h-screen'>{children}</div>
  )
}

export default Container