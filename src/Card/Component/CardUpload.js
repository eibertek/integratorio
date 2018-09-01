import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import * as actions from '../Redux/cardActions';

class CardUpload extends Component {
  onChange = (evt) => {
    const files = evt.target.files; 
    this.props.cardUpload(files);
  }

  render() {
    return (
      <Paper className="paper-upload">
          Subir archivo
        <TextField type="file" accept="image/png, image/jpeg" onChange={this.onChange} ></TextField>
      </Paper>
    )
  }
}


const mapStateToProps = (state) => ({
    file: state.card.fileUploaded  
})

const mapDispatchToProps = {
    cardUpload: actions.cardUpload
}

export default connect(mapStateToProps, mapDispatchToProps)(CardUpload)
