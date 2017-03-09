import React from 'react';
import { Modal } from 'react-bootstrap'

class Popup extends React.Component {
  render() {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.content}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default Popup;