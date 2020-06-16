import React from 'react';

const SongList = (props) => {

  const songOptions = props.songs.map(song => {
    return <option value={song.id.attributes['im:id']} key={song.id.attributes['im:id']} >{song.title.label}</option>
  })

  function handleChange(ev) {
  props.onSelect(ev.target.value)
  }

  return(
    <select id="song-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a song...</option>
        {songOptions}
      </select>
  )

}


export default SongList;
