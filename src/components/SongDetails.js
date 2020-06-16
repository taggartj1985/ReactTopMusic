import React, {Fragment} from 'react';

const SongDetails = (props) => {
  if (!props.song) return null;

  return (
    <div>
    <h3>
      <a href={props.song.link[0].attributes.href}>
      {props.song["im:artist"].label}
      </a>
    </h3>

    <p>Song: {props.song["im:name"].label}</p>

    <p>Price: {props.song["im:price"].label}</p>

    <img src={props.song["im:image"][2].label} alt="single cover"/>
    <br/>
    <audio src={props.song.link[1].attributes.href} controls type="audio/ogg"></audio>
    </div>
  )
}

export default SongDetails;
