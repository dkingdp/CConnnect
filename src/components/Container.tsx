import React from 'react'

const Container = ({children}:{children: JSX.Element}) => {
  return (
    <div className='flex flex-col min-h-screen text-primary-200'>{children}</div>
  )
}

export default Container