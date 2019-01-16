import React,{Component} from 'react';
export default class List extends Component {
    constructor(props){
      super(props)
      this.state = {
        value:''
      }  
      this.onNameChange=this.onNameChange.bind(this);
      this.onAgeChange=this.onAgeChange.bind(this);
    }
    onNameChange(event) {
      this.props.changeName(event.target.value);
    }  
    onAgeChange(event) {
      this.props.changeAge(event.target.value);
    }  
    render() {
      return (
        <div className="form">
          <h1>Form </h1>
            Name
            <input type='text' onChange={this.onNameChange}></input>
            <br/>
            Age
            <input type='text' onChange={this.onAgeChange}></input>
            <br/>
        </div>
      );
    }
  }