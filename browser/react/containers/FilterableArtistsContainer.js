import React from 'react';
import { Link } from 'react-router';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      inputValue: ''
    };
    this.setInputValue = this.setInputValue.bind(this);
  }

  componentDidMount () {
  }

  setInputValue(input){
    const value = input.target.value;

    this.setState({
      inputValue: value
    });
  }

  render () {

    const artists = this.props.artists;

    let filteredArtists = [];

    artists.forEach((artist) => {
      if (artist.name.includes(this.state.inputValue)) {
        filteredArtists.push(artist);
      }
    });

    return (
      <div>
        <FilterInput setInputValue= {this.setInputValue} />
        <Artists artists= {filteredArtists} />
      </div>
    );
  }
}

export default FilterableArtistsContainer;
