import React from 'react';
import { Link } from 'react-router';
import Songs from './Songs';

class Playlist extends React.Component {

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;

    this.props.selectPlaylist(playlistId);
  }

  render () {

    // const artist = this.props.selectedArtist;
    // const albums = artist.albums || [];
    // const songs = artist.songs || [];
    // const children = this.props.children;
    const playlist = this.props.selectedPlaylist;
    console.log(this.props);

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default Playlist;
