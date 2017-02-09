import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from '../components/NewPlaylist';
import FilterInput from '../components/FilterInput';
import axios from 'axios';

class PlaylistContainer extends React.Component {




  constructor(){
    super();
    this.state = {
      inputValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {

  }

  handleSubmit(submissionEvent){
    submissionEvent.preventDefault();
    //post request sends to server from AppContainer
    this.props.setPlaylists(this.state.inputValue);
    this.setState({inputValue: ''});
  }


  handleChange(changeEvent){
    const value = changeEvent.target.value;
  //  console.log("event", submissionEvent);
    console.log("Handle Change", value);
    this.setState({
      inputValue: value
    });
  }

  render () {

     const isInvalid = this.state.inputValue.length > 16 || this.state.inputValue == '';

    return (
      <div>
        <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} formValue={this.state.inputValue} isInvalid={isInvalid} />
      </div>
    );
  }
}

export default PlaylistContainer;

//<FilterInput setInputValue= {this.setInputValue} />
