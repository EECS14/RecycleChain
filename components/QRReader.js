import React, { Component } from 'react'
const isBrowser = typeof window != 'undefined';

if (isBrowser) {
    var QrReader = require('react-qr-reader');
}
 

class QRReader extends Component {

    constructor(props) {
        super(props);
        this.state={
          result: ''
        };
    }

  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
        this.setState({ result: data});
    }
}

handleError = err => {
    console.error(err)
}

  render() {
    return isBrowser && (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '25%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRReader;