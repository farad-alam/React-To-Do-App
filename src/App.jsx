import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import React, { Component } from 'react'
import { ToDosItems } from "./components/ToDosItems"

 class App extends Component {

  state = {
    taskItems: [],
    text: ""

  }

  deleteTaskItems = (id)=> {
    let taskItemsAfterDel = this.state.taskItems.filter((items, i) =>{
    return i !== id
   })
   this.setState({taskItems: taskItemsAfterDel})
 
  }

  toDoinputHandlar = (e) => {
    this.setState({text: e.target.value})
   
  }

  addTextToArray = e => {
    if (this.state.text !== "") {
     const taskItems = [...this.state.taskItems, this.state.text]
     this.setState({taskItems: taskItems, text:""})
    }
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          <div className="col-lg-9 shadow-lg mx-auto p-3">
          <h1>React To Do App</h1>
          <hr />
            <div className="row">
              <div className="col-9 mx-auto">
                <input type="text" value={this.state.text} onChange={this.toDoinputHandlar} name="todos" id="todos" className="form-control" placeholder="Add your task..."/> <br />
              </div>
              <div className="col-3">
                  <button onClick={this.addTextToArray} className="btn btn-warning" type="button">Add ToDo</button>
              </div>
            </div>

            <div className="todos-items">
              <ToDosItems taskItems={this.state.taskItems} deleteTaskItems={this.deleteTaskItems} />
            </div>
           
          </div>
        </div>
        
      </div>
    )
  }
}



export default App
