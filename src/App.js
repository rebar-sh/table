import React, { Component } from 'react'
import TableInfo from './Table/TableInfo'
 import data from './data/data.json'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data: data
    }

    this.sortBy = this.sortBy.bind(this);
    

  }

  sortBy(key) {
    this.setState({
     data: data.sort((a, b) => a.username.localeCompare(b.name))
     
    })
  } 
 
  render() {
    return (
      <div>
        <TableInfo data={this.state.data}  sortBy={this.sortBy}/>
      </div>
    )
  }
}
