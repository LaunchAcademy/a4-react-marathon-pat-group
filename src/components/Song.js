import React from 'react'

const Song = props => {
  return(
    <div onClick={props.handleSongClick} className={props.isSelected}>
      <p>{props.artist} -{props.name} </p>
    </div>
  )
}

export default Song