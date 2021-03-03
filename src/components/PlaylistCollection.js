import React, {useState} from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {

  const listOfPlaylists = props.playlists.map(playlist =>{
    const setSelectedPlaylistFunction = () => {
        return(
        props.setSelectedPlaylist(playlist.id)
      )
    }
 
    let setSelectedClass = ""
    if(props.selectedPlaylist === playlist.id){
      setSelectedClass = "selected"
    }

    return(
      <Playlist 
        key={playlist.id}
        playlist={playlist}
        isSelected={setSelectedClass}
        handleClick={setSelectedPlaylistFunction}
      />
    )
  })

  return(
    <div>
      <h1>Playlists</h1>
      {listOfPlaylists}
    </div>
  )
}

export default PlaylistCollection