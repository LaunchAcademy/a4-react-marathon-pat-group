import React, {useState} from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(1)

  const setSelectedPlaylistFunction = (playlist) =>{
    return(setSelectedPlaylist(playlist))
  }

const playListData = props.data.playlists
const songsData = props.data.songs

 let selectedSongs = []

if (selectedPlaylist){
 playListData[selectedPlaylist-1].songs.forEach(playlistSong =>{
    let matchedSong = songsData.find(song => {
      return(
        playlistSong === song.id
      )
    })
    selectedSongs.push(matchedSong)
  })
} 


  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <PlaylistCollection 
        playlists={playListData}
        selectedPlaylist={selectedPlaylist}
        setSelectedPlaylist={setSelectedPlaylistFunction}
      />
      <SongCollection 
        songsCollection={selectedSongs}
      />
    </div>
  );
}

export default App
