import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './DeleteCustomer';  

export default class Customerlist extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {customers: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:7077/api/customers')  
        .then(response => {  
          this.setState({ customers: response.data });  
          console.log(response)  

        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  

    tabRow(){  
      return this.state.customers.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">Customer List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Firstname</th>  
                <th>Lastname</th>  
                <th>Username</th>  
                <th>Email Address</th>
                <th>DateOfBirth</th>  
                <th>Age</th>  
                <th>Date Created</th>  
                <th>Date Edited</th>
                <th>Is Deleted</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  