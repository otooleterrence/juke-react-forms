import React from 'react';
import { Link } from 'react-router';

class NewPlaylist extends React.Component {

  render () {
  //const NewPlaylist = function () {
    return (
    <div className="well">
      <form className="form-horizontal" onSubmit={this.props.handleSubmit} >
        <fieldset>
          { this.props.isInvalid ? (<p className="alert alert-warning">Playlist is invalid - must be under 16 characters</p>) : null}
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" value={this.props.formValue} onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
            { this.props.isInvalid ?   <button type="submit" className="btn btn-success" disabled>Create Playlist</button> :  <button type="submit" className="btn btn-success">Create Playlist</button>}
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )}
}

export default NewPlaylist;
