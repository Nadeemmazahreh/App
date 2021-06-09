import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hornsFilter : ['1','2','3','100']
    }}

  updateHorns = (event) => {
    if (event.target.value == 'All Horns') {
      this.setState({
        hornsFilter : ['1','2','3','100']
      })
    }
    else {
      this.setState({
        hornsFilter : event.target.value
      })
  }}
  

  render() {
    console.log(this.state.hornsFilter);
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How many Horns do you need?</Form.Label>
            <Form.Control as='select' placeholder="Select number of horns" name='horns' custom onChange={this.updateHorns}>
              <option value="All Horns">All Horns</option>
              <option value="1">One</option>
              <option value="2">Two</option> 
              <option value="3">Three</option>
              <option value="100">Wow!</option>
            </Form.Control>
          </Form.Group>
        </Form>
          <CardColumns>
            {jsonData.map(item => (
              <SelectedBeast
                imageUrl={item.image_url}
                title={item.title}
                description={item.description}
                horns={item.horns}
              />
            ))}
          </CardColumns>
      </div>
    )
  }
}


export default Main;
