import React from 'react'

export default function Comments({comment, index, isLongTextExpanded}) {
  return (
    <div className='imessage'>
     {isLongTextExpanded ? <p className='from-them'>{comment}</p> : ''}
    </div>
  )
}
