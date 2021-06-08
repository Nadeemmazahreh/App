import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      numOfVotes : 0
    }
  }

  incrementNumOfVotes = () => {
    this.setState({
      numOfVotes : this.state.numOfVotes+1
    })
  }
    
  render(){
    return(
      <div className ="block">
          <Card  className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" onClick={this.incrementNumOfVotes} src={this.props.imageUrl} alt = {this.props.title} title={this.props.title} />
            <Card.Body onClick={() => this.props.setModalShow(true)}>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
                💖:{this.state.numOfVotes}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </div>
    )
  }
}

export default HornedBeast;
