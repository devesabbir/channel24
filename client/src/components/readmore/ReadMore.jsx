import React from 'react'
import './ReadMore.css'

function ReadMore({className, style, title}) {

  return (
     <div className='readMoreWrapper'>
        <button className={`${className && className} readMoreBtn`} style={style && {...style}} >{title}</button>
    </div>
  )
}

export default ReadMore