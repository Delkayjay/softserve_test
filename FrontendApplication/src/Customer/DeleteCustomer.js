import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Delete extends Component {  
    

    DeleteCustomer= () =>{  
     axios.delete('http://localhost:7077/api/customers/{customerId}'+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.FirstName}  
          </td>  
          <td>  
            {this.props.obj.LastName}  
          </td>  
          <td>  
            {this.props.obj.UserName}  
          </td>  
          <td>  
            {this.props.obj.EmailAddress}  
          </td>
          <td>  
            {this.props.obj.DateOfBirth}  
          </td>  
          <td>  
            {this.props.obj.Age}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteCustomer} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default Delete;  