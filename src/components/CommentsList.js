import React from 'react'
import Comments from './Comments'

const CommentsList = ({data}) => {

  console.log(data);
  
    

    if(!data) return
 

    
  return (
    <div className=''>
          {
     
          data.map((elem,index) => (
          
       <div>
            <Comments   key = {index}  data={elem} />


             <div className='ml-8 border-l border-black '>

             <CommentsList data = {elem. replies}/>

             </div>

        </div>
        
        
        ))

          }
    </div>
  )
}

export default CommentsList
