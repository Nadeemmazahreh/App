import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component{

  render(){

    return(
      <div>
        <CardColumns>
          {jsonData.map(item => (
            <SelectedBeast
              imageUrl = {item.image_url}
              title = {item.title}
              description = {item.description}
            />
          ))}
        </CardColumns>
      </div>
        
    )
  }
}

export default Main;
