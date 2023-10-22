import React from 'react'

export default function Comments({comment, index, isBlogExtended}) {
  return (
    <div className='imessage'>
     {isBlogExtended ? <p className='from-them'>{comment}</p> : ''}
    </div>
  )
}
