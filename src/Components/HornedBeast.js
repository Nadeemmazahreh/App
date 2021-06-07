import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <img src={this.props.imgURL} alt = {this.props.title} title={this.props.title}/>
        </div>
    )
  }
}

export default HornedBeast;
