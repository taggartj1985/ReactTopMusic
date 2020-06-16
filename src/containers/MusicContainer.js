import React from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetails'


class MusicContainer extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        songs: [],
        selectedSongList: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }


  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error);
  }

  handleChange(songs){
      this.setState({selectedSong: songs})
    }


  render(){

    const selectedSong = this.state.songs.find(song => song.id.attributes['im:id']=== this.state.selectedSong)
    return(
      <div>
      <h2>Top 20 UK Songs</h2>
      <SongList songs={this.state.songs} onSelect={this.handleChange} />
      <SongDetail song={selectedSong} />
      </div>
    )
  }


}

export default MusicContainer;
