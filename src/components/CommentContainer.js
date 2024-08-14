import React from 'react'
import Comments from './Comments'

import { comments } from '../utils/comments'
import CommentsList from './CommentsList'

const CommentContainer = () => {
  return (
    <div>
        <div className='font-bold ml-3 text-2xl'>  
         Comment :
       </div>
     
      <div className=''>
      <CommentsList data = {comments}/>
      </div>
    </div>
  )
}

export default CommentContainer
