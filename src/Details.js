import React,{Component} from 'react'
import Box from './Box.js'
export default class Details extends Component {
    constructor(props){
      super(props)
      this.state = {
        list:(this.props.item)
      }
      this.renderBox=this.renderBox.bind(this);
    }
    renderBox(name,age,id) {
      return (<Box name={name} age={age} id={id} deleteRecord={this.props.deleteRecord}/>);
   }
  
    render() {
      return (
        <div className="list">
       { this.props.item.map(details => ( this.renderBox(details.name,details.age,details.id))) }
        </div>
      );
    }
  }