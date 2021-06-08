import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import Button from 'react-bootstrap/Button'
import Main from './Main.js';
import HornedBeast from './HornedBeast.js'

class SelectedBeast extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          modalShow : false,
        }
      }

    setModalShow = (input) => {
        this.setState({
          modalShow : input
        })
      }


    render(){
        return (
          <>
            <HornedBeast
              imageUrl = {this.props.imageUrl}
              title = {this.props.title}
              description = {this.props.description}
              setModalShow = {this.setModalShow}
            />

            <MyVerticallyCenteredModal
              show={this.state.modalShow}
              onHide={() => this.setModalShow(false)}
              imageUrl = {this.props.imageUrl}
              title = {this.props.title}
              description = {this.props.description}
              setModalShow = {this.setModalShow}
            />
          </>
        );
      }

}

     
export default SelectedBeast;


class MyVerticallyCenteredModal extends React.Component {
        
    constructor(props){
        super(props);
      }

  render(){
    return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader closeButton>
            <ModalTitle id="contained-modal-title-vcenter">
              {this.props.title}
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <img src={this.props.imageUrl}></img>
            <h4>{this.props.description}</h4>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.props.onHide}>Close</Button>
          </ModalFooter>
        </Modal>
    );
}

}