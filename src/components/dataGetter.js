import React, { Component } from 'react';
import hem from '../pages/hem';
import OmOss from '../pages/omoss';









export default class DataGetter extends Component {
  constructor(props){
    super(props);
    this.state = {firstField: 'firstField', secondField: 'secondField'}
  }
  
  
  render() {
    console.log('data',this.props.firstField)
    
    return (
      
    )
  }
}