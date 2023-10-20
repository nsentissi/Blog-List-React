import React from 'react'

export default function Comments({comment, index, isLongTextExpanded}) {
  return (
    <div>
     {isLongTextExpanded ? <p>{comment}</p> : ''}
    </div>
  )
}
