import React from 'react'

const Playlist = (props) => {
  return(
  <div onClick={props.handleClick} className={props.isSelected}>
    <p>{props.playlist.name}</p>
  </div>)
}

export default Playlist