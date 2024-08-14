import React from 'react'

const Comments = (props) => {

    const{data} = props


    const {name,comments} = data
    
  return (
    <div className='mt-4 bg-slate-300 p-2 ' >
      <h1 className='m-1 font-semibold ' >👤{name}</h1>
     <h3 className='ml-5'>{comments}</h3>
    </div>
  )
}

export default Comments
