import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Details from './Details.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


let id=0;
function generateID()
{
  id=id+1
  return ('id'+id);
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={BasicExample} />
        <Route exact path="/topics" component={App} />
        <Route path="/about" component={Details} />
      </div>
    </Router>
  );
}




class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      name:'',
      age:0,
      counter:0,
      list:[],
      state:false
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange  = this.onAgeChange.bind(this);
    this.displayName=this.displayName.bind(this);
    this.deleteRecord=this.deleteRecord.bind(this);
  }
  deleteRecord(id)
  {
    for (var i =0; i < this.state.list.length; i++)
   if (this.state.list[i].id === id) {
      this.state.list.splice(i,1);
      this.setState({})
      break;
   }
  }
    onNameChange(names)
    {
      this.state.name=names
      // alert('Name is '+names)
    }
    onAgeChange(ages)
    {
      this.state.age=ages
    }
    displayName(event)
    {
        console.log('inside this')
      var  item={}
      item['name']=this.state.name
      item['age']= this.state.age
      item['id']=generateID()
      this.state.list.push(item)
      this.setState({
        state:true
      })
      
    }

  render() {
    return (
      <div className="App">
      <List changeAge={this.onAgeChange} changeName={this.onNameChange}/>
      <button onClick={this.displayName}>Add Record</button>
      <div className="thissl">
      {/* {this.state.state===true?<Details item={this.state.list} deleteRecord={this.deleteRecord}/>:<div></div>} */}
      </div>
      </div>
    );
  }
}


// export default App;
