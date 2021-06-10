import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import SelectedBeast from './SelectedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hornsFilter: '',
      data: jsonData,
      beastsFiltered: jsonData,
    }
  }

  filterHorns = (event) => {
    if (event.target.value == '') {
      this.setState({
        hornsFilter: '',
        beastsFiltered: this.state.data
      })
    }
    else {
      let numHorns = parseInt(event.target.value)
      if (numHorns) {
        let newBeasts = this.state.data.filter(beast => beast.horns == numHorns);
        this.setState({
          beastsFiltered: newBeasts
        })
      }
    }
  }


  render() {
    console.log(this.state.hornsFilter);
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How many Horns do you need?</Form.Label>
            <Form.Control as='select' name='horns' custom onChange={this.filterHorns}>
              <option value="">All Horns</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow!</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardColumns>
          {this.state.beastsFiltered.map(item => (
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
