import React, { Component } from 'react';
export default class Box extends Component {
    constructor(props)
    {
      super(props)
      this.deleteItem=this.deleteItem.bind(this)
    }
    deleteItem()
    {
      this.props.deleteRecord(this.props.id)
    }
    render() {
      return (
        <div className="details">
            <span>Name is : {this.props.name}</span>
            &nbsp;&nbsp;&nbsp;
            <span>Age is  : {this.props.age}</span>
            &nbsp;&nbsp;&nbsp;
            <span onClick={this.deleteItem}>X</span>
            
        </div>
      )
    }
  }