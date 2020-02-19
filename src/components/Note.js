import React from 'react'

const Note = (props) => {
    console.log('........Note props......', props)
    return(
      <div>
        <p>{props.note}</p>
      </div>
    )
  }
  
export default Note;
