import React from 'react'
import './Note.css'

const Note = (props) => {
    console.log('........Note props......', props)
    return(
      <div className="Note">
        <p>{props.note}</p>
      </div>
    )
  }
  
export default Note;
