import React, {useState} from 'react'
import Song from './Song'

const SongCollection = (props) => {
  const [selectedSong, setSelectedSong] = useState()

  const songTiles = props.songsCollection.map((song, index) => {

    const setSelectedSongFunction =() => {
      return(
        setSelectedSong(song.id)
      )
    }

    let setSelectedClass = ""
    if(!selectedSong === song.id && index === 0 ){
      setSelectedClass = "selected"
    } else if(selectedSong === song.id) {
      setSelectedClass = "selected"
    }

    return(
      <Song 
        key={song.id}
        name={song.name}
        artist={song.artist}
        isSelected={setSelectedClass}
        handleSongClick={setSelectedSongFunction}
      />
    )
  })

  return(
    <div>
    <h1> Songs</h1>
    {songTiles}
    </div>
  )
}

export default SongCollection